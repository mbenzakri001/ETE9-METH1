import fs from "node:fs";

const fileName = "log.txt";
export const fileSystem = {
    writeToFile(content) {
        fs.appendFileSync(fileName, `${content}\n`, "utf8");
    }
};

