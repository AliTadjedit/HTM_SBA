$(document).ready(function() {
    // Function to handle form submission
    function submitForm() {
        // Get values from form fields
        var email = $('#email').val();
        var pin = $('#pin').val();

        // Example: Validate email and PIN
        if (email && pin) {
            // Perform your desired action here
            alert('Form submitted successfully!');
        } else {
            alert('Please fill out all fields');
        }
    }

    // Event listener for form submission
    $('#accountForm').submit(function(event) {
        event.preventDefault(); // Prevent the default form submission
        submitForm();
    });
});
