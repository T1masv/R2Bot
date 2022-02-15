const { Discord, Client, Intents, Collection} = require("discord.js");
const fetch = require("node-fetch");
const client = new Client({
  intents: [
    "GUILDS",
    "GUILD_MESSAGES",
    "GUILD_MESSAGE_REACTIONS",
    "GUILD_MEMBERS",
    "GUILD_VOICE_STATES",
  ],
});
const { TOKEN } = require("./config.json");
let listeMutes = [];

client.commands = new Collection();
client.events = new Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}.js`)(client,Discord);
})

//Pause pendant une fonction async
// function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }
//
// //event ready
// client.once("ready", function () {
//   console.log("Je suis pret");
// });
//
// //Quand je vais utiliser cette commande ca va changer le nom de toutes les personnes du serv HAHAHAH
// client.on("messageCreate", (msg) => {
//   if (
//     msg.author.id === "249899101959749632" &&  msg.content.startsWith("*CancelNickname")) {
//     msg.guild.members.fetch().then((resultat) => {
//       resultat.forEach((resultat) => {
//         if (resultat.user.id !== "249899101959749632") {
//           resultat.setNickname("").catch((err) => {
//             if (err) console.log(resultat.user.username);
//           });
//         }
//       });
//       console.log("j'ai fini hihi");
//     });
//     msg.delete().then();
//   }
// });
//
// //Change le nom de toutes les personnes du GUILD
// client.on("messageCreate", (msg) => {
//   if (
//     msg.author.id === "249899101959749632" && msg.content.startsWith("*ChangeNickname")) {
//     let args = msg.content.split(/ +/);
//     const commande = args.shift();
//     args = args.join(" ");
//     console.log(args);
//     msg.guild.members.fetch().then((resultat) => {
//       resultat.forEach((resultat) => {
//         if (resultat.user.id !== "249899101959749632") {
//           resultat.setNickname(args).catch((err) => {
//             if (err) console.log(resultat.user.username);
//           });
//         }
//       });
//     });
//     msg.delete().then();
//   }
// });
//
// //Disconnect users mentioned
// client.on("messageCreate", (msg) => {
//   if (
//     (msg.author.username === "JE TE BAISE" || msg.author.id === "249899101959749632") && msg.content.startsWith("*chut")) {
//     const args = msg.content.split(/ +/);
//     const commande = args.shift();
//     msg.guild.members
//       .fetch("" + args.toString().match(/\d+/))
//       .then((member) => {
//         member.voice.disconnect("c'est marrant").then();
//         msg.channel.send(
//           `J\'ai exclu ${member.nickname !== null ? member.nickname : member.user.username}`
//         );
//       });
//     msg.delete().then();
//   }
// });
//

//
// client.on('messageCreate', (msg) =>{
//   if(msg.author.id === '249899101959749632' && msg.content.startsWith('*kv')){
//     const args = msg.content.split(/ +/);
//     const commande = args.shift();
//
//     const channel = args[0];
//
//     msg.guild.channels.fetch(channel.match(/\d+/)).then(returned_channel =>{
//       if(returned_channel.isVoice()){
//         returned_channel.members.forEach((member, i) => {
//           member.voice.disconnect();
//         });
//       }
//     });
//   }
//
// })
// //bot login
client.login(TOKEN).then();
