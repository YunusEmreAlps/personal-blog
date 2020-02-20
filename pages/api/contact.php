<?php
header("Access-Control-Allow-Origin: *");
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// get refferer server
if($_SERVER['HTTP_REFERER'] === "http://yunusemrealpuu.herokuapp.com/contact"){
    // extract the data from $_POST
    $name = isset($_GET['name']) ? $_GET['name'] : null;
    $email = isset($_GET['sendto']) ? $_GET['sendto'] : null;
    $subject = isset($_GET['subject']) ? $_GET['subject'] : null;
    $message = isset($_GET['message']) ? $_GET['message'] : null;
	
    if($name && $message && $email && $subject){
    
        //Load composer's autoloader
        require 'vendor/autoload.php';

        $mail = new PHPMailer(true);
        try{
            // SMTP server configuration
            $mail->isSMTP();                                      // Send using SMTP
            $mail->Host       = 'smtp.gmail.com';                // Set the SMTP server to send through
            $mail->SMTPAuth   = true;                             // Enable SMTP authentication
            $mail->SMTPSecure = 'tls'; 
            $mail->Username   = 'yunus192alpu@gmail.com';           // SMTP username
            $mail->Password   = '';                        // SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
            $mail->Port       = 587;
            $mail->SetLanguage("tr", "phpmailer/language");
            $mail->CharSet  ="utf-8";

            // Recipients
            $mail->setFrom('yunus192alpu@gmail.com', 'Yunus Emre Alpu Personal Blog');
            $mail->addAddress($email);     // Add a recipient
            $mail->addReplyTo('yunus192alpu@gmail.com', 'Information');

            // Content
            $mail->isHTML(true);      // Set email format to HTML
            $mail->Subject = $subject;
            $mail->Body    = 'Name: ' . $name . '<br />Email: ' . $email . '<br /><br /><b>Message:</b> '
            . $message;

            if($mail->send()){
                echo "Message has been sent!";
            }
        }catch (Exception $e){
            echo "Message couldn't be sent. Error: ", $mail->ErrorInfo;
        }
    }else{
        echo "All the fileds are required!";
    }
}else{
    echo "You can't use this server!";
}
?>