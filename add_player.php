<?php
session_start();

// Include database connection
require_once 'config.php';

// Initialize error message variable
$error_message = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Sanitize and validate input
    $player_names = $_POST['player_name'];
    $player_usernames = $_POST['player_username'];
    $coach_name = htmlspecialchars(trim($_POST['coach_name']));
    $coach_username = htmlspecialchars(trim($_POST['coach_username']));

    // Prepare SQL to prevent SQL injection
    $stmt = $conn->prepare("INSERT INTO players (player_name, player_username) VALUES (?, ?)");
    $stmt->bind_param("ss", $player_name, $player_username);

    foreach ($player_names as $index => $player_name) {
        $player_username = $player_usernames[$index];
        if (!$stmt->execute()) {
            $error_message = "Error: " . $stmt->error;
            break;
        }
    }

    if (empty($error_message)) {
        $stmt = $conn->prepare("INSERT INTO coaches (coach_name, coach_username) VALUES (?, ?)");
        $stmt->bind_param("ss", $coach_name, $coach_username);

        if ($stmt->execute()) {
            echo "Players and coach added successfully!";
        } else {
            $error_message = "Error: " . $stmt->error;
        }
    }

    $stmt->close();
    $conn->close();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Players and Coach</title>
    <!-- Site Icons -->
    <link rel="shortcut icon" href="" type="image/x-icon" />
    <link rel="apple-touch-icon" href="">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <!-- Site CSS -->
    <link rel="stylesheet" href="style.css">
    <!-- Colors CSS -->
    <link rel="stylesheet" href="css/colors.css">
    <!-- ALL VERSION CSS -->
    <link rel="stylesheet" href="css/versions.css">
    <!-- Responsive CSS -->
    <link rel="stylesheet" href="css/responsive.css">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="css/custom.css">
    <!-- font family -->
    <link href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">
    <!-- end font family -->
    <link rel="stylesheet" href="css/3dslider.css" />
    <script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
    <link href="http://www.jqueryscript.net/css/jquerysctipttop.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="css/add_players_coach.css">
    <script src="js/3dslider.js"></script>
</head>
<body class="game_info" data-spy="scroll" data-target=".header">
    <!-- LOADER -->
    <div id="preloader">
        <img class="preloader" src="images/loading-img.gif" alt="Loading...">
    </div>

    <nav class="navbar">
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="team.html">Team</a></li>
            <li><a href="news.html">News</a></li>
            <li><a href="match.html">Match</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
        <form class="search-bar" action="#">
            <input type="text" placeholder="Search" name="search">
            <button type="submit"><i class="search-icon">🔍</i></button>
        </form>
    </nav>

    <div class="container">
        <div class="form-section">
            <h1 style="font-family: 'Poppins', sans-serif;">Add Players and Coach</h1>
            <?php if (!empty($error_message)): ?>
                <div class="alert alert-danger">
                    <?php echo htmlspecialchars($error_message); ?>
                </div>
            <?php endif; ?>
            <form action="add_players_coach.php" method="POST">
                <h2>Players</h2>
                <table class="player-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php for ($i = 1; $i <= 15; $i++): ?>
                            <tr>
                                <td><input type="text" name="player_name[]" placeholder="Player Name" required></td>
                                <td><input type="text" name="player_username[]" placeholder="Player Username" required></td>
                            </tr>
                        <?php endfor; ?>
                    </tbody>
                </table>
                <h2>Coach</h2>
                <div class="form-group">
                    <label for="coach_name">Coach Name</label>
                    <input type="text" class="form-control" id="coach_name" name="coach_name" required>
                </div>
                <div class="form-group">
                    <label for="coach_username">Coach Username</label>
                    <input type="text" class="form-control" id="coach_username" name="coach_username" required>
                </div>
                <button type="submit" class="btn btn-primary">Add Players and Coach</button>
            </form>
        </div>
    </div>

    <script>
        // Preloader script
        window.addEventListener('load', function() {
            const preloader = document.getElementById('preloader');
            preloader.style.display = 'none';
        });
    </script>
</body>
</html>
