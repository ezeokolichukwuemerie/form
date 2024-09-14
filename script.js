document.getElementById('myForm').addEventListener('submit', function(event) {event.preventDefault();
    let errors = [];
    
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if(username.length < 3) {
        errors.push('username must be at least 3 characters long.');
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email)) {
        errors.push('Please enter a valid email address.');
    }

    if(password.length < 6) {
        errors.push('Password must be at least 6 characters long.');
    }

    if (errors.length > 0) {
        document.getElementById('error').innerHTML = errors.join('<br>');
    } else {
        document.getElementById('error').innerHTML = 'Form submitted successfully'
        // you can now submit your data to the server
    }
});