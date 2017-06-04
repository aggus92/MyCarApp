<?php
/**
 * Created by IntelliJ IDEA.
 * User: aggus
 * Date: 04.06.2017
 * Time: 09:34
 */
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$data = json_decode(file_get_contents("php://input"));
$conn = new mysqli("10.254.94.2", "s174966", "PgsHqxfj", "s174966");

$result = $conn->query("INSERT INTO petrol(car_id, date, total_cost, quantity, odometer, fuel_type) VALUES('$data->car_id', '$data->date', '$data->total_cost', '$data->quantity', '$data->odometer', '$data->fuelType')");
$conn->close();

echo json_encode($result);