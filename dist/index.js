"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var discord_js_1 = require("discord.js");
// Create a new ShardingManager
var manager = new discord_js_1.ShardingManager("./dist/bot.js", {
    token: process.env.BOT_TOKEN,
});
// Spawn the shards
manager.spawn();
manager.on("shardCreate", function (shard) {
    console.log(chalk_1.default.greenBright("SHARD"), "Shard #" + shard.id + " Launched");
});
