// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.getElementById('mobile-menu').addEventListener('click', function() {
    var navList = document.querySelector('.nav-list');
    if (navList.style.display === "f
    lex") {
        navList.style.display = "none";
    } else {
        navList.style.display = "flex";
    }
});


// Basic form validation and submission feedback
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Basic validation
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all the fields.');
        return; // Exit if any field is empty
    }

    if (!email.includes('@')) {
        alert('Please enter a valid email address.');
        return; // Exit if the email is invalid
    }

    // AJAX request to send form data to the server
    const formData = new FormData(this); // Create a FormData object from the form
    const url = 'send.php'; // Replace 'send.php' with the URL of your server-side script
    const xhr = new XMLHttpRequest(); // Create a new XMLHttpRequest object

    xhr.open('POST', url, true); // Configure the request (method, URL, asynchronous)
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Set the content type header

    xhr.onload = function() {
        if (xhr.status === 200) {
            // Request was successful
            console.log(xhr.responseText); // Log the response from the server
            alert('Thank you for your message!'); // Provide feedback to the user
            // Optionally reset the form or redirect the user
            // document.querySelector('form').reset();
            // window.location.href = 'thank-you.html';
        } else {
            // Request failed
            console.error('Request failed. Status: ' + xhr.status);
            alert('An error occurred while submitting the form. Please try again later.');
        }
    };

    xhr.onerror = function() {
        // Request errored
        console.error('Request errored');
        alert('An error occurred while submitting the form. Please try again later.');
    };

    xhr.send(new URLSearchParams(formData)); // Send the form data to the server
});
