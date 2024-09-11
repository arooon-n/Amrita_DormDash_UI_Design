document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const formError = document.getElementById('formError');

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.name === name && user.email === email && user.password === password);

    if (!user) {
        formError.innerHTML = 'Invalid Name/Email/Password';
        return;
    } else {
        formError.innerHTML = '';
    }

    localStorage.setItem('currentUser', JSON.stringify(user));
    window.location.href = '../html/home.html';
});
