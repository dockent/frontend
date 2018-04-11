export default class Storage {
    /**
     * @param {string} key
     * @returns {*}
     */
    static get(key) {
        if (this.storage === undefined) {
            this.storage = {};
        }
        if (key in this.storage) {
            return this.storage[key];
        }
        return undefined;
    }

    /**
     * @param {string} key
     * @param {*} value
     */
    static set(key, value) {
        if (this.storage === undefined) {
            this.storage = {};
        }
        this.storage[key] = value;
    }
}