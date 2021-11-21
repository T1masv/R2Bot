module.exports ={
  name: 'changenickname',
  description: 'Change nicknames of all member in the guild',
  async run(client, message, args){
    if (message.author.id === "249899101959749632") {
      args = args.join(" ");
      console.log(args);
      message.guild.members.fetch().then((resultat) => {
        resultat.forEach((resultat) => {
          if (resultat.user.id !== "249899101959749632") {
            resultat.setNickname(args).catch((err) => {
              if (err) console.log(resultat.user.username);
            });
          }
        });
      });
      message.delete().then();
    }
  }
}
