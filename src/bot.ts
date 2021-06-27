const { Client } = require("discord.js")
const config = require("./config.json");
const { log } = require("./functions/logger.js")
const bot = new Client({
  commandPrefix: config.prefix,
  owner: config.ownerIDS,
});

bot.registry
  .registerDefaultTypes()
  .registerGroups([["owner", "Owner"]])
  .registerDefaultGroups()
  .registerDefaultCommands()
  .registerCommandsIn(__dirname + "/commands");

bot.on("ready", () => {
    // Done so typescript shuts the fuck up
    log(`Logged in as ${bot.user!.tag}`, "success");
    bot.user!.setActivity("you sleep", {
        type: "WATCHING"
    })
});

bot.on("error", console.error);

bot.login()