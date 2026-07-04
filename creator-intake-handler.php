<?php
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method not allowed"]);
    exit;
}

function clean_input($value) {
    return trim(strip_tags($value ?? ''));
}

$submission = [];

foreach ($_POST as $key => $value) {
    $submission[$key] = clean_input($value);
}

$log_dir = __DIR__ . '/form-logs';

if (!is_dir($log_dir)) {
    mkdir($log_dir, 0755, true);
}

file_put_contents($log_dir . '/.htaccess', "Require all denied\n");

$log_file = $log_dir . '/creator-intake-submissions.log';

$log_entry  = "==============================\n";
$log_entry .= "Date: " . date('Y-m-d H:i:s') . "\n";
$log_entry .= "IP: " . ($_SERVER['REMOTE_ADDR'] ?? 'Unknown') . "\n";

foreach ($submission as $key => $value) {
    $log_entry .= ucfirst(str_replace('_', ' ', $key)) . ": " . $value . "\n";
}

$log_entry .= "\n";

file_put_contents($log_file, $log_entry, FILE_APPEND | LOCK_EX);

$formspree_url = "https://formspree.io/f/mwvaaney";

$ch = curl_init($formspree_url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($submission));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Accept: application/json",
    "Content-Type: application/x-www-form-urlencoded"
]);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($http_code >= 200 && $http_code < 300) {
    echo json_encode(["success" => true]);
} else {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Submission saved, but forwarding failed."]);
}
