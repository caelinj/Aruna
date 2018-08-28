const { activityChangeRate, activities } = require('../config');

const changeActivity = async (activities) => {
    let [name, type] = activities[Math.floor(Math.random() * activities.length)];
    let activityName = name.replace(/{client-name}/g, client.user.username).replace(/{servers}/g, `${client.guilds.size} server${client.guilds.size > 1 ? 's' : ''}`);
    client.user.setActivity(`${activityName}`, { type: type });
}

module.exports = (client) => {
    console.log(`Aruna v${require('../../package.json').version} has started successfully! Logged in as ${client.user.tag} [${client.user.id}], on ${client.guilds.size} guild${client.guilds.size > 1 ? 's' : ''}.`);

    changeActivity(activities);
    if (activityChangeRate <= 29) console.warn(`Warning: Activity changing is disabled due to the minimum change rate (30 seconds) being exceeded`)
    else client.setInterval(() => changeActivity(activities), activityChangeRate * 1000);
}