const TelegramBot = require("node-telegram-bot-api");
const token = "6914168476:AAEyNpmUF1TkDf6E-I5m4eccVbvZ23T94Kw";
const bot = new TelegramBot(token);
console.log("bot created");
bot.on("message", (msg: any) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Received your message");
});
