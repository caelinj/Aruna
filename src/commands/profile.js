const Command = require('../structures/Command');

const { MessageAttachment } = require('discord.js');
const { get } = require('snekfetch');
const { Canvas } = require('canvas-constructor');

module.exports = class PingCommand extends Command {
    constructor() {
        super({
            name: 'profile',
            description: '*No description.*',
            aliases: [],
            usage: [],
            category: 'Utility',

            objects: {},

            beforeRun: async (msg, args) => {
                return {};
            },
            
            execute: async (msg, args) => {
                const { buffer: headerImg } = await get('https://i.imgur.com/XDUn4wq.jpg');
                const { buffer: userAvatar } = await get(msg.author.displayAvatarURL({ format: 'png', size: 256 }));
                const profile = new Canvas(920, 1340)

                // main bg
                .setColor('#ffffff')
                .addRect(0,0,920,1340)

                // banner
                .addImage(headerImg, 0, 0, 920, 370, { restore: true })

                // banner border
                .setColor('#1D1F23')
                .addRect(0,371,920,25)

                // bottom card
                .setColor('#94AFFE')
                .addRect(0,1175,920,1340)
                .setColor('#ffffff')
                .setTextFont('62px Arial')
                .addText(`Aruna`, 166, 1280)
                .toBuffer();

                return msg.channel.send(new MessageAttachment(profile, 'profile.png'));
            },
        })
    }
}