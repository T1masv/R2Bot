module.exports = {
  name: 'cancelnickname',
  description : 'Delete all nickname in a guild',
  async run(client, message, args){
        const members = await message.guild.members.fetch()
        members.forEach((member, i) => {
          if (member.user.id !== "249899101959749632") {
            member.setNickname('').catch((err) => {if (err) console.log(member.user.username)});
          }
        });
        await message.delete();
  }
}
