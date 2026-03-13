<?php
    require_once('variables.php');
    require_once('./src/PHPMailer.php');
    require_once('./src/SMTP.php');
    require_once('./src/Exception.php');
    require('validar.php');
    
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;


if($_SERVER['REQUEST_METHOD'] != 'POST') {
    header("Location: index.html#fale-conosco");
}
validarCampos($_POST);

$assuntosJson = file_get_contents('./js/info.json');
$assuntos = json_decode($assuntosJson)->assuntos;

$mail = new PHPMailer(false);

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
    $mail->setFrom($_POST['email'], mb_convert_encoding($_POST["nome"], 'UTF-8'));

    // Destinatário
    $mail->addAddress('corallus.contato@gmail.com', 'Corallus');

    // Conteúdo
    $mail->isHTML(true);
    $mail->Subject = mb_convert_encoding($assuntos[$_POST['assunto']]->nome, 'UTF-8');
    $mail->Body    = "<div style='border-radius: 7px; padding: 3px;'>".
    "<h1>Fale Conosco</h1>".
    "<p><strong>Remetente:</strong>".mb_convert_encoding($_POST['email'], 'UTF-8')."</p>".
    "<p><strong>Assunto:</strong>".mb_convert_encoding($assuntos[$_POST['assunto']]->nome, 'UTF-8')."</p>".
    "<p>Mensagem:".mb_convert_encoding($_POST['msg'], 'UTF-8')."</p>".
    "</div>";
    $mail->AltBody = mb_convert_encoding($_POST['msg'], 'UTF-8');

    if($mail->send()) {
        header("Location: index.html?sucess=true#fale-conosco");
    } else {
        header("Location: index.html?erro=true#fale-conosco");
    }

    } catch (Exception $e) {
        echo "Erro ao enviar: {$e->getMessage()}";
    }