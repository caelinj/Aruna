module.exports = class Command {
    constructor(command) {
        this.name = command.name || null;
        this.description = command.description || null;
        this.aliases = Array.from(command.aliases) || [];
        this.usage = Array.from(command.usage) || [];
        this.category = command.category || 'General';

        this.objects = {};

        this.beforeRun = command.beforeRun || null;
        this.execute = command.execute || null;
    }
}