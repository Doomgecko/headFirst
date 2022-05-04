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
<form action = "recursorFile.php">
    <input type="number" placeholder="Number: 1-100" id = "fibNum" name = "fibNum" min="1" max="100">
    <label for="fibNum">Number: </label>
    <input type="submit" id = "sub" name="sub">
</form>
<br>

<?php
$ascendTo = $_GET["fibNum"];
$keepGoing = 1;
function spiralOut($keepGoing){
    global $keepGoing, $ascendTo;
           if($ascendTo <= 2){
               return $ascendTo -1;
           }else if($keepGoing > $ascendTo){
            $ascendTo++;
            return $keepGoing + spiralOut($keepGoing -1);
    }

}
spiralOut($keepGoing);
?>
</body>
</html>