import { CommandoClient } from "discord.js-commando";
import config from "./config.json";
const bot = new CommandoClient({
  commandPrefix: "a?",
  owner: config.ownerIDS,
});

bot.registry
  .registerDefaultTypes()
  .registerGroups([["owner", "Owner"]])
  .registerDefaultGroups()
  .registerDefaultCommands()
  .registerCommandsIn(__dirname + "/commands");
