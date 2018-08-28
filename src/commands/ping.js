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

            beforeRun: async (msg, args) => {
                return {};
            },
            
            execute: async (msg, args) => {
                const m = await msg.channel.send('Ping?');
                const latency = Math.round(m.createdTimestamp - msg.createdTimestamp);

                const PingEmbed = new MessageEmbed()

                .setDescription(`Pong! 🏓`)

                .addField('Websocket', `${Math.round(client.ping)}ms`, true)
                .addField('Latency', `${latency}ms`, true)

                .setFooter(`Current bot health is ${latency < 250 ? 'perfect [within 250ms]' : latency < 500 ? 'okay [within 500ms]' : latency > 1000 ? 'lookin\' bad, possible outage [greater than 1000ms]' : 'on the slow side [within 501-999ms]'}`)
                
                m.edit({ embed: PingEmbed });
            },
        })
    }
}