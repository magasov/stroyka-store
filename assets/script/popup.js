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

// категория появление при наведение 

// document.addEventListener("DOMContentLoaded", function() {
//     var parent = document.querySelector('.parent');
//     var hiddenDiv = parent.querySelector('.categoria__none');

//     parent.addEventListener('mouseover', function() {
//         hiddenDiv.style.display = 'block';
//     });

//     parent.addEventListener('mouseout', function() {
//         hiddenDiv.style.display = 'none';
//     });
// });

// function showCategories() {
//     var categoriesDiv = document.getElementById("categories");
//     categoriesDiv.style.display = "block";
// }

// function hideCategories() {
//     var categoriesDiv = document.getElementById("categories");
//     categoriesDiv.style.display = "none";
// }

function showCategories() {
    var categoriesDiv = document.getElementById("categories");
    categoriesDiv.style.display = "block";
}

function hideCategories() {
    // Не скрывать категории, если курсор находится над ними
    var categoriesDiv = document.getElementById("categories");
    categoriesDiv.addEventListener("mouseover", function() {
        categoriesDiv.style.display = "block";
    });

    // Скрыть категории только тогда, когда курсор ушел с ссылки "Каталог"
    var catalogLink = document.querySelector("#categories");
    catalogLink.addEventListener("mouseout", function(event) {
        if (!event.relatedTarget || !event.relatedTarget.closest("#categories")) {
            categoriesDiv.style.display = "none";
        }
    });
}
