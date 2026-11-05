import { fileSystem } from "./file_writer.js";

export const logger = {
    info(content) {
        const timestamp = new Date().toISOString();
        const messageWithTimestamp = `${timestamp} : ${content}`;
        console.log(messageWithTimestamp);
        fileSystem.writeToFile(messageWithTimestamp);
    }
};
