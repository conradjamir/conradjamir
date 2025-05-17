<?php
if($_POST)
{
    $to_email       = "cjamir@grupogallegos.com"; //Recipient email, Replace with own email here
	$from_email 	= "<hello@boneslovemilk.com>"; //From email address (eg: no-reply@YOUR-DOMAIN.com)(cjamir@grupogallegos.com)
	
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
    $name      = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
    $address       = filter_var($_POST["address"], FILTER_SANITIZE_STRING);
    $phone_number      = filter_var($_POST["phone"], FILTER_SANITIZE_NUMBER_INT);
    $instagram    = filter_var($_POST["instagram"], FILTER_SANITIZE_STRING);
    $age    = filter_var($_POST["age"]);
   
    //additional php validation
    if(strlen($name)<3){ // If length is less than 4 it will output JSON error.
        $output = json_encode(array('type'=>'error', 'text' => 'Name is too short or empty!'));
        die($output);
    }
    
    if (!preg_match('/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/', $phone_number)){ //check for valid numbers in phone number field
        $output = json_encode(array('type'=>'error', 'text' => 'Phone number must be 10 digits! ex:000-111-2222'));
        die($output);
    }
           
	if(empty($instagram) or !preg_match('/(@)([a-zA-Z0-9_-]{3,})$/', $instagram)){
        $output = json_encode(array('type'=>'error', 'text' => 'Instagram handle is too short or invalid! ex: @username'));
        die($output);
    }
        
    if(empty($age)) {
        $output = json_encode(array('type'=>'error', 'text' => 'You must be over 13 years old to place an order!'));
        die($output);
    }
    
    //email body
    $message_body = "Name: ".$name
                    ."<br><br>Address : ".$address
                    ."<br><br>Phone Number : ".$phone_number
                    ."<br><br>Instagram : ".$instagram
                    ."<br><br>Age Verified : ".$age;
    
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
        $output = json_encode(array('type'=>'message', 'text' => 'Thanks for submitting your order '.$name.'!'));
        die($output);
    }
}
?>
