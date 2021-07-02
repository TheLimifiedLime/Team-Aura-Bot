import { Client } from "discord.js"
import config from "./config.json"
import { log } from "./functions/logger"
const bot = new Client()

bot.on('ready', async () => {
  log(`Logged in as ${bot.user?.tag}`, "success")
})

bot.login()