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

$query = sprintf("SELECT SUM(CASE WHEN gender = 'male' THEN 1 ELSE 0 END)AS MALES,SUM(CASE WHEN gender = 'female'THEN 1 ELSE 0 END)AS FEMALES,COUNT(*)AS TOTAL FROM employee");

$result = $mysqli->query($query);

$data = array();
foreach ($result as $row) {
	$data[] = $row;
}

//$result->close();

$mysqli->close();

print json_encode($data);

?>