import {setWebhook} from "telebot-vercel"
import bot from "../../telegrambot/bot"

const path = "api/telegram.mjs"

export default setWebhook({bot, path, handleErrors: true})