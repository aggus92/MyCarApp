<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("10.254.94.2", "s174966", "PgsHqxfj", "s174966");

$userId = $_GET["userId"];

$result = $conn->query("SELECT id, user_id, is_default, model, color, year FROM car where user_id = '$userId'");

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"id":"'         . $rs["id"]         . '",';
    $outp .= '"user_id":"'     . $rs["user_id"]    . '",';
    $outp .= '"is_default":"'  . $rs["is_default"] . '",';
	$outp .= '"model":"'       . $rs["model"]      . '",';
	$outp .= '"color":"'       . $rs["color"]      . '",';
    $outp .= '"year":"'        . $rs["year"]       . '"}';
}
$outp ='{"records":['.$outp.']}';
$conn->close();

echo($outp);