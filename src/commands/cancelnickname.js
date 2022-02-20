const data=require("../config.json");
module.exports = {
  name: 'cancelnickname',
  description : 'Delete all nickname in a guild',
  async run(client, message, args){
        // list all bit admins
        const admins = data.ids.filter(x=>x.admin).map(x=>x.id);
        // Get all members who are not bot admin
        const members = (await message.guild.members.fetch()).filter(x=> !admins.includes(x.user.id));
        // For each member who are not bot admin reset nickname;
        for(const member of members){
          // console.log(member[0]);
          member[1].setNickname("").catch(err => console.log(`Je n'ai pas reussis a changer le nickname de ${member[1].user.username}`));
        }
        await message.delete();
  }
}
