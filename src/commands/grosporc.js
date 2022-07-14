const data=require("../config.json");
module.exports = {
    name : "grosporc",
    description: "spam le gif du porc",
    async run(client, message, args){
        // send 10 times pig gif
        try{
            const channel = message.channel;
            if (channel.isVoice()) return;
            for(let i = 0; i < 10; i++){
                channel.send(`https://tenor.com/view/pigs-pig-love-my-pig-gif-14103774 <@214429278228447232>`);
            }
            message.delete();
        } catch (error){
            console.log(`${error}`);
        }
    }
}