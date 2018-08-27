const { Client } = require('discord.js');
const fs = require('fs');

module.exports = class ArunaClient extends Client {
    constructor(options) {
        super(options.ClientOptions);

        this.defaultLocale = 'en-US';
        this.locale = null;

        if (options.connect) {
            this.login(options.token);
        }
    }

    scanDir(cmdDir, evntDir) {
        fs.readdirSync(cmdDir).forEach(async (cmd) => {
            if (!cmd.endsWith('.js')) return;
        
            try {
                const file = require('.' + cmdDir + '/' + cmd);
                client.commands.set(file.name, file);
            }
            catch (err) {
                console.error(err);
            }
        });
    
        fs.readdirSync(evntDir).forEach(async (ev) => {
            if (!ev.endsWith('.js')) return;
        
            try {
                const file = require('.' + evntDir + `/${ev.split('.')[0]}`); 
                client.on(ev.split('.')[0], file.bind(null, client));
                
                delete require.cache[require.resolve('.' + evntDir + `/${ev.split('.')[0]}`)];
            }
            catch (err) {
                console.error(err);
            }
        });
    }

    async setLocale(locale) {
        try {
            let loadedLocale = require(`../locales/${locale}.js`);
            this.locale = loadedLocale || null;
            return undefined;
        } catch(err) {
            this.locale = require(`../locales/${this.defaultLocale}.js`) || null;
            return err;
        }
    }
}