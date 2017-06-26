<?php
/**
 * Created by IntelliJ IDEA.
 * User: aggus
 * Date: 26.06.2017
 * Time: 20:32
 */
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("10.254.94.2", "s174966", "PgsHqxfj", "s174966");

$id = $_GET["carId"];

$result = $conn->query("DELETE FROM car WHERE id = '$id'");
$conn->close();

echo json_encode($result);