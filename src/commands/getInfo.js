const data=require("../config.json");
module.exports = {
  name : "getinfo",
  description : "Testing commands for getting some informations about a user",
  async run (client, message, args) {
    // Get the user id from mentioned user
    const member = [...message.mentions.members][0][1];
    const voiceState = member.voice;
    const channel =  [...message.mentions.channels][0][1]
    voiceState.setChannel(channel)
    console.log(member);
  }
}
