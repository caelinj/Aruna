const Command = require('../structures/Command.js');

const prefixes = require('../config.json').prefixes;

module.exports = class HelpCommand extends Command {
    constructor() {
        super({
            name: 'help',
            description: 'Provides a quick reference list of commands. A command name or category can be passed optionally to get information specifically for it.',
            aliases: ['h', 'halp', 'helpme'],
            usage: [
                'help',
                'help ping',
                'help General'
            ],
            category: 'General',

            objects: {
                helpType: 0,
            },
    
            beforeRun: async function (msg, args) {
                if (!args.length) this.objects.helpType = 0
                else this.objects.helpType = 1;

                return {};
            },
            execute: async function (msg, args) {
                const { MessageEmbed } = require('discord.js');
                if (this.objects.helpType === 0) {
                    const HelpAllEmbed = new MessageEmbed()

                    .setAuthor(client.user.username, client.user.displayAvatarURL({ format: 'png', size: 512 }))
                    .setTitle(`Here are all my commands!`)
                    .setURL(`https://github.com/caelinj/Aruna`)
                    .setDescription(`You can prefix your message with \`${prefixes[0]}\` or \`@${client.user.username}\` to use any of the commands listed here. Adding a command or category name on the end of this command will provide information/help for that command or category specifically.`)

                    .addField(`General`, client.commands.filter(c => c.category === 'General').map(cmd => `\`${cmd.name}\``).join(' '))

                    .addField(`Links`, `.`)

                    .setFooter(`Help requested by ${msg.author.tag}`, msg.author.displayAvatarURL({ format: 'png', size: 512 }))

                    return msg.channel.send({ embed: HelpAllEmbed });
                } else if (this.objects.helpType === 1) {
                    return msg.channel.send(`hi`);
                } else return undefined;
            },
        });
    }
}