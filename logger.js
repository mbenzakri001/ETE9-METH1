import { fileSystem } from "./file_writer.js";

export const logger = {
    info(content) {
        console.log(content);
        fileSystem.writeToFile(content);
    }
};
