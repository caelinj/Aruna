module.exports = (client) => {
    console.log(`Arura v${require('../../package.json').version} has started successfully! Logged in as ${client.user.tag} [${client.user.id}], on ${client.guilds.size} guild${client.guilds.size > 1 ? 's' : ''}.`);
}