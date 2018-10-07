<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'sagar.bg1@gmail.com';

    $email_subject = "Query from Karunadu Runner";

    $email_body = "User Name: $name. \n".
    "User Email: $visitor_email. \n".
    "Query: $message. \n".

    $to = "sagar.gourimath@gmail.com";

    $headers = "From: email_from \r\n";

    mail($to, $email_subject, $email_body, $headers);

    header("Location: index.html");
?>