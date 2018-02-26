/**
 * @param {int} size
 * @returns {string}
 */
export function formatBytes(size) {
    let i = -1;
    let byteUnits = [' kB', ' MB', ' GB', ' TB', 'PB', 'EB', 'ZB', 'YB'];
    do {
        size = size / 1024;
        i++;
    } while (size > 1024);

    return Math.max(size, 0.1).toFixed(1) + byteUnits[i];
}

/**
 * @param {int} timestamp
 * @returns {string}
 */
export function formatDate(timestamp) {
    let date = new Date();
    date.setTime(timestamp * 1000);
    return date.toUTCString();
}