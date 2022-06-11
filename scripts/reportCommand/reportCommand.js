/*
Report command with Discord.js by Floppys
*/
const Discord = getModule("discord.js") // Get the discord.js module
const bot = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"]}) // What it does
const channel = "" // Channel where the bot sends the message
const token = "" // Your bot token

Game.command("report", (player, args) => {
  if(args === "@everyone" || " " || "bldn") {
    player.prompt("Report was not sent!")
  } else {
    bot.channels.fetch(channel)
    .then(channel => channel.send(`<@!discorduserid> :newspaper: New report received! | Reporter: **${player.username}** | User ID: **${player.userId}** | Description: **${args}**`)) /* replace discorduserid with yours */
  }
})

bot.login(token)
bot.on('error', console.error)
