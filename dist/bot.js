"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_commando_1 = require("discord.js-commando");
var config_json_1 = __importDefault(require("./config.json"));
var logger_js_1 = require("./functions/logger.js");
var bot = new discord_js_commando_1.CommandoClient({
    commandPrefix: config_json_1.default.prefix,
    owner: config_json_1.default.ownerIDS,
});
bot.registry
    .registerDefaultTypes()
    .registerGroups([["owner", "Owner"]])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(__dirname + "/commands");
bot.on("ready", function () {
    // Done so typescript shuts the fuck up
    logger_js_1.log("Logged in as " + bot.user.tag, "success");
    bot.user.setActivity("you sleep", {
        type: "WATCHING"
    });
});
bot.on("error", console.error);
bot.login();
