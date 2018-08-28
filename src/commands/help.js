const Command = require('../structures/Command.js');

const { MessageEmbed } = require('discord.js');

const prefixes = require('../config.json').prefixes;
const emojis = require('../static/json/emojiMap.json');

const categories = {
    general: {
        name: 'General',
        description: 'General or non-sorted commands. Usually meta-related or basic, includes commands such as `help` and `ping`.',
    },
    utility: {
        name: 'Utility',
        description: 'Commands that serve a utility purpose, such as information, searching, and related.',
    },
}

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
    
            beforeRun: async (msg, args) => {
                if (!args.length) this.objects.helpType = 0
                else this.objects.helpType = 1;

                return {};
            },
            execute: async (msg, args) => {
                if (this.objects.helpType === 0) {
                    const HelpAllEmbed = new MessageEmbed()

                    .setAuthor(client.user.username, client.user.displayAvatarURL({ format: 'png', size: 512 }))
                    .setTitle(`Here are all my commands!`)
                    .setURL(`https://github.com/caelinj/Aruna`)
                    .setDescription(`You can prefix your message with \`${prefixes[0]}\` or \`@${client.user.username}\` to use any of the commands listed here. ` +
                                    `Adding a command or category name on the end of this command will provide information/help for that command or category specifically.`)
                    .addField(`General`, client.commands.filter(c => c.category === 'General').map(cmd => `\`${cmd.name}\``).join(' '))
                    .addField(`Utility`, client.commands.filter(c => c.category === 'Utility').map(cmd => `\`${cmd.name}\``).join(' '))
                    .addField(`Links`, `${emojis.github === "" ? '🔗' : emojis.github} GitHub \\➡ https://github.com/caelinj/Aruna`)
                    .setFooter(`Help requested by ${msg.author.tag}`, msg.author.displayAvatarURL({ format: 'png', size: 512 }))

                    return msg.channel.send({ embed: HelpAllEmbed });
                } else if (this.objects.helpType === 1) {
                    if (categories[args.join(' ').toLowerCase()]) {
                        let category = categories[args.join(' ').toLowerCase()];
                        if (!category) return;
                        let totalCmds = client.commands.filter(c => c.category === category.name).size;

                        const HelpCatEmbed = new MessageEmbed()

                        .setAuthor(client.user.username, client.user.displayAvatarURL({ format: 'png', size: 512 }))
                        .setTitle(`Help for category \`${category.name}\`:`)
                        .setDescription(category.description)
                        .addField(`Total commands`, `${totalCmds} command${totalCmds > 1 ? 's' : ''}`, true)
                        .setFooter(`Help requested by ${msg.author.tag}`, msg.author.displayAvatarURL({ format: 'png', size: 512 }))

                        return msg.channel.send({ embed: HelpCatEmbed });
                    } else {
                        let command = client.commands.get(args[0]) || client.commands.find(c => c.aliases && c.aliases.includes(args[0]));
                        if (!command) return;

                        const HelpCmdEmbed = new MessageEmbed()

                        .setAuthor(client.user.username, client.user.displayAvatarURL({ format: 'png', size: 512 }))
                        .setTitle(`Help for command \`${command.name}\`:`)
                        .setDescription(command.description)
                        .addField(`Usage`, command.usage.length === 0 ? 'No usage examples.' : command.usage.map(u => `\`${prefixes[0]}${u}\``).join('\n'), true)
                        .addField(`Aliases`, command.aliases.length === 0 ? 'No aliases.' : command.aliases.map(a => `\`${a}\``).join(', '), true)
                        .addField(`Category`, command.category || 'Unknown?', true)
                        .setFooter(`Help requested by ${msg.author.tag}`, msg.author.displayAvatarURL({ format: 'png', size: 512 }))

                        return msg.channel.send({ embed: HelpCmdEmbed });
                    }
                } else return undefined;
            },
        });
    }
}
