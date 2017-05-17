<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("10.254.94.2", "s174966", "PgsHqxfj", "s174966");

$username = $_GET["username"];
$password = $_GET["password"];

$result = $conn->query("SELECT id, firstName, lastName, username, password FROM user WHERE username = '$username' AND password = '$password'");

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"id":"'         . $rs["id"]        . '",';
    $outp .= '"firstName":"'   . $rs["firstName"] . '",';
    $outp .= '"lastName":"'    . $rs["lastName"]  . '",';
	$outp .= '"password":"'    . $rs["password"]  . '",';
    $outp .= '"username":"'    . $rs["username"]  . '"}';
}
$outp ='{"records":['.$outp.']}';
$conn->close();

echo($outp);