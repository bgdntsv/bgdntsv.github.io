<?php

/* https://api.telegram.org/bot1861822735:AAFai6XWTxIY92EhMapLfHyu9Sy7GHojsB0/getUpdates */

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['message'];
$token = "1861822735:AAFai6XWTxIY92EhMapLfHyu9Sy7GHojsB0";
$chat_id = "696526705";
$arr = array(
  'Имя заказчика: ' => $name,
  'Телефон: ' => $phone,
  'Email' => $email
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
?>