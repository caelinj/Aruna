module.exports = class Util {

    /**
     * Duration method
     * 
     * Used to get the duration in a human-readable format.
     * 
     * @param {*} ms total time in milliseconds
     */
    static duration(ms) {
		const sec = Math.floor((ms / 1000) % 60).toString();
		const min = Math.floor((ms / (1000 * 60)) % 60).toString();
		const hrs = Math.floor(ms / (1000 * 60 * 60)).toString();
		return `${hrs.padStart(2, '0')}:${min.padStart(2, '0')}:${sec.padStart(2, '0')}`;
    }
}
