import { test } from "node:test";
import assert from "node:assert/strict";
import { logger } from "./logger.js";
import { fileSystem } from "./file_writer.js";

test("logger transmet le message au file writer", () => {
  let messageRecu;
  const ancienneFonction = fileSystem.writeToFile;

  fileSystem.writeToFile = (message) => { // on remplace la fonction writeToFile par une fonction qui stocke le message reçu
    messageRecu = message;
  };

  logger.info("Message de test");
  fileSystem.writeToFile = ancienneFonction; // on remet la fonction writeToFile originale

  assert.equal(messageRecu, "Message de test");
});