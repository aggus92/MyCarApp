<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("10.254.94.2", "s174966", "PgsHqxfj", "s174966");

$id = $_GET["id"];
$is_default = $_GET["is_default"];
$model = $_GET["model"];
$year = $_GET["year"];
$color = $_GET["color"];

$result = $conn->query("UPDATE car SET is_default = '$is_default', model = '$model', year = '$year', color = '$color' WHERE id = '$id'");
$conn->close();

echo json_encode($result);