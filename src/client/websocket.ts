/*
Тут содержится функция для отправки комманд серверу по веб-сокетам, а также сама работа с веб-сокетами.
*/

import IPendingCommand from "./contracts/pending-command";

const prendingCommands: Array<IPendingCommand> = []; // Массив комманд, ожидающих своего результата

// Инициализируем сокеты
