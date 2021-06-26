"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_commando_1 = require("discord.js-commando");
var config_json_1 = __importDefault(require("./config.json"));
var bot = new discord_js_commando_1.CommandoClient({
    commandPrefix: "a?",
    owner: config_json_1.default.ownerIDS
});
