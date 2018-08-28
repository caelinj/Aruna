const Command = require('../structures/Command');

const { MessageEmbed } = require('discord.js');

module.exports = class PingCommand extends Command {
    constructor() {
        super({
            name: 'ping',
            description: 'Pings the Discord API and checks websocket/message latency to make sure everything is running smoothly.',
            aliases: [],
            usage: ['ping'],
            category: 'General',

            objects: {},

            beforeRun: async(msg, args) => {
                return {};
            },
            
            execute: async(msg, args) => {
                const m = await msg.channel.send('Ping?');
                const latency = Math.round(m.createdTimestamp - msg.createdTimestamp);

                const PingEmbed = new MessageEmbed()

                .setDescription(`Pong! 🏓`)

                .addField('Websocket', `${Math.round(client.ping)}ms`, true)
                .addField('Latency', `${latency}ms`, true)

                .setFooter(`Current bot health is ${latency < 250 ? 'perfect [0/3]' : latency < 500 ? 'okay [1/3]' : latency > 1000 ? 'lookin\' bad, possible outage [3/3]' : 'not too good [2/3]'}`)
                
                m.edit({ embed: PingEmbed });
            },
        })
    }
}