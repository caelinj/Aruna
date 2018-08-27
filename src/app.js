const ArunaClient = require('./base/ArunaClient');
const Client = new ArunaClient({
    ClientOptions: {},
    token: require('./config.json').token,
    connect: true,
});

Client.setLocale('en-US');
Client.scanDir('./commands', './events');
global.client = Client;