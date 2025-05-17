<?php
if($_POST)
{
    $to_email       = "conradjamir@gmail.com"; //Recipient email, Replace with own email here
	$from_email 	= "<me@conradjamir.com>"; //From email address (eg: no-reply@YOUR-DOMAIN.com)(hello@gg.com)
	
    //check if its an ajax request, exit if not
    if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
        $output = json_encode(array( //create JSON data
            'type'=>'error',
            'text' => 'Sorry Request must be Ajax POST'
        ));
        die($output); //exit script outputting json data
    }
   
    //Sanitize input data using PHP filter_var().
    $subject   = filter_var($_POST["subject"], FILTER_SANITIZE_STRING); //Enter email subject
    $instagram    = filter_var($_POST["instagram"], FILTER_SANITIZE_STRING);
   
    //additional php validation       
    if(empty($instagram) or !preg_match('/(@)([a-zA-Z0-9_-]{3,})$/', $instagram)){
        $output = json_encode(array('type'=>'error', 'text' => 'Instagram handle is too short or invalid! ex: @username'));
        die($output);
    }
    
    //email body
    $message_body = "Instagram: ".$instagram;
    
    //proceed with PHP email.
    $headers = "From: Boneslovemilk ".$from_email."\r\n".
    'Reply-To: '.$from_email.'' . "\n" .
    'Content-Type:text/html;charset=utf-8' . "\n" .
    'X-Mailer: PHP/' . phpversion();
    $body = $message_body;
    
	$send_mail = mail($to_email, $subject, $body, $headers);
   
    if(!$send_mail)
    {
        //If mail couldn't be sent output error. Check your PHP email configuration (if it ever happens)
        $output = json_encode(array('type'=>'error', 'text' => 'Could not send mail! Please check your PHP mail configuration.'));
        die($output);
    }else{
        $output = json_encode(array('type'=>'message', 'text' => 'Thanks for submitting a reminder '.$instagram.'!'));
        die($output);
    }
}
?>
