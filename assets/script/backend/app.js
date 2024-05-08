let products = [
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

];

let productsContainer = document.getElementById("products-container");

products.forEach(product => {
    let productHTML = `
        <div class="product">
            <img src="${product.image}" alt="${product.name}">
            <div class="product__info">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <div class="btn__product">В корзину</div>
            </div>
        </div>
    `;
    productsContainer.innerHTML += productHTML;
});