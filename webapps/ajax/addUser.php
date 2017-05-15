<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$data = json_decode(file_get_contents("php://input"));
$conn = new mysqli("localhost", "root", "root", "mycarapp");

$result = $conn->query("INSERT INTO user(firstName, lastName, username, password) VALUES('$data->firstName','$data->lastName','$data->username','$data->password')");
$conn->close();

echo json_encode($result);
