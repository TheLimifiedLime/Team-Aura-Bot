"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logger_js_1 = require("./functions/logger.js");
var discord_js_1 = require("discord.js");
// Create a new ShardingManager
var manager = new discord_js_1.ShardingManager("./dist/bot.js", {
    token: process.env.BOT_TOKEN,
});
// Spawn the shards
manager.spawn();
manager.on("shardCreate", function (shard) {
    logger_js_1.log("Shard #" + shard.id + " Launched", "shard");
    shard.on("death", function () {
        logger_js_1.log("Shard #{shard.id} died", "error");
    });
    shard.on("error", function (error) {
        logger_js_1.log("Shard #" + shard.id + " experienced an error", "error");
    });
    shard.on("disconnect", function () {
        logger_js_1.log("Shard #" + shard.id + " was disconnected", "error");
    });
});
