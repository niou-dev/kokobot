const Discord = require("discord.js");
const {MessageAttachment} = require("discord.js");
const client = new Discord.Client();
const dotenv = require("dotenv");
dotenv.config();
const giphy = require("giphy-api")(process.env.GIPHY_API)


client.on("ready", () => {
    console.log("Logged in as " + client.user.tag);
});


var call = false;

//Bot checks if it gets called so it can proccess the next message

client.on("message", msg => {
    if (msg.content === '!helpkokobot') {
        msg.reply("Gia na sou apanthsei to Kokobot prepei na to fwnakseis. Grapse \"Kokobot\" \n Epeita dokimase: \"kkk\", \"Mpakaoukas\", \"Giatros\"")
        //msg.reply("Epeita dokimase: \"kkk\", \"Mpakaoukas\", \"Giatros\"")
    }
    if (msg.content === "Kokobot" || msg.content === "kokobot") {
        msg.reply("Lege");
        call = true;
    }
});

//If the bot gets called it will proccess the next message for a matched keyword

client.on("message", msg => {
    //const answer = msg.content;

    if (call === true) {

        if (msg.content.includes("Kalimera") || msg.content.includes("kalimera") || msg.content.includes("Kalhmera") || msg.content.includes("kalhmera")) {
            msg.reply("Kalhmera kai se esena");
            call = false;
        }

        if (msg.content === 'kkk') {
            msg.reply("Roufokolis");
            call = false;
        }

        if (msg.content === "Mpakaoukas") {
            msg.reply("A re vlaxo");
            call = false;
        }

        const file1 = new MessageAttachment("pn.jpg")
        if ((msg.content.includes("Makos") || msg.content.includes("makos")) && (msg.content.includes("Pou") || msg.content.includes("pou")) && (msg.content.includes("Einai") || msg.content.includes("einai"))) {
            msg.reply("Yphretei thn patrida");
            msg.channel.send(file1);
            call = false;
        }


        const file2 = new MessageAttachment("giatros.jpg")

        if (msg.content === "Giatros") {
            msg.reply("Megas Mpakaoukas");
            msg.channel.send(file2);
            call = false;
        }

        if (msg.content.includes("Nionios") || msg.content.includes("nionios")) {
            msg.reply("Kalos politis<3");
            call = false;
        }
        //I convert both message content and my wanted string to lower case so i make the includes function case insensitive
        if (msg.content.toLowerCase().includes("ti wra einai".toLowerCase())) {
            let ts = new Date();
            msg.reply(ts.getHours() + ":" + ts.getMinutes());
            call = false;
        }

        if (msg.content.toLowerCase().includes("gif")) {
            // msg.reply("Pes mou thema");
            // client.on("message", msg => {
            //     //console.log(msg.content)
            //     giphy.random(msg.content, (err, res) => {
            //         msg.channel.send(res.data.bitly_url);
            //     })
                
            // });
            giphy.random("", (err, res) => {
                //console.log(res.url);
                //msg.reply(res.data[0].bitly_url);
                msg.channel.send(res.data.bitly_url);
                
            });

            call = false;
        }

        if (msg.content.toLowerCase().includes("kourases") || msg.content.toLowerCase().includes("psofa") || msg.content.toLowerCase().includes("malaka") || msg.content.toLowerCase().includes("malakismeno") || msg.content.toLowerCase().includes("gamhsou") || msg.content.toLowerCase().includes("gamw")) {
            msg.reply("Ante gamhsou paidaki");
            call = false;
        }
    }

});


client.login(process.env.DISC_API);
