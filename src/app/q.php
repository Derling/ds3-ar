<?php
$servername = "107.180.56.179";
$username = "appdata";
$password = "appdata";
$dbname = "ds3_project";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT * FROM WeaponData";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo json_encode($row) . "<br>";
    }
} else {
    echo "0 results";
}

$conn->close();
?> 