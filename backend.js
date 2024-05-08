const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

const path = require('path');

// Указываем Express использовать текущую директорию как корневую для статических файлов
app.use(express.static(path.join(__dirname)));

// Промежуточное ПО для разбора тела запроса в формате JSON
app.use(bodyParser.json());

// Массив для хранения товаров в корзине (в реальном приложении используйте базу данных)
let cartItems = [];

// Обработчик POST запроса для добавления товара в корзину
app.post('/addToCart', (req, res) => {
    const { name, price } = req.body;
    cartItems.push({ name, price });
    res.status(200).send('Товар добавлен в корзину');
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});