const express = require("express");

const redis = require("redis");

const app = express();

let publisher = redis.createClient({
  url: "redis://localhost:6379",
});

publisher.on("error", (err) => console.log("Redis error"));
publisher.on("connect", (err) => console.log("Redis connected"));

const connect = async () => {
  await publisher.connect();
};

connect();

app.get("/", (req, res) => {
  res.send({
    message: "Publisher active on 3001",
  });
});

app.listen(3001, () => {
  console.log("publisher start on 30001");
});
