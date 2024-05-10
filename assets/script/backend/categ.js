let products1 = [
    {
        image: "./assets/images/home/popular/popular1.png",
        name: "Керамогранит Yasmin 598х185 коричневый C-YA4M112D",
        price: "899 ₽"
    },
    {
        image: "./assets/images/home/popular/popular2.png",
        name: "Затирка для узких швов Ceresit СЕ 33, цвет белый, 2 кг",
        price: "275 ₽"
    },
    {
        image: "./assets/images/home/popular/popular3.png",
        name: "Грунтовка Старатели 10л глубокого проникновения",
        price: "839 ₽"
    },
    {
        image: "./assets/images/home/popular/popular4.png",
        name: "Гипсокартон Волма, 2500 х 1200 х 12,5 мм",
        price: "335 ₽"
    },
    {
        image: "./assets/images/home/popular/popular5.png",
        name: "Профиль 0,55мм для гипсокартона",
        price: "195 ₽"
    },
    {
        image: "./assets/images/home/popular/popular6.png",
        name: "Рулетка 3м",
        price: "100 ₽"
    },
    {
        image: "./assets/images/home/popular/popular7.png",
        name: "Кнауф Мп 75 штукатурка гипсовая МН 30кг",
        price: "380 ₽"
    },
    {
        image: "./assets/images/home/popular/popular8.png",
        name: "Уголок серый канализационный Д110 ГР90",
        price: "335 ₽"
    },
    {
        image: "./assets/images/home/popular/popular9.png",
        name: "Knauf Ротбанд, 30 кг",
        price: "508 ₽"
    },
    {
        image: "./assets/images/home/popular/popular10.png",
        name: "Саморез по металлу 3,5х25 мм для гипсокартона",
        price: "340 ₽"
    },
    {
        image: "./assets/images/home/popular/popular11.png",
        name: "Шпатлевка универсальная Danogips SuperFinish 17 л",
        price: "2555 ₽"
    },
    {
        image: "./assets/images/home/popular/popular12.png",
        name: "Клейкая лента металлизированная Изоспан FL 5х5000 см",
        price: "226 ₽"
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
