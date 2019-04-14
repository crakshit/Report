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

$query = sprintf("SELECT employee.department,ROUND(SUM((time_out-time_in)/10000)) AS working_hours FROM `hours_worked`INNER JOIN `employee` ON employee.employee_id = hours_worked.emp_id GROUP BY employee.department");

$result = $mysqli->query($query);

$data = array();
foreach ($result as $row) {
	$data[] = $row;
}

//$result->close();

$mysqli->close();

print json_encode($data);

?>