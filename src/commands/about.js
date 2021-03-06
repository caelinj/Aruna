const Command = require('../structures/Command');

const { MessageEmbed } = require('discord.js');
const { get } = require('snekfetch');
const humanize = require('humanize-duration');

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

            beforeRun: async (msg, args) => {
                return {};
            },

            execute: async (msg, args) => {
                const { body: latestCommit } = await get('https://api.github.com/repos/caelinj/Aruna/commits');

                const AboutEmbed = new MessageEmbed()
                
                .setAuthor(`About ${client.user.username}`, client.user.displayAvatarURL({ format: 'png', size: 512 }))
                
                .setDescription(`Introducing Aruna: A Discord bot made for everyone, helping your server with lots of features, such as fun commands, music and information/utility commands!`)

                .addField('Made by', `[caelin#3152](https://github.com/caelinj)`, true)
                .addField('Latest commit', `[\`${latestCommit[0].sha.substr(0, 7)}\`](${latestCommit[0].html_url})`, true)
                .addField('Uptime', humanize(client.uptime, { largest: 1, round: true }), true)

                .addField('Servers', `${client.guilds.size} server${client.guilds.size > 1 ? 's' : ''}`, true)
                .addField('Users', `${client.guilds.map(g => g.memberCount).reduce((f, l) => f + l)} user${client.guilds.map(g => g.memberCount).reduce((f, l) => f + l) > 1 ? 's' : ''}`, true)
                .addField('Channels', `${client.channels.size} channel${client.channels.size > 1 ? 's' : ''}`, true)

                .addField('Memory usage', `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}mb`, true)
                .addField('Total commands', `${client.commands.size} command${client.commands.size > 1 ? 's' : ''}`, true)
                .addField('Total dependencies', `${Object.keys(require('../../package.json').dependencies).length} dependencies`, true)

                .addField('Package version', `v${require('../../package.json').version}`, true)
                .addField('Node.js version', process.version, true)
                .addField('v8 Version', process.versions.v8.substr(0, 10), true)

                return msg.channel.send({ embed: AboutEmbed });
            },
        })
    }
}
