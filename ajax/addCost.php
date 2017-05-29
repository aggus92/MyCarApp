<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$data = json_decode(file_get_contents("php://input"));
$conn = new mysqli("10.254.94.2", "s174966", "PgsHqxfj", "s174966");

$result = $conn->query("INSERT INTO operating_costs(car_id, cost_type, date, odometer, description) VALUES('$data->car_id', '$data->registration_date', '$data->date', '$data->odometer', '$data->description')");
$conn->close();

echo json_encode($result);