const data=require("../config.json");
module.exports = {
  name : 'chut',
  description : "disconnect user from voiceChannels",
  async run(client, message, args){
    // Get only numbers on mentioned user <@999999999999> => 999999999999
    const id = "" + args.toString().match(/\d+/);
    // Fetch a specifique member with his id
    const member = await message.guild.members.fetch(id);
    // Disconnect him and send a message if success
    member.voice.disconnect().then(x=>console.log(`J\'ai exclu ${member.nickname !== null ? member.nickname : member.user.username}`));
    message.delete().then();
  }
}
