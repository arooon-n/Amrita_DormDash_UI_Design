document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('form');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const phoneInput = document.getElementById('phone');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        if (validateForm()) {
            const users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.find(user => user.name === name.value.trim())) {
                alert('Username already exists');
                return;
            }

            users.push({
                name: name.value.trim(),
                email: email.value.trim(),
                password: password.value.trim(),
                phone: phoneInput.value.trim()
            });
            localStorage.setItem('users', JSON.stringify(users));
            form.reset();
            window.location.href = '../html/login.html';
        }
    });

    function validateForm() {
        let valid = true;

        // Validate name
        if (name.value.trim() === "") {
            valid = false;
            setError(name, 'Name is required.');
        } else {
            setSuccess(name);
        }

        // Validate email
        if (!validateEmail(email.value)) {
            valid = false;
            setError(email, 'Valid college email ID is required.');
        } else {
            setSuccess(email);
        }

        // Validate password
        if (!validatePassword(password.value)) {
            valid = false;
            setError(password, 'Password must be at least 8 characters long.');
        } else {
            setSuccess(password);
        }

        // Validate phone number
        if (!validatePhone(phoneInput.value)) {
            valid = false;
            setError(phoneInput, 'Valid phone number is required.');
        } else {
            setSuccess(phoneInput);
        }

        return valid;
    }

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@cb\.students\.amrita\.edu$/;
        return re.test(email);
    }

    function validatePhone(phone) {
        return /^\d{10}$/.test(phone);
    }

    function validatePassword(password) {
        return password.length >= 8;
    }

    function setError(input, message) {
        const errorDiv = input.nextElementSibling;
        errorDiv.innerText = message;
    }

    function setSuccess(input) {
        const errorDiv = input.nextElementSibling;
        errorDiv.innerText = '';
        errorDiv.style.display = 'none';
    }
});
