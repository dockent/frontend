const baseUrl = '';

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

    /**
     * @returns {string}
     */
    static get remove() {
        return `${baseUrl}/image/remove`;
    }

    /**
     * @returns {string}
     */
    static get forceRemove() {
        return `${baseUrl}/image/forceRemove`;
    }

    /**
     * @returns {string}
     */
    static get buildByDockerfilePath() {
        return `${baseUrl}/builder/buildByDockerfilePath`;
    }

    /**
     * @returns {string}
     */
    static get buildByDockerfileBody() {
        return `${baseUrl}/builder/buildByDockerfileBody`;
    }
}

export class Builder {
    /**
     * @returns {string}
     */
    static get url() {
        return `${baseUrl}/builder`;
    }
}

export class Network {
    /**
     * @returns {string}
     */
    static get list() {
        return `${baseUrl}/network`;
    }

    /**
     * @returns {string}
     */
    static get remove() {
        return `${baseUrl}/network/remove`;
    }

    /**
     * @param {int} id
     * @returns {string}
     */
    static inspect(id) {
        return `${baseUrl}/network/view/${id}`;
    }

    /**
     * @returns {string}
     */
    static get create() {
        return `${baseUrl}/network/create`;
    }
}

export class Settings {
    /**
     * @returns {string}
     */
    static get url() {
        return `${baseUrl}/settings`;
    }
}

export class Application {
    /**
     * @returns {string}
     */
    static get applicationConfig() {
        return `${baseUrl}/index/applicationConfig`;
    }
}

export class Notifications {
    /**
     * @returns {string}
     */
    static get list() {
        return `${baseUrl}/notifications`;
    }

    /**
     * @returns {string}
     */
    static get markAsUnread() {
        return `${baseUrl}/notifications/markAsUnread`;
    }

    /**
     * @returns {string}
     */
    static get delete() {
        return `${baseUrl}/notifications/delete`;
    }
}