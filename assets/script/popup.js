document.addEventListener("DOMContentLoaded", function() {
    const loginTitle = document.querySelector('.popup__title.login');
    const registerTitle = document.querySelector('.popup__title.register');
    const emailInput = document.querySelector('.register-input');

    loginTitle.addEventListener('click', function() {
        loginTitle.classList.add('active');
        registerTitle.classList.remove('active');
        emailInput.style.display = 'none';
        document.querySelector('input[type="text"]').setAttribute('placeholder', 'Логин');
    });

    registerTitle.addEventListener('click', function() {
        loginTitle.classList.remove('active');
        registerTitle.classList.add('active');
        emailInput.style.display = 'block';
        document.querySelector('input[type="text"]').setAttribute('placeholder', 'Имя');
    });
});

function popupBlock() {
    let popupDiv = document.querySelector('#popup')
    popupDiv.style = 'div'
}
function popupClose() {
    let popupDiv = document.querySelector('#popup')
    popupDiv.style.display = 'none'
}

function toggleCategories() {
    var categoriesDiv = document.getElementById("categories");
    if (categoriesDiv.style.display === "block") {
        categoriesDiv.style.display = "none";
    } else {
        categoriesDiv.style.display = "block";
    }
}

