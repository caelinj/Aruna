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
            },
            execute: async function (msg, args) {
                // code..
            },
        });
    }
}