module.exports = {
  name : 'chut',
  description : "disconnect user from voiceChannels",
  async run(client, message, args){
    message.guild.members.fetch("" + args.toString().match(/\d+/)).then((member) => {
           member.voice.disconnect().then();
           console.log(`J\'ai exclu ${member.nickname !== null ? member.nickname : member.user.username}`);
    });
    message.delete().then();
  }
}
