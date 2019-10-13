const Discord =require("discord.js");
const client = new Discord.Client();

const token = 'NjE5MTM2MTc4NjA3NzUxMTc0.XXEArQ.s7A1yV0ODqLp4dfzSWxC0-t2kAE';

const prefix = '!';

client.on("ready", () => {

    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity("Messages | prefix = !", { type: "STREAMING" });
});

client.on("message", msg =>{
    if (msg.content === prefix + "!jam") {
        msg.reply("You do not have her toes anymore, because they have been returned!");
    }
});

client.on("message", msg =>{
    if (msg.content === prefix + "!maxietoes") {
        msg.reply("Yeah ikr they're gonna be taken soon ah ah , coming for your toes maxie!");
    }
});

client.on("message", msg =>{
    if (msg.content === prefix + "!playboy") {
        msg.reply("Playboy best bot, gonna 1v1 after this command!");
    }
});

client.on("message", msg =>{
    if (msg.content === prefix + "!degs") {
        msg.reply("Better than shawn! JK shawn is a bot!");
    }
});

client.on("message", msg =>{
    if(msg.content === prefix + "grandma") {
        msg.reply("Best Grandma!!!!");
    }
});

client.on("message", msg =>{
    if (msg.content === "!get") {
        msg.author.channel.bulkDelete(0)
            .then(message => console.log(`Bulk delete ${message.size} message`))
            .catch(console.error);
    }
});

client.login(token);