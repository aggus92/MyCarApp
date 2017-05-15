<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$data = json_decode(file_get_contents("php://input"));
$conn = new mysqli("10.254.94.2", "s174966", "PgsHqxfj", "s174966");

$result = $conn->query("SELECT id, firstName, lastName, username FROM user WHERE username='$data->username' and password='$data->password'");

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"id":"'         . $rs["id"]        . '",';
    $outp .= '"firstName":"'   . $rs["firstName"] . '",';
    $outp .= '"lastName":"'    . $rs["lastName"]  . '"}';
    $outp .= '"username":"'    . $rs["username"]  . '"}';
}
$outp ='{"records":['.$outp.']}';
$conn->close();

echo($outp);