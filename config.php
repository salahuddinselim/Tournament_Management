<?php
// Database configuration
$host = 'localhost';     // Database host
$username = 'root';      // Database username
$password = '';          // Database password
$database = 'tourny_mate'; // Database name

// Create connection
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Optional: Set character set
$conn->set_charset("utf8");
?>
