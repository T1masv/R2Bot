module.exports = {
    name : "test",
    description : "Test de rename d'un role",
    async run(client, message,args){
        if(message.author.id != "214429278228447232" ||  !message.content.startsWith("$setRoleName")) return;
        const args = message.content.split(/ +/);
        const role = await message.guild.roles.fetch("952592930512728064");
        role.setName(args.slice(1 ,args.length).join(" "));
    }
}