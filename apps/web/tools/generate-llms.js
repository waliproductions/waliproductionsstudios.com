#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const CLEAN_CONTENT_REGEX = {
	comments: /\/\*[\s\S]*?\*\/|\/\/.*$/gm,
	templateLiterals: /`[\s\S]*?`/g,
	strings: /'[^']*'|"[^"]*"/g,
	jsxExpressions: /\{.*?\}/g,
	htmlEntities: {
		quot: /&quot;/g,
		amp: /&amp;/g,
		lt: /&lt;/g,
		gt: /&gt;/g,
		apos: /&apos;/g
	}
};

const EXTRACTION_REGEX = {
	// Matches a full self-closing <Route path="..." element={<Component .../>} />
	// tag as a single unit, capturing the path and component name directly —
	// a naive [^>]* scan stops at the inner element's own "/>" and truncates.
	route: /<Route\s+(?:index\s+)?(?:path=(["'])(.*?)\1\s+)?element=\{<(\w+)[^}]*\/?\s*>\}[^>]*\/>/g,
	helmet: /<Helmet[^>]*?>([\s\S]*?)<\/Helmet>/i,
	helmetTest: /<Helmet[\s\S]*?<\/Helmet>/i,
	title: /<title[^>]*?>\s*(.*?)\s*<\/title>/i,
	description: /<meta\s+name=["']description["']\s+content=(["'])([\s\S]*?)\1/i,
	seoTag: /<Seo\s+([\s\S]*?)\/>/i,
	seoTitle: /title=(["'])([\s\S]*?)\1/,
	seoDescription: /description=(["'])([\s\S]*?)\1/
};

function cleanContent(content) {
	return content
		.replace(CLEAN_CONTENT_REGEX.comments, '')
		.replace(CLEAN_CONTENT_REGEX.templateLiterals, '""')
		.replace(CLEAN_CONTENT_REGEX.strings, '""');
}

function cleanText(text) {
	if (!text) return text;

	return text
		.replace(CLEAN_CONTENT_REGEX.jsxExpressions, '')
		.replace(CLEAN_CONTENT_REGEX.htmlEntities.quot, '"')
		.replace(CLEAN_CONTENT_REGEX.htmlEntities.amp, '&')
		.replace(CLEAN_CONTENT_REGEX.htmlEntities.lt, '<')
		.replace(CLEAN_CONTENT_REGEX.htmlEntities.gt, '>')
		.replace(CLEAN_CONTENT_REGEX.htmlEntities.apos, "'")
		.trim();
}

function extractRoutes(appJsxPath) {
	if (!fs.existsSync(appJsxPath)) return new Map();

	try {
		const content = fs.readFileSync(appJsxPath, 'utf8');
		const routes = new Map();
		const routeMatches = [...content.matchAll(EXTRACTION_REGEX.route)];

		for (const match of routeMatches) {
			const [routeTag, , rawPath, componentName] = match;
			const isIndex = /<Route\s+index\s/.test(routeTag);

			let routePath;
			if (isIndex) {
				routePath = '/';
			} else if (rawPath) {
				routePath = rawPath.startsWith('/') ? rawPath : `/${rawPath}`;
			}

			if (componentName && routePath) {
				routes.set(componentName, routePath);
			}
		}

		return routes;
	} catch (error) {
		return new Map();
	}
}

function findReactFiles(dir) {
	return fs.readdirSync(dir, { withFileTypes: true })
		.filter(entry => entry.isFile())
		.map(entry => path.join(dir, entry.name));
}

function extractHelmetData(content, filePath, routes) {
	const cleanedContent = cleanContent(content);

	let title;
	let description;

	if (EXTRACTION_REGEX.helmetTest.test(cleanedContent)) {
		const helmetMatch = content.match(EXTRACTION_REGEX.helmet);
		if (helmetMatch) {
			const helmetContent = helmetMatch[1];
			title = cleanText(helmetContent.match(EXTRACTION_REGEX.title)?.[1]);
			description = cleanText(helmetContent.match(EXTRACTION_REGEX.description)?.[2]);
		}
	}

	if (!title && !description) {
		const seoMatch = content.match(EXTRACTION_REGEX.seoTag);
		if (seoMatch) {
			const seoProps = seoMatch[1];

			// Pages marked noindex (thank-you, intake forms, 404) shouldn't
			// be advertised to AI crawlers via llms.txt either.
			if (/(?<![\w-])noindex(?!=\{false\})/.test(seoProps)) {
				return null;
			}

			title = cleanText(seoProps.match(EXTRACTION_REGEX.seoTitle)?.[2]);
			description = cleanText(seoProps.match(EXTRACTION_REGEX.seoDescription)?.[2]);
		}
	}

	if (!title && !description) return null;

	const fileName = path.basename(filePath, path.extname(filePath));
	const url = routes instanceof Map && routes.has(fileName)
		? routes.get(fileName)
		: generateFallbackUrl(fileName);

	return {
		url,
		title: title || 'Untitled Page',
		description: description || 'No description available'
	};
}

function generateFallbackUrl(fileName) {
	const cleanName = fileName.replace(/Page$/, '').toLowerCase();
	return cleanName === 'app' ? '/' : `/${cleanName}`;
}

function generateLlmsTxt(pages) {
	const sortedPages = pages.sort((a, b) => a.title.localeCompare(b.title));
	const pageEntries = sortedPages.map(page =>
		`- [${page.title}](${page.url}): ${page.description}`
	).join('\n');

	return `## Pages\n${pageEntries}`;
}

function ensureDirectoryExists(dirPath) {
	if (!fs.existsSync(dirPath)) {
		fs.mkdirSync(dirPath, { recursive: true });
	}
}

function processPageFile(filePath, routes) {
	try {
		const content = fs.readFileSync(filePath, 'utf8');
		return extractHelmetData(content, filePath, routes);
	} catch (error) {
		console.error(`❌ Error processing ${filePath}:`, error.message);
		return null;
	}
}

function main() {
	const pagesDir = path.join(process.cwd(), 'src', 'pages');
	const appJsxPath = path.join(process.cwd(), 'src', 'App.jsx');

	let pages = [];

	if (!fs.existsSync(pagesDir)) {
		pages.push(processPageFile(appJsxPath, []))
		pages = pages.filter(Boolean);
	} else {
		const routes = extractRoutes(appJsxPath);
		const reactFiles = findReactFiles(pagesDir);

		pages = reactFiles
			.map(filePath => processPageFile(filePath, routes))
			.filter(Boolean);
	}

	if (pages.length === 0) {
		console.error('❌ No pages with Helmet components found!');
		process.exit(1);
	}


	const llmsTxtContent = generateLlmsTxt(pages);
	const outputPath = path.join(process.cwd(), 'public', 'llms.txt');

	ensureDirectoryExists(path.dirname(outputPath));
	fs.writeFileSync(outputPath, llmsTxtContent, 'utf8');
}

const isMainModule = import.meta.url === `file://${process.argv[1]}`;

if (isMainModule) {
	main();
}
