<?php
/**
 * Created by IntelliJ IDEA.
 * User: Agnieszka Sobocińska
 * Date: 29.05.2017
 * Time: 20:54
 */
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("10.254.94.2", "s174966", "PgsHqxfj", "s174966");

$car_id = $_GET["carId"];
$registration_date = $_GET["registration_date"];
$registration_odometer = $_GET["registration_odometer"];
$plate_no = $_GET["plate_no"];

$result = $conn->query("UPDATE registration SET registration_date = '$registration_date', registration_odometer = '$registration_odometer', plate_no = '$plate_no' WHERE car_id = '$car_id'");
$conn->close();

echo json_encode($result);