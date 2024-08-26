// Show/Hide Password Functionality
const togglePassword = document.querySelector('#togglePassword');
const toggleConfirmPassword = document.querySelector('#toggleConfirmPassword');
const passwordField = document.querySelector('#password');
const confirmPasswordField = document.querySelector('#confirmPassword');

togglePassword.addEventListener('click', function () {
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});

toggleConfirmPassword.addEventListener('click', function () {
    const type = confirmPasswordField.getAttribute('type') === 'password' ? 'text' : 'password';
    confirmPasswordField.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});

// Form Validation and Encryption
const signupForm = document.getElementById('signupForm');
signupForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    if (username === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Please fill in all fields.");
    } else if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
    } else if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
    } else {
        // Encrypt the password using SHA-256
        const hashedPassword = CryptoJS.SHA256(password).toString();

        // Simulate storing the hashed password (In real use, send to server)
        console.log("Storing hashed password:", hashedPassword);

        alert("Account created successfully!");
        // Redirect to login page or another page
        window.location.href = "login.html"; // Change to your desired URL
    }
});

// Email Validation Function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
