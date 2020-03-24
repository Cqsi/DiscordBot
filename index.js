const Discord = require("discord.js");
const client = new Discord.Client();

const token = "NjkyMDEzOTI2NDI2MjE0NDkz.Xno5qw.jbssgraAqXBSilz7YIRjsTsGr6U";

// Configuring the bot
client.on("ready", () =>{
    console.log("This bot is online!");
    client.user.setActivity("Youtube", {type: "WATCHING"});
});

client.on("message", msg=>{
    if(msg.content == "!ping"){
        msg.channel.send("pong!"); // This is how you send a message
    }
})

client.login(token);