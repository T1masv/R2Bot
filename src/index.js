const { Discord, Client, Intents, Collection} = require("discord.js");
const client = new Client({
  intents: [
    "GUILDS",
    "GUILD_MESSAGES",
    "GUILD_MESSAGE_REACTIONS",
    "GUILD_MEMBERS",
    "GUILD_VOICE_STATES"
  ],
});
const data=require("./config.json");
let listeMutes = [];

client.commands = new Collection();
client.events = new Collection();

// load handlers
['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}.js`)(client,Discord);
});

//bot login
client.login(data.TOKEN).then();
