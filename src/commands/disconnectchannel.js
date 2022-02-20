const data=require("../config.json");
module.exports = {
  name : "disconnectchannel",
  description: "disconnect members inside a selected channel",
  async run(client, message, args){
    const CHANNEL_ID = "" + args.toString().match(/\d+/);
    try{
      const channel = await message.guild.channels.fetch(CHANNEL_ID);
      if (!channel.isVoice()) return;
      for(const member of channel.members){
        member[1].voice.disconnect().then(x=>console.log(`J\'ai exclu ${member.nickname !== null ? member.nickname : member.user.username}`););
      }
    } catch (error){
      console.log(`${error}`);
    }
  }
}
