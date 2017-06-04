<?php
/**
 * Created by IntelliJ IDEA.
 * User: aggus
 * Date: 04.06.2017
 * Time: 09:54
 */
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("10.254.94.2", "s174966", "PgsHqxfj", "s174966");

$carId = $_GET["carId"];
$startDate = $_GET["startDate"];
$endDate = $_GET["endDate"];

$result = $conn->query("SELECT * FROM petrol WHERE car_id = '$carId' AND date BETWEEN '$startDate' AND '$endDate' ORDER BY date DESC");

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"id":"'         . $rs["id"]          . '",';
    $outp .= '"car_id":"'      . $rs["car_id"]      . '",';
    $outp .= '"date":"'        . $rs["date"]        . '",';
    $outp .= '"total_cost":"'  . $rs["total_cost"]  . '",';
    $outp .= '"quantity":"'    . $rs["quantity"]    . '",';
    $outp .= '"odometer":"'    . $rs["odometer"]    . '",';
    $outp .= '"fuel_type":"'   . $rs["fuel_type"]   . '"}';
}
$outp ='{"records":['.$outp.']}';
$conn->close();

echo($outp);