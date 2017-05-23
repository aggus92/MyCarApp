<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$data = json_decode(file_get_contents("php://input"));
$conn = new mysqli("10.254.94.2", "s174966", "PgsHqxfj", "s174966");

$result = $conn->query("INSERT INTO car(user_id, is_default, model, year, color) VALUES('$data->user_id', '$data->is_default', '$data->model', '$data->year', '$data->color')");
$conn->close();

echo json_encode($result);


