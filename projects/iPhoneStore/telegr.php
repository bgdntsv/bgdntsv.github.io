<?php

/* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXX/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['message'];
$token = "1622252370:AAHc07UIOidinqVTOLdbXu8gV9xrpKmVKKM";
$chat_id = "-530752287";
$arr = array(
    'Имя пользователя: ' => $name,
    'Телефон: ' => $phone,
    'Сообщение' => $email
);

foreach ($arr as $key => $value) {
    $txt .= "<b>" . $key . "</b> " . $value . "%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");

if ($sendToTelegram) {
    header('Location: index.html');
} else {
    echo "Error";
}

