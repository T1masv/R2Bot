const { setIntervalAsync } = require('set-interval-async/dynamic');
const data=require("../config.json");
module.exports = {
  name: 'rainbowrole',
  description: 'Fait un role arc en ciel',
  async run(client, message, agrs){
    msg = message;
    setTimeout(()=>{changecolor(message)}, 1000);
  }
}
function changecolor(message){
  message.guild.roles.fetch("827977247385583707").then((role)=>{
    const colors = ['FF6633', 'FFB399', 'FF33FF', 'FFFF99', '00B3E6',
      'E6B333', '3366E6', '999966', '99FF99', 'B34D4D',
      '80B300', '809900', 'E6B3B3', '6680B3', '66991A',
      'FF99E6', 'CCFF1A', 'FF1A66', 'E6331A', '33FFCC',
      '66994D', 'B366CC', '4D8000', 'B33300', 'CC80CC',
      '66664D', '991AFF', 'E666FF', '4DB3FF', '1AB399',
      'E666B3', '33991A', 'CC9999', 'B3B31A', '00E680',
      '4D8066', '809980', 'E6FF80', '1AFF33', '999933',
      'FF3380', 'CCCC00', '66E64D', '4D80CC', '9900B3',
      'E64D66', '4DB380', 'FF4D4D', '99E6E6', '6666FF'];

      let random = Math.floor(Math.random() * colors.length);
      role.edit({
        color: colors[random]
      }).then(console.log(colors[random]));

  });
  setTimeout(()=>{changecolor(message)}, 1000);
}
