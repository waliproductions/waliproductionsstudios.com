import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import PageLoader from "./components/common/PageLoader";

// Route-level code splitting: each page ships as its own chunk and is
// only fetched when a visitor actually navigates to it.
const HomePage = lazy(() => import("./pages/HomePage"));
const WatchPage = lazy(() => import("./pages/WatchPage"));
const MusicPage = lazy(() => import("./pages/MusicPage"));
const GamingPage = lazy(() => import("./pages/GamingPage"));
const MarketplacePage = lazy(() => import("./pages/MarketplacePage"));
const CommunityPage = lazy(() => import("./pages/CommunityPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const StreamingServicesPage = lazy(() => import("./pages/StreamingServicesPage"));
const BusinessServicesPage = lazy(() => import("./pages/BusinessServicesPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const CreatorIntakePage = lazy(() => import("./pages/CreatorIntakePage"));
const ThankYouPage = lazy(() => import("./pages/ThankYouPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="relative min-h-screen bg-main text-white">
          <ScrollToTop />
          <Header />

          <main id="main-content" className="relative z-10">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/watch" element={<WatchPage />} />
                <Route path="/music" element={<MusicPage />} />
                <Route path="/gaming" element={<GamingPage />} />
                <Route path="/marketplace" element={<MarketplacePage />} />
                <Route path="/community" element={<CommunityPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services/streaming" element={<StreamingServicesPage />} />
                <Route path="/services/business" element={<BusinessServicesPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/creator-intake" element={<CreatorIntakePage />} />
                <Route path="/thank-you" element={<ThankYouPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </main>

          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
