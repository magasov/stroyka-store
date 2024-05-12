const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname)));
app.use(bodyParser.json());

let cartItems = [];
let orders = []; // Создаем массив для хранения информации о заказах пользователя

app.post('/addToCart', (req, res) => {
    const { name, price, image } = req.body;
    cartItems.push({ name, price, image });
    res.status(200).send('Товар добавлен в корзину');
});

app.get('/getCartItems', (req, res) => {
    res.json(cartItems);
});

// Обработка запроса на получение информации о заказах
app.get('/orders', (req, res) => {
    // Отправляем информацию о заказах клиенту
    res.json(orders);
});

// Обработка запроса на добавление заказа
app.post('/completeOrder', (req, res) => {
    const order = req.body;
    orders.push(order); // Добавляем новый заказ в массив заказов
    cartItems = []; // Очищаем корзину после завершения заказа
    res.status(200).send('Заказ успешно оформлен');
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
