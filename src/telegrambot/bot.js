import TeleBot from "telebot";

const bot = new TeleBot("6914168476:AAEyNpmUF1TkDf6E-I5m4eccVbvZ23T94Kw");

bot.on("text", (msg) => msg.reply.text(msg.text));

export default bot;
