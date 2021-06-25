import { log } from "./functions/logger.js"
import { ShardingManager } from "discord.js";
// Create a new ShardingManager
const manager = new ShardingManager("./dist/bot.js", {
  token: process.env.BOT_TOKEN,
});

// Spawn the shards
manager.spawn()

manager.on("shardCreate", (shard) => {
  log(`Shard #${shard.id} Launched`, "shard")
})