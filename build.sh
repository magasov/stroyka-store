#!/bin/bash

# Предоставление прав на выполнение скрипту сборки
chmod +x build.sh

# Установка зависимостей
npm install

# Запуск сервера Express
node backend.js
