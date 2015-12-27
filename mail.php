<?php

$recepient = "sverdlov.andrew@gmail.com";
$pagetitle = "Email from portfolio!";

$from = trim($_POST["e-mail"]);
$name = trim($_POST["name"]);
$text = trim($_POST["message"]);
$message = "From: $name \nПочта: $from \n\n$text";

mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");