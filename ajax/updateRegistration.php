<?php
/**
 * Created by IntelliJ IDEA.
 * User: aggus
 * Date: 29.05.2017
 * Time: 16:51
 */
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("10.254.94.2", "s174966", "PgsHqxfj", "s174966");

$carId = $_GET["carId"];
$date = $_GET["registration_date"];
$odometer = $_GET["registration_odometer"];
$plate_no = $_GET["plate_no"];

$result = $conn->query("UPDATE registration SET registration_date = '$date', registration_odometer = '$odometer', plate_no = '$plate_no' WHERE car_id = '$carId'");
$conn->close();

echo json_encode($result);