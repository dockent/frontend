const baseUrl = 'http://localhost:8080';

export class Dashboard {
    /**
     * @returns {string}
     */
    static get url() {
        return `${baseUrl}/dashboard`;
    }
}

export class Containers {
    /**
     * @returns {string}
     */
    static get list() {
        return `${baseUrl}/container`;
    }

    /**
     * @returns {string}
     */
    static get start() {
        return `${baseUrl}/container/start`;
    }

    /**
     * @returns {string}
     */
    static get restart() {
        return `${baseUrl}/container/restart`;
    }

    /**
     * @returns {string}
     */
    static get stop() {
        return `${baseUrl}/container/stop`;
    }

    /**
     * @returns {string}
     */
    static get remove() {
        return `${baseUrl}/container/remove`;
    }

    /**
     * @param {int} id
     * @returns {string}
     */
    static inspect(id) {
        return `${baseUrl}/container/view/${id}`;
    }

    /**
     * @returns {string}
     */
    static get create() {
        return `${baseUrl}/container/create`;
    }
}

export class Images {
    /**
     * @returns {string}
     */
    static get list() {
        return `${baseUrl}/image`;
    }
}