const Command = require("../structures/Command");

module.exports = class AboutCommand extends Command {
    constructor() {
        super({
            name: 'about',
            description: 'Retrieves various information and statistics about Aruna.',
            aliases: ['info', 'botinfo'],
            usage: [
                'about'
            ],
            category: 'Utility',
            
            objects: {},

            beforeRun: async(msg, args) => {
                return {};
            },

            execute: async(msg, args) => {
                const { MessageEmbed } = require("discord.js")

                const AboutEmbed = new MessageEmbed()
                
                .setAuthor(`About ${client.user.username}`, client.user.displayAvatarURL({ format: 'png', size: 512 }))
                
                .addField('Made by', `[caelin#3152](https://github.com/caelinj)`, true)
                .addField('Servers', client.guilds.size, true)
                .addField('Version', `v${require('../../package.json').version}`, true)
                .addField('Total commands', `${client.commands.size} command${client.commands.size > 1 ? 's' : ''}`, true)
                .addField('Node.js version', process.version, true)
                .addField('V8 Version', process.versions.v8.substr(0, 10), true)
                .addField('Memory usage', `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}mb`, true)
                .addField('Latest commit', '', true)
                .addField('Uptime', '', true)
                .addField('Last startup took', '', true)

                return msg.channel.send({ embed: AboutEmbed });
            },
        })
    }
}
