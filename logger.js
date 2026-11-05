import { fileSystem } from "./file_writer.js";
import { timestampAdder } from "./timestamp_adder.js";

export const logger = {
    info(content) {
        const messageWithTimestamp = timestampAdder.addTimestamp(content);
        console.log(messageWithTimestamp);
        fileSystem.writeToFile(messageWithTimestamp);
    }
};
