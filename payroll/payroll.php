<?php

header('Content-Type: application/json');

define('DB_HOST', '127.0.0.1');
define('DB_USERNAME', 'admin');
define('DB_PASSWORD', 'dhrutigandhi31');
define('DB_NAME', 'test1');

$mysqli = new mysqli(DB_HOST,DB_USERNAME,DB_PASSWORD,DB_NAME);

if(!$mysqli){
	die("Connection failed: ".$mysqli->error);
}

$query = sprintf("SELECT `employee_id`, `salary` FROM `payroll`");

$result = $mysqli->query($query);

$data = array();
foreach ($result as $row) {
	$data[] = $row;
}
//$result->close();

$mysqli->close();

print json_encode($data);

?>