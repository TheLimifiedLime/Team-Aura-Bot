const { Client } = require("discord.js")
const config = require("./config.json");
const { log } = require("./functions/logger.js")
const bot = new Client()

bot.on('ready', async () => {
  log(`Logged in as ${bot.user.tag}`)
})

bot.login()