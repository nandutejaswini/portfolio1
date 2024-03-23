
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
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

    // Here you would normally send the data to a server
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Provide submission feedback
    alert('Thank you for your message!');

    // Optionally reset the form or redirect the user
    // this.reset();
    // window.location.href = 'thank-you.html'; // Redirect to a thank-you page
});

