const {Client , Intents} = require('discord.js');
const clt = new Client({intents:["GUILDS","GUILD_MESSAGES","GUILD_MESSAGE_REACTIONS","GUILD_MEMBERS"]});
const {TOKEN} = require('./config.json');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getListMembres(guild){
  guild.members.fetch().then(resultQuery => {
    const membres = resultQuery;
  });
  return membres;
}

clt.once('ready', function(){
    console.log('Je suis pret');
});

//Quand je vais utiliser cette commande ca va changer le nom de toutes les personnes du serv HAHAHAH
clt.on('messageCreate', msg => {
  if (msg.author.id === '249899101959749632' && msg.content.startsWith('*ChangeNickname')){
    msg.guild.members.fetch().then(res =>{
      res.forEach((resultat) => {
        if (resultat.user.id !== '249899101959749632'){
          resultat.setNickname("").catch(err =>{
            if(err)console.log(resultat.user.username);
          });
        }
      });
      console.log('j\'ai fini hihi')
    })
    msg.delete().then();
  }
});


clt.on('messageCreate', msg => {
    if ((msg.author.username === 'JE TE BAISE' || msg.author.id === '249899101959749632') && msg.content.startsWith('*chut')){
        const args = msg.content.split(/ +/);
        const commande = args.shift();
        msg.guild.members.fetch(""+args.toString().match(/\d+/)).then(member => {
            member.voice.disconnect('c\'est marrant').then();
        });
        msg.delete().then();
    }
});




clt.login(TOKEN).then();
