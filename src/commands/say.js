const Command = require('../structures/Command');

module.exports = class SayCommand extends Command {
    constructor() {
        super({
            name: 'say',
            description: 'Make me repeat whatever you way.',
            aliases: ['echo', 'talk'],
            usage: [
                'say Hello world!'
            ],
            category: 'Fun',

            objects: {},

            beforeRun: async (msg, args) => {
                return {};
            },
            
            execute: async (msg, args) => {
                if (!args.length) return msg.channel.send(`You need to give me something to echo back.`); 
                
                msg.channel.send(args.join(' '));

                if (msg.guild.me.hasPermission('MANAGE_MESSAGES')) {
                    msg.delete().catch(err => console.error(err));
                }
            },
        })
    }
}