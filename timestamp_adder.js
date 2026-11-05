export const timestampAdder = {
    addTimestamp(content) {
        const timestamp = new Date().toISOString();
        return `${timestamp} : ${content}`;
    }
};