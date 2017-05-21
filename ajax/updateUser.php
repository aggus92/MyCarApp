<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("10.254.94.2", "s174966", "PgsHqxfj", "s174966");

$id = $_GET["idUser"];
$firstName = $_GET["firstName"];
$lastName = $_GET["lastName"];

$result = $conn->query("UPDATE user set firstName = '$firstName', lastName = '$lastName' WHERE id = $id");
$conn->close();

echo json_encode($result);