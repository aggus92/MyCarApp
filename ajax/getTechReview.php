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

$carId = $_GET["carId"];

$result = $conn->query("SELECT * FROM operating_costs WHERE car_id = '$carId' AND cost_type = 'techReview' ORDER BY date DESC LIMIT 1");

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"id":"'          . $rs["id"]           . '",';
    $outp .= '"car_id":"'       . $rs["car_id"]       . '",';
    $outp .= '"date":"'         . $rs["date"]         . '",';
    $outp .= '"odometer":"'     . $rs["odometer"]     . '",';
    $outp .= '"description":"'  . $rs["description"]  . '"}';
}
$outp ='{"records":['.$outp.']}';
$conn->close();

echo($outp);