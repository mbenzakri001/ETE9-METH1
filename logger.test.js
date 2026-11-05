import { test } from "node:test";
import assert from "node:assert/strict";
import { logger } from "./logger.js";
import { fileSystem } from "./file_writer.js";

test("logger transmet le message au file writer avec un timestamp", () => {
  let messageRecu;
  const ancienneFonction = fileSystem.writeToFile;

  fileSystem.writeToFile = (message) => { // on remplace la fonction writeToFile par une fonction qui stocke le message reçu
    messageRecu = message;
  };

  logger.info("Message de test avec timestamp");
  fileSystem.writeToFile = ancienneFonction; // on remet la fonction writeToFile originale

  assert.ok(messageRecu.startsWith(new Date().toISOString().slice(0, 10))); // on vérifie que le message commence par le timestamp
})