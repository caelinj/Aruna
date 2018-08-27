module.exports = class Command {
    constructor(command) {
        this.name = command.name || null;
        this.description = command.description || null;
        this.usage = Array.from(command.usage) || [];

        this.objects = {};

        this.beforeRun = command.beforeRun || null;
        this.execute = command.execute || null;
    }
}