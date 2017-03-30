<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
<?php include('template/header.php'); ?>
<?php

if (isset($_GET['page'])){
    include($menuItems[$_GET['page']]['url']);
} else {
    include('pages/welcome.php');
}

?>
<?php include('template/footer.php'); ?>
</body>
</html>