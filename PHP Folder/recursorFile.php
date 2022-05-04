<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Fibonacci's Recursor</title>
    <style>
        body{
            font-family: "Times New Roman", serif;
        }
    </style>
</head>
<body>
<h1>Welcome to the Recursive Chamber</h1>
<p>The spiral is formed at your whim...</p>
<form action = "recursorFile.php" method= "get">
    <input type="number" placeholder="Number: 1-100" id = "fibNum" name = "fibNum" min="1" max="100">
    <label for="fibNum">Number: </label>
    <input type="submit" id = "sub" name="sub">
</form>
<br>

<?php
$ascendTo = $_GET["fibNum"]+1;
function spiralOut($ascendTo){
           if($ascendTo <= 1){
               return $ascendTo;
           }
           else {
               return spiralOut($ascendTo-1) + spiralOut($ascendTo-2);
           }
}
echo spiralOut($ascendTo);
?>
</body>
</html>