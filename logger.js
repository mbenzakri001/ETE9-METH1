import * as fs from "fs";

const fileName = "log.txt";

const logger = { // object
    info(content) {fs.appendFileSync(fileName, `${content}\n`, "utf8");}
}

logger.info("Hello World!");
logger.info("This is a log message.");
