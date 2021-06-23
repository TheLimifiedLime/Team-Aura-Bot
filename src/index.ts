import chalk from "chalk"
import { ShardingManager } from "discord.js";
// Create a new ShardingManager
const manager = new ShardingManager("./dist/bot.js", {
  token: process.env.BOT_TOKEN,
});

// Spawn the shards
manager.spawn()

manager.on("shardCreate", (shard) => {
    console.log(chalk.greenBright("SHARD"), `Shard #${shard.id} Launched`);
})