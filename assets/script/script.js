fetch('/getCartItems')
    .then(response => response.json())
    .then(cartItems => {
        const cartItemsDiv = document.getElementById('cart-items');
        const totalPriceDiv = document.getElementById('total-price');
        const totalItemsDiv = document.getElementById('total-items');
        let totalPrice = 0;
        let totalItems = 0;

        cartItems.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('cat__product');
            const image = document.createElement('img');
            image.src = item.image;

            image.onerror = function() {
                console.error('Ошибка загрузки изображения для товара:', item.name);
            };

            const productInfo = document.createElement('div');
            const productInfo2 = document.createElement('div');
            productInfo.classList.add('cat-info');
            productInfo2.classList.add('cat-info2');
            productInfo.innerHTML = `<h3>${item.name}</h3>`;
            const productPrice = document.createElement('div');
            productPrice.classList.add('product-price');
            productPrice.textContent = item.price;
            
            const contentKod = document.createElement('div');
            contentKod.classList.add('contentKod');
            contentKod.textContent = 'Код товара: 34078988-0047';

            const deleteButton = document.createElement('button');
            deleteButton.classList.add('delete__btn');
            deleteButton.textContent = 'Удалить товар';
            deleteButton.addEventListener('click', function() {
                fetch(`/deleteItem/${encodeURIComponent(item.name)}`, {
                    method: 'DELETE'
                })
                .then(response => {
                    if (response.ok) {
                        itemDiv.remove();
                        totalPrice -= parseFloat(item.price);
                        totalItems--;
                        totalPriceDiv.textContent = `Товаров на сумму: ${totalPrice.toFixed(2)} ₽`;
                        totalItemsDiv.textContent = `Количество товара: ${totalItems}`;
                    } else {
                        console.error('Ошибка удаления товара');
                    }
                })
                .catch(error => {
                    console.error('Ошибка удаления товара:', error);
                });
            });

            const counterDiv = document.createElement('div');
            counterDiv.classList.add('counter');
            const plusButton = document.createElement('button');
            plusButton.textContent = '+';
            const minusButton = document.createElement('button');
            minusButton.textContent = '-';
            const quantitySpan = document.createElement('span');
            quantitySpan.textContent = '1'; 

            plusButton.addEventListener('click', function() {
                let quantity = parseInt(quantitySpan.textContent);
                quantity++;
                quantitySpan.textContent = quantity;
                totalPrice += parseFloat(item.price);
                totalPriceDiv.textContent = `Товаров на сумму: ${totalPrice.toFixed(2)} ₽`;
            });

            minusButton.addEventListener('click', function() {
                let quantity = parseInt(quantitySpan.textContent);
                if (quantity > 1) {
                    quantity--;
                    quantitySpan.textContent = quantity;
                    totalPrice -= parseFloat(item.price);
                    totalPriceDiv.textContent = `Товаров на сумму: ${totalPrice.toFixed(2)} ₽`;
                }
            });

            
            counterDiv.appendChild(minusButton);
            counterDiv.appendChild(quantitySpan);
            counterDiv.appendChild(plusButton);

            productInfo.appendChild(productPrice);
            productInfo2.appendChild(contentKod);
            productInfo2.appendChild(deleteButton);
            productInfo.appendChild(counterDiv);

            itemDiv.appendChild(image);
            itemDiv.appendChild(productInfo);
            itemDiv.appendChild(productInfo2);
            cartItemsDiv.appendChild(itemDiv);

            totalPrice += parseFloat(item.price);
            totalItems++;
        });

        totalPriceDiv.textContent = `Товаров на сумму: ${totalPrice.toFixed(2)} ₽`;
        totalItemsDiv.textContent = `Количество товара: ${totalItems}`;
    })
    .catch(error => {
        console.error('Ошибка при получении данных о товарах в корзине:', error);
    });








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
