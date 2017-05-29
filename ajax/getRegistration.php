<?php
/**
 * Created by IntelliJ IDEA.
 * User: aggus
 * Date: 28.05.2017
 * Time: 12:51
 */
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("10.254.94.2", "s174966", "PgsHqxfj", "s174966");

$carId = $_GET["carId"];

$result = $conn->query("SELECT * FROM registration where car_id = '$carId'");

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"id":"'                    . $rs["id"]                     . '",';
    $outp .= '"car_id":"'                 . $rs["car_id"]                 . '",';
    $outp .= '"registration_date":"'      . $rs["registration_date"]      . '",';
    $outp .= '"registration_odometer":"'  . $rs["registration_odometer"]  . '",';
    $outp .= '"plate_no":"'               . $rs["plate_no"]               . '"}';
}
$outp ='{"records":['.$outp.']}';
$conn->close();

echo($outp);