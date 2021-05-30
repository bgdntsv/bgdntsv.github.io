<?php

/* https://api.telegram.org/bot1795992065:AAEGXy58myKFHO2kakvOeNbTKJCTdvBarxQ/getUpdates */

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$token = "1795992065:AAEGXy58myKFHO2kakvOeNbTKJCTdvBarxQ";
$chat_id = "-522905679";
$arr = array(
  'Имя заказчика: ' => $name,
  'Телефон: ' => $phone,
  'Email: ' => $email
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
if($sendToTelegram){
    header('Location: thanks.html');
}else{
    echo 'Error! Try again';
}
?>