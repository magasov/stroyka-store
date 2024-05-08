const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

const path = require('path');

app.use(express.static(path.join(__dirname)));

app.use(bodyParser.json());

let cartItems = [];

app.post('/addToCart', (req, res) => {
    const { name, price } = req.body;
    cartItems.push({ name, price });
    res.status(200).send('Товар добавлен в корзину');
});

app.get('/getCartItems', (req, res) => {
    res.json(cartItems);
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});