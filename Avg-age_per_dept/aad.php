<?php

header('Content-Type: application/json');

define('DB_HOST', '127.0.0.1');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'test1');

$mysqli = new mysqli(DB_HOST,DB_USERNAME,DB_PASSWORD,DB_NAME);

if(!$mysqli){
	die("Connection failed: ".$mysqli->error);
}

$query = sprintf("SELECT department, AVG(YEAR(CURDATE()) - YEAR(dob)) AS age FROM employee GROUP BY department");

$result = $mysqli->query($query);

$data = array();
foreach ($result as $row) {
	$data[] = $row;
}

//$result->close();

$mysqli->close();

print json_encode($data);

?>