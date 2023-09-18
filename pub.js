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

app.get("/publish", async (req, res) => {
  const id = Math.floor(Math.random() * 10);

  const data = {
    id,
    message: `message- ${id}`,
  };
  console.log("publish data from pub.js",data);
  await publisher.publish("message", JSON.stringify(data));

  res.send({
    message: "Data published",
    data
  });
});

app.listen(3001, () => {
  console.log("publisher start on 30001");
});
