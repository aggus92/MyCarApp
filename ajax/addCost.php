<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$data = json_decode(file_get_contents("php://input"));
$conn = new mysqli("10.254.94.2", "s174966", "PgsHqxfj", "s174966");

$result = $conn->query("INSERT INTO operating_costs(car_id, cost_type, date, odometer, description, total_cost) VALUES('$data->car_id', '$data->type', '$data->date', '$data->odometer', '$data->description', '$data->total_cost')");
$conn->close();

echo json_encode($result);