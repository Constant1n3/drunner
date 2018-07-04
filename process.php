<!DOCTYPE html>
<html>
<head>

	<title></title>
</head>
<body>

<?php
$usersName = $_POST['username'];
$streetAddress = $_POST['streetaddress'];
$cityAddress = $_POST['streetaddress'];

echo $usersname . "</br>";
echo $streetAddress . "</br>";
echo $cityAddress . "</br>";

$str = <<<EOD 
The customers name is 
$usersname and they 
live at $streetAddress
in $cityAddress</br></br>
EOD;
echo $str;
$job = array('good','great','terrible');
echo "You've done a ".$job[1]."coming here !"; 
?>
</body>
</html>