const Discord = require("discord.js");
const {MessageAttachment} = require("discord.js");
const client = new Discord.Client();
const dotenv = require("dotenv");
dotenv.config();
const giphy = require("giphy-api")(process.env.GIPHY_API);
const WEATHER_API = process.env.OPEN_WEATHER_API;


client.on("ready", () => {
    console.log("Logged in as " + client.user.tag);
});


var call = false;
var gifbool = false;
var gifrep = "";
var authorId = "";
var authorTag = "";
var myBool = true;

const file1 = new MessageAttachment("./images/pn.jpg")
const file2 = new MessageAttachment("./images/giatros.jpg")

//Bot checks if it gets called so it can proccess the next message

client.on("message", msg => {
    if (msg.content === '!helpkokobot') {
        msg.reply("Gia na sou apanthsei to Kokobot prepei na to fwnakseis. Grapse \"Kokobot\" \n Epeita dokimase: \"kkk\", \"Mpakaoukas\", \"Giatros\"");
    }
    if (msg.content === "Kokobot" || msg.content === "kokobot") {
        msg.reply("Lege");
        call = true;
        authorId = msg.author.id;
        authorTag = msg.author.tag;
        console.log(authorTag);
  
    }
});

//If the bot gets called it will proccess the next message for a matched keyword
client.on("message", msg => {
    if ((call === true) && (msg.author.id === authorId)) {
        
        if (msg.content.toLowerCase().includes("kalhmera") || msg.content.toLowerCase().includes("kalimera")) {
            msg.reply("Kalhmera kai se esena");
            call = false;
        }
        
        if (msg.content.toLowerCase() === 'kkk') {
            msg.reply("Auto Kokolis, find your next automobile today.");
            call = false;
        }
        
        if (msg.content.toLowerCase().includes("mpakaoukas")) {
            msg.reply("A re vlaxo");
            call = false;
        }
        
        if ((msg.content.toLowerCase().includes("makos") && msg.content.toLowerCase().includes("pou")) && msg.content.toLowerCase().includes("einai")) {
            msg.reply("Yphretei thn patrida");
            msg.channel.send(file1);
            call = false;
        }

        if (msg.content.toLowerCase().includes("giatros")) {
            msg.reply("Megas Mpakaoukas <:giatros:828371414452273182>");
            msg.channel.send(file2);
            call = false;
        }
        
        if (msg.content.toLowerCase().includes("nionios")) {
            msg.reply("Fevgei gia mparko:(");
            call = false;
        }

        if (msg.content.toLowerCase().includes("kourases") || msg.content.toLowerCase().includes("psofa") || msg.content.toLowerCase().includes("malaka") || msg.content.toLowerCase().includes("malakismeno") || msg.content.toLowerCase().includes("gamhsou") || msg.content.toLowerCase().includes("gamw") || msg.content.toLowerCase().includes("gamiesai") || msg.content.toLowerCase().includes("mouni") || msg.content.toLowerCase().includes("pousth"))  {
            msg.reply("Se afton ton server sevomaste o enas ton allon, se parakalw symorfwsou, eidallws tha fas ban");
            call = false;
        }

        if (msg.content.toLowerCase().includes("mixas") || msg.content.toLowerCase().includes("louris") || msg.content.toLowerCase().includes("lourhs") || msg.content.toLowerCase().includes("vaggelis") || msg.content.toLowerCase().includes("vaggelhs") || msg.content.toLowerCase().includes("psixas")) {
            msg.reply("Paei Kina:( <:mixaskalhmera:928683390977339442>");
            call = false;
        }

        if (msg.content.toLowerCase().includes("mpartis")) {
            msg.reply("My creator");
            call = false;
        }

        if (msg.content.toLowerCase().includes("agapiou")) {
            msg.channel.send("<:dagkoseme:925439555748896768>");
            call = false;
            
        }

        // time       
        if (msg.content.toLowerCase().includes("ti wra einai")) {
            let ts = new Date();
            let hours = ts.getHours;
            let minutes;
            if (ts.getMinutes() <= 9) {
                minutes = "0" + ts.getMinutes();
            } else {
                minutes = ts.getMinutes();
            }
            msg.reply(hours + ":" + minutes);
            call = false;
        }

        // gif 
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

        if (msg.content.toLowerCase().includes("kairos")) {
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=37.963372112430754&lon=23.49497107391491&appid=${WEATHER_API}&units=metric`;

            fetch(url)
                .then(response => {
                    if (!response.ok) throw new Error("Request failed");
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    let temp = data.main.temp;
                    let desc = data.weather[0].description;
                    let humidity = data.main.humidity;

                    msg.reply(`Exei ${temp} vathmous, ${desc} kai ${humidity}% ugrasia.`);
                })
                .catch(err => {
                    console.error("Error:", err);
                    msg.reply("Kati pige strava me ton kairo 😔");
                });

            call = false;
        }

    }
});




client.login(process.env.DISC_API);


