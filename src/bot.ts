import { Client } from "discord.js"
import { log } from "./functions/logger"
const config = {
  defaultOwnerIDS: ["738966191519039640"],
  defaultPrefixes: [""],
  defaultColors: {
    main: "cb9ae2",
    warn: "f78c6c",
    error: "fd6868",
  },
};
const bot = new Client()

bot.on('ready', async () => {
  log(`Logged in as ${bot.user?.tag}`, "success")
})

bot.login()