<?php
/**
 * Created by IntelliJ IDEA.
 * User: Agnieszka Sobocińska
 * Date: 29.05.2017
 * Time: 19:12
 */
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$data = json_decode(file_get_contents("php://input"));
$conn = new mysqli("10.254.94.2", "s174966", "PgsHqxfj", "s174966");

$result = $conn->query("INSERT INTO registration(car_id, registration_date, registration_odometer, plate_no) VALUES('$data->car_id', '$data->registration_date', '$data->registration_odometer', '$data->plate_no')");
$conn->close();

echo json_encode($result);