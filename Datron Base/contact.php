<?php

$from = '<fromCompanyDomain>';
$sendTo = '<yourMailHere>';
$subject = 'New message from contact form';
$fields = array('contactName' => 'Name', 'contactEmail' => 'Email',  'contactNumber' => 'Phone',  'message' => 'Message');
$okMessage = 'Contact form successfully submitted. Thank you, I will get back to you soon!.';
$errorMessage = 'There was an error while submitting the form. Please try again later';

// let's do the sending

try {

    $emailText= "New message recieved from contact form of Datron\n\n";

    foreach ($_POST as $key => $value) {

        if (isset($fields[$key])) {
            $emailText .= "$fields[$key]: $value\n";
        }

    }

    $headers = array('Content-Type: text/plain; charset="UTF-8";',
        'From: ' . $from,
        'Reply-To: ' . $from,
        'Return-Path: ' . $from,
    );

    mail($sendTo, $subject, $emailText, implode("\n", $headers));

    $responseArray = array('type' => 'success', 'message' => $okMessage);
}
catch (\Exception $e)
{
    $responseArray = array('type' => 'danger', 'message' => $errorMessage);
}

if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    $encoded = json_encode($responseArray);

    header('Content-Type: application/json');

    echo $encoded;
}
else {
    echo $responseArray['message'];
}

?>
