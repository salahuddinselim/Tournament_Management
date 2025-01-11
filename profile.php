<?php
session_start();
require_once 'config.php';

// Check if user is logged in
if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit();
}

// Fetch user details
$user_id = $_SESSION['user_id'];
$stmt = $conn->prepare("SELECT * FROM users WHERE id = ?");
$stmt->bind_param("i", $user_id);
$stmt->execute();
$result = $stmt->get_result();
$user = $result->fetch_assoc();

function editProfile($userId, $data) {
    global $conn;
    $stmt = $conn->prepare("UPDATE users SET fullname = ?, email = ?, phone = ? WHERE id = ?");
    $stmt->bind_param("sssi", $data['fullname'], $data['email'], $data['phone'], $userId);
    
    if ($stmt->execute()) {
        $_SESSION['success_message'] = "Profile updated successfully!";
        return true;
    } else {
        $_SESSION['error_message'] = "Failed to update profile.";
        return false;
    }
}

function editTournament($tournamentId, $data) {
    global $conn;
    $stmt = $conn->prepare("UPDATE tournaments SET name = ?, sport = ?, date = ?, location = ? WHERE id = ? AND organiser_id = ?");
    $stmt->bind_param("ssssii", 
        $data['name'], 
        $data['sport'], 
        $data['date'], 
        $data['location'], 
        $tournamentId, 
        $_SESSION['user_id']
    );
    
    if ($stmt->execute()) {
        $_SESSION['success_message'] = "Tournament updated successfully!";
        return true;
    } else {
        $_SESSION['error_message'] = "Failed to update tournament.";
        return false;
    }
}

function addPlayer($data) {
    global $conn;
    // Check if user has permission to add players (manager role)
    if ($_SESSION['user_role'] !== 'manager') {
        $_SESSION['error_message'] = "You do not have permission to add players.";
        return false;
    }

    $stmt = $conn->prepare("INSERT INTO players (name, email, team_id, contact_number) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", 
        $data['name'], 
        $data['email'], 
        $data['team_id'], 
        $data['contact_number']
    );
    
    if ($stmt->execute()) {
        $_SESSION['success_message'] = "Player added successfully!";
        return true;
    } else {
        $_SESSION['error_message'] = "Failed to add player.";
        return false;
    }
}

function createTournament($data) {
    global $conn;
    // Check if user has permission to create tournaments
    if ($_SESSION['user_role'] !== 'organiser') {
        $_SESSION['error_message'] = "You do not have permission to create tournaments.";
        return false;
    }

    $stmt = $conn->prepare("INSERT INTO tournaments (name, sport, date, location, organiser_id) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssi", 
        $data['name'], 
        $data['sport'], 
        $data['date'], 
        $data['location'], 
        $_SESSION['user_id']
    );
    
    if ($stmt->execute()) {
        $_SESSION['success_message'] = "Tournament created successfully!";
        return true;
    } else {
        $_SESSION['error_message'] = "Failed to create tournament.";
        return false;
    }
}

function showNotifications() {
    global $conn;
    $userId = $_SESSION['user_id'];
    
    $stmt = $conn->prepare("SELECT * FROM notifications WHERE user_id = ? ORDER BY created_at DESC LIMIT 10");
    $stmt->bind_param("i", $userId);
    $stmt->execute();
    $result = $stmt->get_result();
    
    $notifications = [];
    while ($row = $result->fetch_assoc()) {
        $notifications[] = $row;
    }
    
    return $notifications;
}

// Handle form submissions
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['action'])) {
        switch ($_POST['action']) {
            case 'edit_profile':
                editProfile($user_id, $_POST);
                break;
            case 'edit_tournament':
                editTournament($_POST['tournament_id'], $_POST);
                break;
            case 'add_player':
                addPlayer($_POST);
                break;
            case 'create_tournament':
                createTournament($_POST);
                break;
        }
        header("Location: profile.php");
        exit();
    }
}
