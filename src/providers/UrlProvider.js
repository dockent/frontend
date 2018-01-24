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
}