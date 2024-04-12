// telegramBot.ts
import TelegramBot from "node-telegram-bot-api";

// Вставьте ваш токен для Telegram бота
const token = "YOUR_TELEGRAM_BOT_TOKEN";
const bot = new TelegramBot("6914168476:AAEyNpmUF1TkDf6E-I5m4eccVbvZ23T94Kw", {
  polling: true,
});

// Пример обработчика для команды /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, msg);
});

export default bot;
