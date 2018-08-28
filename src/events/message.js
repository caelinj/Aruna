const prefixes = require('../config.json').prefixes;

module.exports = async (client, msg) => {
    prefixes[prefixes.indexOf(prefixes.find(p => p === '<@{client-id}> ') || 1)].replace(/{client-id}/g, client.user.id);
    const prefix = prefixes.find(pre => msg.content.startsWith(pre));
    
    if (!prefix || msg.author.bot || !msg.guild) return;

    const args = msg.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName) || client.commands.find(c => c.aliases && c.aliases.includes(commandName));
    if (!command) return;

    command.beforeRun(msg, args).then((resolves) => {
        command.execute(msg, args).catch(err => {   
            msg.channel.send(err, { code: 'js' });
            console.error(err);
        });
    }).catch(err => {
        msg.channel.send(err, { code: 'js' });
        console.error(err);
    });
}