<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = trim($_POST["name"]);
    $email = trim($_POST["email"]);
    $subject = trim($_POST["subject"]);
    $message = trim($_POST["message"]);

    // Check if fields are empty
    if(empty($name) || empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL) || empty($message)) {
        // Handle error - redirect to an error page, or display an error message
        echo "Please fill in all fields correctly.";
    } else {
        // Prepare the email
        $to = "krishnaanna.939@gmail.com";
        $body = "";
        $body .= "Name: " . $name . "\n";
        $body .= "Email: " . $email . "\n";
        $body .= "Message: " . $message . "\n";

        // Send the email
        mail($to, $subject, $body);
        
        // Redirect to a thank-you page
        header("Location: thank-you.html");
    }
}
?>
