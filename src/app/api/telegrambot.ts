// pages/api/telegram.ts
import { NextApiRequest, NextApiResponse } from "next";
import bot from "../../telegrambot/telegram"; // Путь к вашему файлу telegramBot.ts

export default (req: NextApiRequest, res: NextApiResponse) => {
  bot.sendMessage("CHAT_ID", "Привет из Next.js!"); // Замените CHAT_ID на ID чата
  res.status(200).json({ message: "Сообщение отправлено!" });
};
