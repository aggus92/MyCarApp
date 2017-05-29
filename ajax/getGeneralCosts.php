<?php
/**
 * Created by IntelliJ IDEA.
 * User: Agnieszka Sobocińska
 * Date: 27.05.2017
 * Time: 12:55
 */
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("10.254.94.2", "s174966", "PgsHqxfj", "s174966");

$carId = $_GET["carId"];
$startDate = $_GET["startDate"];
$endDate = $_GET["endDate"];

$result = $conn->query("SELECT * FROM costs where car_id = '$carId' and date BETWEEN '$startDate' AND '$endDate'");

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"id":"'         . $rs["id"]          . '",';
    $outp .= '"car_id":"'      . $rs["car_id"]      . '",';
    $outp .= '"date":"'        . $rs["date"]        . '",';
    $outp .= '"type":"'        . $rs["type"]        . '",';
    $outp .= '"total_cost":"'  . $rs["total_cost"]  . '"}';
}
$outp ='{"records":['.$outp.']}';
$conn->close();

echo($outp);