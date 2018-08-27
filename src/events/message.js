const prefixes = require('../config.json').prefixes;

module.exports = async (client, msg) => {
    const prefix = prefixes.find(pre => msg.content.startsWith(pre.replace(/{client-id}/g, client.user.id)));
    
    if (!prefix || msg.author.bot || !msg.guild) return;

    const args = msg.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName) || client.commands.find(c => c.aliases && c.aliases.includes(commandName));
    if (!command) return;

    command.beforeRun(msg, args).then((resolves) => {
        command.run(msg, args).catch(err => {
            m.react('❌');
    
            m.channel.send(err, { code: 'js' });
            console.error(err);
        });
    }).catch(err => {
        m.react('❌');

        m.channel.send(err, { code: 'js' });
        console.error(err);
    });
}