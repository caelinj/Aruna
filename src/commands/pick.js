const Command = require('../structures/Command');

const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min) ) + min;
}

module.exports = class PickCommand extends Command {
    constructor() {
        super({
            name: 'pick',
            description: 'Randomly pick an item from a provided list of 2 or more items.',
            aliases: [],
            usage: [
                'pick discord, skype',
                'pick hide and seek, an actual game, memes'
            ],
            category: 'Fun',

            objects: {},

            beforeRun: async (msg, args) => {
                return {};
            },
            
            execute: async (msg, args) => {
                const items = args.join(' ').split(', ');
        
                if (items.length < 2) return msg.channel.send(`You need to give me at least 2 items to pick from, spilt with a comma. (such as \`discord, skype\`)`);

                const item = items[getRndInteger(1, items.length + 1) - 1];

                msg.channel.send(`Out of ${items.length} items, I pick ${item} 🗃`);
            },
        })
    }
}