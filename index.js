const express = require("express");
const app = express();
 
app.listen(() => console.log("hi"));
 
app.use('/ping', (req, res) => {
  res.send(new Date());
});

const Discord = require('discord.js');
const client = new Discord.Client();
const cmd = require("node-cmd");
const ms = require("ms");
const fs = require('fs');
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const simpleytapi = require('simple-youtube-api')
const util = require("util")
const gif = require("gif-search");
const jimp = require("jimp");
const guild = require('guild');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const pretty = require("pretty-ms");
const moment = require('moment');
const request = require('request');
const dateFormat = require('dateformat');

////////////



const prefix = "$"
const developers = "696483121977098262"


///bot حاله

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(client.guilds.map(c => `${c.name} : ${c.me.hasPermission(8)}`));
  client.user.setStatus("online");

  client.user.setActivity(`NitroHub`, { type: "PLAYING" });
});



client.on('message', msg => {
    if (msg.author.bot) return;
    if (msg.content.startsWith("خط")) {
      msg.delete();
    msg.channel.send("https://cdn.discordapp.com/attachments/921093558793027652/922958767480504320/795728208095871009.gif");
    }
    });//All rights reserved to Stekar


    
client.on('message', prof=>
{
    if(prof.author.bot)return;
    if(prof.channel.id === '923689141215043644') prof.react('923670137096241232')    
});

client.on('message', prof=>
{
    if(prof.author.bot)return;
    if(prof.channel.id === '923689141215043644') prof.channel.send("https://cdn.discordapp.com/attachments/921093558793027652/922958767480504320/795728208095871009.gif");
});



client.on("message" , message => {
if(message.content.type === "dm") return;
if (message.author.bot) return;
if (!message.channel.guild) return;
    var args = message.content.split(" ");
    var command = args[0];
    let number = args[1];
    if(command == prefix + "tax"){
        if(!number){
            return message.reply("`"+command+" <number>`");
        }
                       let fnum = Math.floor(number);
  if(number.endsWith("k")){

  var newnum = number.replace('k','');
 fnum = Math.floor(newnum*1000)}

 if(number.endsWith("K")){

  var newnum = number.replace('K','');
 fnum = Math.floor(newnum*1000)}

 if(number.endsWith("m")){

  var newnum = number.replace('m','');
 fnum = Math.floor(newnum*1000000)}

   if(fnum < 0 || fnum == NaN || !fnum) return message.reply(`**The value must be a number**`)
        
        var taxval = Math.floor(fnum * 20/ 19 + 1);
  let wse6 = Math.floor(taxval * 20 / 19 + 1)
let taxembed = new Discord.MessageEmbed()
.setColor("BLUE")
.setTitle('معلومات عن الضرائب والوسيط :')
.addField("ضريبة المشترى : " ,`» \`${taxval}\``)
.setTitle('Nitro Hub Tax  :')
message.channel.send(taxembed)

}
});


    client.login("OTExNzA3MzM2MTM2MDk3ODQ0.YZlTnw.j7ua_eEQg-Oc1Lc-pRx5qJZEgrk");

require('./server.js')()
