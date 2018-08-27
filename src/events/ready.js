const { activityChangeRate, activities } = require('../config');

const changeActivity = async (activities) => {
    const [name, type] = activities[Math.floor(Math.random() * activities.length)];
    client.user.setActivity(`${name}`, { type: type });
}

module.exports = (client) => {
    console.log(`Arura v${require('../../package.json').version} has started successfully! Logged in as ${client.user.tag} [${client.user.id}], on ${client.guilds.size} guild${client.guilds.size > 1 ? 's' : ''}.`);

    changeActivity(activities);
    if (activityChangeRate <= 29) console.warn(`Warning: Activity changing is disabled due to the minimum change rate (30 seconds) being exceeded`)
    else client.setInterval(() => changeActivity(activities), activityChangeRate * 1000);
}