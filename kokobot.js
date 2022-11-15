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
var gifbool = false;
var gifrep = "";
var authorId = "";
var authorTag = "";
var myBool = true;

//Bot checks if it gets called so it can proccess the next message

client.on("message", msg => {
    if (msg.content === '!helpkokobot') {
        msg.reply("Gia na sou apanthsei to Kokobot prepei na to fwnakseis. Grapse \"Kokobot\" \n Epeita dokimase: \"kkk\", \"Mpakaoukas\", \"Giatros\"")
        //msg.reply("Epeita dokimase: \"kkk\", \"Mpakaoukas\", \"Giatros\"")
    }
    if (msg.content === "Kokobot" || msg.content === "kokobot") {
        msg.reply("Lege");
        call = true;
        //console.log(msg.author.tag);
        //if (myBool === true) {
            authorId = msg.author.id;
            authorTag = msg.author.tag;
           //myBool = false;
            console.log(authorTag);

        //}
        
    }
});

//If the bot gets called it will proccess the next message for a matched keyword

client.on("message", msg => {
    //const answer = msg.content;
    //console.log(msg.author.id)

    if ((call === true) && (msg.author.id === authorId)) {

        if (msg.content.toLowerCase().includes("kalhmera") || msg.content.toLowerCase().includes("kalimera")) {
            msg.reply("Kalhmera kai se esena");
            call = false;
        }

        if (msg.content.toLowerCase() === 'kkk') {
            msg.reply("Roufokolis");
            call = false;
        }

        if (msg.content.toLowerCase().includes("mpakaoukas")) {
            msg.reply("A re vlaxo");
            call = false;
        }

        const file1 = new MessageAttachment("pn.jpg")
        if ((msg.content.toLowerCase().includes("makos") && msg.content.toLowerCase().includes("pou")) && msg.content.toLowerCase().includes("einai")) {
            msg.reply("Yphretei thn patrida");
            msg.channel.send(file1);
            call = false;
        }


        const file2 = new MessageAttachment("giatros.jpg")

        if (msg.content.toLowerCase().includes("giatros")) {
            msg.reply("Megas Mpakaoukas <:giatros:828371414452273182>");
            msg.channel.send(file2);
            call = false;
        }

        if (msg.content.toLowerCase().includes("nionios")) {
            msg.reply("Kalos politis<3");
            call = false;
        }
        //I convert both message content and my wanted string to lower case so i make the includes function case insensitive
        if (msg.content.toLowerCase().includes("ti wra einai")) {
            let ts = new Date();
            msg.reply(ts.getHours() + ":" + ts.getMinutes());
            call = false;
        }

        if (gifbool === true) {
            giphy.random(msg.content, (err, res) => {
                msg.channel.send(res.data.bitly_url);
            })
            gifbool = false;
            call = false;
        }

        if (msg.content.toLowerCase().includes("gif")) {
            msg.reply("Pes mou thema");
            gifbool = true;            
        }

        

        if (msg.content.toLowerCase().includes("kourases") || msg.content.toLowerCase().includes("psofa") || msg.content.toLowerCase().includes("malaka") || msg.content.toLowerCase().includes("malakismeno") || msg.content.toLowerCase().includes("gamhsou") || msg.content.toLowerCase().includes("gamw") || msg.content.toLowerCase().includes("gamiesai") || msg.content.toLowerCase().includes("mouni") || msg.content.toLowerCase().includes("pousth"))  {
            msg.reply("Ante gamhsou paidaki");
            call = false;
        }

        if (msg.content.toLowerCase().includes("mixas") || msg.content.toLowerCase().includes("louris") || msg.content.toLowerCase().includes("lourhs") || msg.content.toLowerCase().includes("vaggelis") || msg.content.toLowerCase().includes("vaggelhs") || msg.content.toLowerCase().includes("psixas")) {
            msg.reply("Ftiaxnei psomia ston Poro:( <:mixaskalhmera:928683390977339442>");
            call = false;
        }

        if (msg.content.toLowerCase().includes("mpartis")) {
            msg.reply("O dhmiourgos mou");
            call = false;
        }

        if (msg.content.toLowerCase().includes("agapiou")) {
            msg.channel.send("<:dagkoseme:925439555748896768>");
            call = false;
            
        }
    }
});




client.login(process.env.DISC_API);
