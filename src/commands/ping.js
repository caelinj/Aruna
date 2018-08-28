const Command = require("../structures/Command");

module.exports = class PingCommand extends Command {
    constructor() {
        super({
            name: 'ping',
            description: 'Pings the Discord API and checks message latency to make sure everything is riding along smoothly.',
            aliases: [],
            usage: ['ping'],
            category: "Bot Health & Statistics",
            objects: {},

            beforeRun: async(msg, args) => {

            },
            
            execute: async(msg, args) => {
                const { MessageEmbed } = require("discord.js");

                const pingMsg = await msg.channel.send("🏓 Ping!");

                const ping = Math.round(pingMsg.createdTimestamp - msg.createdTimestamp);

                const PingEmbed = new MessageEmbed()
                    .setColor(0x8b0000)
                    .setFooter(`Ping requested by ${msg.author.tag}`, msg.author.displayAvatarURL({ format: 'png', size: 512 }))
                    .setAuthor(client.user.username, client.user.displayAvatarURL({ format: 'png', size: 512 }))
                    .addField('Message Latency', `\`${ping}ms\``, true)
                    .addField('Heartbeat', `\`${Math.round(client.ping)}ms\``, true)
                
                pingMsg.edit(PingEmbed);

            }
        })
    }
}