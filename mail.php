<?php
    require('validar.php');
    require_once('variables.php');
    require_once('./src/PHPMailer.php');
    require_once('./src/SMTP.php');
    require_once('./src/Exception.php');
    
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if($_SERVER['REQUEST_METHOD'] != 'POST') {
    header("Location: index.html");
}
validarCampos($_POST);

/*
$mail = new PHPMailer(true);


try {
    // Configurações do servidor
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'corallus.contato@gmail.com'; // seu email
    $mail->Password   = $conn["passApp"]; // senha ou app password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    // Remetente
    $mail->setFrom('corallus.contato@gmail.com', 'Seu Nome');

    // Destinatário
    $mail->addAddress('corallus.contato@gmail.com', 'Nome Destinatário');

    // Conteúdo
    $mail->isHTML(true);
    $mail->Subject = 'Teste de envio';
    $mail->Body    = '<h1>Email enviado com sucesso!</h1>';
    $mail->AltBody = 'Email enviado com sucesso!';

    $mail->send();
    echo 'Email enviado com sucesso!';
} catch (Exception $e) {
    echo "Erro ao enviar: {$mail->ErrorInfo}";
}
*/