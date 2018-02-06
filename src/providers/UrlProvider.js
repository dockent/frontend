const baseUrl = 'http://localhost:8080';

export class Dashboard {
    static get url() {
        return `${baseUrl}/dashboard`;
    }
}

export class Containers {
    static get list() {
        return `${baseUrl}/container`;
    }

    static get start() {
        return `${baseUrl}/container/start`;
    }

    static get restart() {
        return `${baseUrl}/container/restart`;
    }

    static get stop() {
        return `${baseUrl}/container/stop`;
    }

    static get remove() {
        return `${baseUrl}/container/remove`;
    }

    static inspect(id) {
        return `${baseUrl}/container/view/${id}`;
    }
}