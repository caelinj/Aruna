const Command = require("../structures/Command");
const child = require("child_process");
const duration = require("../util/utilities").duration;
const version = require("../../package.json").version;

module.exports = class InfoCommand extends Command {
    constructor() {
        super({
            name: "info",
            description: "Retrieves various information about Aruna.",
            aliases: ['about'],
            usage: ["info"],
            category: "General",
            objects: {},

            beforeRun: async(msg, args) => {
                return {};
            },

            execute: async(msg, args) => {
                const { MessageEmbed } = require("discord.js")

                const v8_version = process.versions.v8;
                const length = 10; // set git and v8 length

                const git_rev = child.execSync('git rev-parse HEAD').toString().trim()

                const InfoEmbed = new MessageEmbed()
                    .setColor(0x00AE86)
                    .setAuthor(client.user.username, client.user.displayAvatarURL({ format: 'png', size: 512 }))
                    .addField('❯ Creator', `[caelin#3152](https://github.com/caelinj)`, true)
                    .addField('❯ Servers', client.guilds.size, true)
                    .addField('❯ Version', version, true)
                    .addField('❯ Command Count', client.commands.size, true)
                    .addField('❯ Node Version', process.version, true)
                    .addField('❯ V8 Version', v8_version.substr(0, length), true)
                    .addField('❯ Memory Usage', `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)} MB`, true)
                    .addField("❯ git commit", git_rev.substr(0, length), true)
                    .addField('❯ Uptime', duration(client.uptime), true)
                    .setFooter(`Info requested by ${msg.author.tag}`, msg.author.displayAvatarURL({ format: 'png', size: 512 }))

                return msg.channel.send(InfoEmbed)
            }
        })
    }
}
