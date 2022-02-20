const data=require("../config.json");
module.exports ={
  name: 'changenickname',
  description: 'Change nicknames of all member in the guild',
  async run(client, message, args){
    // list all bit admins
    const admins = data.ids.filter(x=>x.admin).map(x=>x.id);
    // Get all members who are not bot admin
    const members = (await message.guild.members.fetch()).filter(x => !admins.includes(x.user.id));
    //console.log(members);
    for(const member of members){
      // console.log(member[0]);
      member[1].setNickname(args.join(" ")).catch(err => console.log(`Je n'ai pas reussis a changer le nickname de ${member[1].user.username}`));
    }
    message.delete().then();
  }
}
