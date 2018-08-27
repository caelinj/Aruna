const Command = require('../structures/Command.js');

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

            objects: {
                helpType: null,
            },
    
            beforeRun: async function (msg, args) {
                if (!args) this.objects.helpType = 0
                else this.objects.helpType = 1;

                return {};
            },
            execute: async function (msg, args) {
                const { MessageEmbed } = require('discord.js');

                const HelpEmbed = new MessageEmbed()

                .setAuthor(client.user.username, client.user.displayAvatarURL({ format: 'png', size: 512 }))

                .setFooter(`Help requested by ${msg.author.tag}`)

                return msg.channel.send({ embed: HelpEmbed });
            },
        });
    }
}