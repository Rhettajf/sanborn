<?php

$page = $_GET['p'];

require('header.php');
require ($page.".php");
require('footer.php');

?>
