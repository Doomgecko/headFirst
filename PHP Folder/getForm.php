<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>PHP Example Using "GET"</title>
    <style>
        body { margin:10%;}
    </style>
</head>
<body>
<h2>A simple form with method="get":</h2>

<form action="./getForm.php" method="get">
    <label for="name">Name: </label>
    <input type="text" name="name" id="name">
    <input type="submit">
</form>

<br /><br />

<?php
$name = htmlspecialchars($_GET["name"]);
if (!empty($name)) {
    echo '<h2>Hello ' . $name . '!</h2>';
}
?>

</body>
</html>


