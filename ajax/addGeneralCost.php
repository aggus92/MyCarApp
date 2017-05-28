<?php
/**
 * Created by IntelliJ IDEA.
 * User: aggus
 * Date: 28.05.2017
 * Time: 18:22
 */
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$data = json_decode(file_get_contents("php://input"));
$conn = new mysqli("10.254.94.2", "s174966", "PgsHqxfj", "s174966");

$result = $conn->query("INSERT INTO costs(car_id, date, type, total_cost) VALUES('$data->car_id', '$data->date', '$data->type', '$data->total_cost')");
$conn->close();

echo json_encode($result);