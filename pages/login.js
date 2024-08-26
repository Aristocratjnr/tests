// Show/Hide Password Functionality
const togglePassword = document.querySelector('#togglePassword');
const passwordField = document.querySelector('#password');

togglePassword.addEventListener('click', function () {
    // Toggle the type attribute
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    
    // Toggle the icon
    this.classList.toggle('fa-eye-slash');
});

// Form Validation, Encryption, and Welcome Message
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    const username = document.getElementById('username').value.trim();
    let password = document.getElementById('password').value.trim();

    if (username === "" || password === "") {
        alert("Please fill in all fields.");
    } else {
        // Encrypt the password using SHA-256
        const hashedPassword = CryptoJS.SHA256(password).toString();

        // Compare the hashed password (For demonstration, we're using a hardcoded hash value)
        if (username === "admin" && hashedPassword === CryptoJS.SHA256("admin123").toString()) {
            alert(`Welcome back, ${username}!`);
            // Redirect to another page or dashboard after successful login
            window.location.href = "dashboard.html"; // Change to your desired URL
        } else {
            alert("Incorrect username or password. Please try again.");
        }
    }
});
