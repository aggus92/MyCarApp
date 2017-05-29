<?php
/**
 * Created by IntelliJ IDEA.
 * User: Agnieszka Sobocińska
 * Date: 28.05.2017
 * Time: 12:51
 */
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("10.254.94.2", "s174966", "PgsHqxfj", "s174966");

$userId = $_GET["carId"];

$result = $conn->query("");

$conn->close();

echo($outp);