import { fileSystem } from "./file_writer.js";

export const logger = {
    info(content) {
        console.log(content);
        const timestamp = new Date().toISOString();
        fileSystem.writeToFile(`${timestamp} : ${content}`);
    }
};
