module.exports = {
    name : "clear",
    description: "clear le channel",
    async run(client, message, args){
        //bulkdelete messages
        try{
            const channel = message.channel;
            if (channel.isVoice()) return;
            if(!args[0]) return message.reply("tu dois préciser un nombre de message à supprimer");
            if(parseInt(args[0])> 100) return message.reply("tu ne peux pas supprimer plus de 100 messages");
            if(parseInt(args[0])< 1) return message.reply("tu ne peux pas supprimer moins de 1 message");
            message.channel.bulkDelete(args[0]);
            message.delete();
        } catch (error){
            console.log(`${error}`);
        } 
    }
}