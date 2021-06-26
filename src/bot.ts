import { CommandoClient } from "discord.js-commando";
import config from "./config.json";
import { log } from "./functions/logger.js"
const bot = new CommandoClient({
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