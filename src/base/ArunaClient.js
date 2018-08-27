const { Client } = require('discord.js');

module.exports = class ArunaClient extends Client {
    constructor(options) {
        super(options.ClientOptions);

        if (options.connect) {
            this.login(options.token);
        }
    }

    scanDir(cmdDir, evntDir) {

    }

    setLocale(locale) {

    }
}