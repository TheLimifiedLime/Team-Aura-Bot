"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = __importDefault(require("discord.js"));
var discord_js_2 = require("discord.js");
var bot = new discord_js_1.default.Client({
    allowedMentions: {
        parse: ["users"]
    },
    disableMentions: "everyone",
    ws: {
        intents: [discord_js_2.Intents]
    }
});
