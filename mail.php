<?php
    require('validar.php');
    require_once('variables.php');
    require_once('./src/PHPMailer.php');
    require_once('./src/SMTP.php');
    require_once('./src/Exception.php');
    
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;


if($_SERVER['REQUEST_METHOD'] != 'POST') {
    header("Location: index.html");
}
validarCampos($_POST);

$assuntosJson = file_get_contents('./js/info.json');
$assuntos = json_decode($assuntosJson)->assuntos;

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
    $mail->setFrom($_POST["email"], $_POST["nome"]);

    // Destinatário
    $mail->addAddress('corallus.contato@gmail.com', 'Corallus');

    // Conteúdo
    $mail->isHTML(true);
    $mail->Subject = $assuntos[$_POST['assunto']];
    $mail->Body    = 'Ola mundo';
    $mail->AltBody = 'Email enviado com sucesso!';

    $mail->send();
    echo 'Email enviado com sucesso!';
    } catch (Exception $e) {
    echo 'Erro ao enviar: {$mail->ErrorInfo}';
    }