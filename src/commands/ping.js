const data=require("../config.json");
module.exports = {
  name: 'ping',
  description: 'test command',
  async run(client, message, agrs){
    message.reply('Pong !').then( () => {
        console.log('i have replied');
    });
  }

}
