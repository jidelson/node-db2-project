const express = require("express");

const db = require("./dbConfig.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
    res.send(`
    <h2>Welcome to db 2!!!</h2>
    `)
  });

module.exports = server;
