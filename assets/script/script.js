
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

function register() {
    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Пароли не совпадают');
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];

    const existingUser = users.find(user => user.username === username || user.email === email);
    if (existingUser) {
        alert('Пользователь с таким именем пользователя или почтой уже существует');
        return;
    }

    users.push({ username, email, password });

    localStorage.setItem('users', JSON.stringify(users));

    localStorage.setItem('loggedInUsername', username);

    closeModal();
    document.getElementById("loginRegisterButton").style.display = "none";
    document.getElementById("logoutButton").style.display = "inline";
    document.getElementById("logoutButton").textContent = "Выйти (" + username + ")";
    alert('Пользователь успешно зарегистрирован');
}

function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const authenticatedUser = users.find(user => user.username === username && user.password === password);
    if (authenticatedUser) {
        localStorage.setItem('loggedInUsername', username);

        closeModal();
        document.getElementById("loginRegisterButton").style.display = "none";
        document.getElementById("logoutButton").style.display = "inline";
        document.getElementById("logoutButton").textContent = "Выйти (" + username + ")";
        alert('Вход в систему успешен');
    } else {
        alert('Неверное имя пользователя или пароль');
    }
}

function logout() {
    localStorage.removeItem('loggedInUsername');
    document.getElementById("loginRegisterButton").style.display = "inline";
    document.getElementById("logoutButton").style.display = "none";
}

window.onload = function () {
    const loggedInUsername = localStorage.getItem('loggedInUsername');
    if (loggedInUsername) {
        document.getElementById("loginRegisterButton").style.display = "none";
        document.getElementById("logoutButton").style.display = "inline";
        document.getElementById("logoutButton").textContent = "Выйти (" + loggedInUsername + ")";
    }
}
