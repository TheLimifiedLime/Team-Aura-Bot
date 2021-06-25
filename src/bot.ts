import Discord from "discord.js"
import { Intents } from "discord.js"
const bot = new Discord.Client({
    allowedMentions: {
        parse: ["users"]
    },
    disableMentions: "everyone",
    ws: {
        intents: [Intents]
    }
})