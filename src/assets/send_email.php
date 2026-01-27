<?php
header('Content-Type: application/json; charset=utf-8');

$name    = trim($_POST['name'] ?? '');
$email   = trim($_POST['email'] ?? '');
$message = trim($_POST['message'] ?? '');

if ($name === '' || $email === '' || $message === '') {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Missing fields']);
  exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Invalid email']);
  exit;
}

$to = 'marvin.strasser@icloud.com';
$subject = 'Neue Nachricht über marvin-strasser.de';

$body =
  "Name: {$name}\n" .
  "E-Mail: {$email}\n\n" .
  "Nachricht:\n{$message}\n";

$fromEmail = 'no-reply@marvin-strasser.de';
$fromName  = 'Portfolio';

$headers  = "From: {$fromName} <{$fromEmail}>\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$sent = mail($to, $subject, $body, $headers, "-f$from");

if (!$sent) {
  http_response_code(500);
  echo json_encode(['ok' => false, 'error' => 'mail() failed']);
  exit;
}

echo json_encode(['ok' => true]);