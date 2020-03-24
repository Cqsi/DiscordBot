const Discord = require("discord.js");
const client = new Discord.Client();

const token = "NjkyMDEzOTI2NDI2MjE0NDkz.XnozbQ.360si3H-JaYqqtg4Pouqd2ca99A";

client.on("ready", () =>{
    console.log("This bot is online!");
    client.user.setActivity("Youtube", {type: "WATCHING"});
});

client.on("message", msg=>{
    if(msg.content == "HELLO"){
        msg.reply("Hello friend!");
    }
})

client.login(token);