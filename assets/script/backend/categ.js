let products1 = [
    {
        image: "./assets/images/categoria/categ1.png",
        name: "Шпатлевка масляно-клеевая 3кг Л-С",
        price: "212 ₽"
    },
    {
        image: "./assets/images/categoria/categ2.png",
        name: "Штукатурка цементная толстослойная PLITONIT Т1+ 25 кг",
        price: "349 ₽"
    },
    {
        image: "./assets/images/categoria/categ3.png",
        name: "Штукатурка гипсовая Волма Слой, 5 кг",
        price: "229 ₽"
    },
    {
        image: "./assets/images/categoria/categ4.png",
        name: "Клей плиточный Дауэр Кварц Dauer Quartz 25кг",
        price: "490 ₽"
    },
    {
        image: "./assets/images/categoria/categ5.png",
        name: "Клей плиточный Dauer Maxi Дауэр Макси 25кг толстослойный",
        price: "470 ₽"
    },
    {
        image: "./assets/images/categoria/categ6.png",
        name: "Кнауф МП 75 штукатурка гипсовая МН 30кг",
        price: "380 ₽"
    },
    {
        image: "./assets/images/categoria/categ7.png",
        name: "Штукатурка гипсовая Основит Т-25 Гипсвэлл",
        price: "295 ₽"
    },
    {
        image: "./assets/images/categoria/categ8.png",
        name: "Затирка CERESIT CE33 (ЦЕРЕЗИТ СЕ33) розовая (2 кг)",
        price: "250 ₽"
    },
    {
        image: "./assets/images/categoria/categ9.png",
        name: "Основит PG 35 W (Т-35) Экосилк Шпатлевка гипсовая белая (20 кг)",
        price: "320 ₽"
    },
    {
        image: "./assets/images/categoria/categ10.png",
        name: "Клей гипсовый монтажный Knauf Перлфикс 30 кг",
        price: "425 ₽"
    },
    {
        image: "./assets/images/categoria/categ11.png",
        name: "Шпатлевка готовая финишная Sheetrock Danogips SuperFinish 17 л",
        price: "2200 ₽"
    },
    {
        image: "./assets/images/categoria/categ12.png",
        name: "Грунтовка Knauf Тифенгрунд морозостойкая 10 кг",
        price: "969 ₽"
    },
    {
        image: "./assets/images/categoria/categ13.png",
        name: "Штукатурка гипсовая Perfekta Гипстар серая 30 кг",
        price: "315 ₽"
    },
    {
        image: "./assets/images/categoria/categ14.png",
        name: "Штукатурка цементная высокопрочная Hands Socle PRO, 24 кг",
        price: "976 ₽"
    },
    {
        image: "./assets/images/categoria/categ15.png",
        name: "Смесь М-200 монтажно-кладочная, Baumax (50 кг)",
        price: "502 ₽"
    },
    {
        image: "./assets/images/categoria/categ16.png",
        name: "Клей плиточный (C0) BUILDER КП-500 25 кг.",
        price: "302 ₽"
    }

];

let productsContainer = document.getElementById("products-container");

function displayProducts(products) {
    productsContainer.innerHTML = "";
    products.forEach(product => {
        let productHTML = `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <div class="product__info">
                    <h3>${product.name}</h3>
                    <p>${product.price} </p>
                    <div class="btn__product" onclick="addToCart('${product.name}', '${product.price}', '${product.image}')">В корзину</div>
                </div>
            </div>
        `;
        productsContainer.innerHTML += productHTML;
    });
}

function filterByPrice(minPrice, maxPrice) {
    var filteredProducts = products1.filter(function (product) {
        return parseInt(product.price) >= minPrice && parseInt(product.price) <= maxPrice;
    });
    displayProducts(filteredProducts);
}
function addToCart(name, price, image) {
    var container = document.getElementById("notification-container");
    var notification = document.createElement("div");
    notification.className = "notification";
    notification.innerText = "Товар добавлен в корзину!";
    container.insertBefore(notification, container.firstChild);

    setTimeout(function () {
        container.removeChild(notification);
    }, 3000);

    console.log("Adding to cart:", name, price, image);
    fetch('/addToCart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, price, image })
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => {
            console.error('Ошибка:', error);
        });
}

$(function () {
    var minPriceInput = $("#minPrice");
    var maxPriceInput = $("#maxPrice");

    $("#priceRange").slider({
        range: true,
        min: 0,
        max: 3000,
        values: [0, 3000],
        slide: function (event, ui) {
            $("#priceRangeValue").html("Price: " + ui.values[0] + " - " + ui.values[1]);
            minPriceInput.val(ui.values[0]);
            maxPriceInput.val(ui.values[1]);
        },
        stop: function (event, ui) {
            filterByPrice(ui.values[0], ui.values[1]);
        }
    });

    minPriceInput.change(function () {
        var minValue = parseInt($(this).val());
        var maxValue = parseInt(maxPriceInput.val());
        $("#priceRange").slider("values", 0, minValue);
        filterByPrice(minValue, maxValue);
    });

    maxPriceInput.change(function () {
        var minValue = parseInt(minPriceInput.val());
        var maxValue = parseInt($(this).val());
        $("#priceRange").slider("values", 1, maxValue);
        filterByPrice(minValue, maxValue);
    });

    $("#priceRangeValue").html("Price: " + $("#priceRange").slider("values", 0) +
        " - " + $("#priceRange").slider("values", 1));

    displayProducts(products1);
});
