<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
Hello there ! <br>
Please insert your name below :
<form action="process.php" method="post">
	<table border="1">
		<tr>
			<td>Name</td>
			<td align="center"><input type="text" name="username" size="30"></td>
		</tr>
		<tr>
			<td>Address</td>
			<td align="center"><input type="text" name="streetaddress" size="30"></td>
		</tr>
		<tr>
			<td>City</td>
			<td align="center"><input type="text" name="cityaddress" size="30"></td>
		</tr>
		<tr>
			<td colspan="2" align="center"> <input type="submit" value="Submit"></td>
		</tr>
	</table>
</form>


</body>
</html>