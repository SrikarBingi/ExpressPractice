const express = require("express");

const fs = require("fs");
const path = require("path");

const app = express();

app.get("/files", (req, res) => {
  fs.readdir(path.join(__dirname, "./files"), (err, files) => {
    if (err) {
      return res.status(500).json({
        msg: "Failed to retrieve files",
      });
    }
    res.json(files);
  });
});

app.get("/files/:fileName", (req, res) => {
  const name = path.join(__dirname, "./files/", req.params.fileName);

  fs.readFile(name, "utf-8", (err, data) => {
    if (err) {
      return res.status(404).send("File not found");
    }
    res.send(data);
  });
});

app.all("*", (req, res) => {
  res.status(404).send("Route not found");
});

app.listen(3003);
