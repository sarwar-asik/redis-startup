const redis = require("redis");

(async () => {
  let subscriber = redis.createClient({
    url: "redis://localhost:6379",
  });

  subscriber.on("error", (err) => console.log("Redis error"));
  subscriber.on("connect", (err) => console.log("Redis connected"));

  await subscriber.connect();

  await subscriber.subscribe('message',(data)=>{
    console.log(data)
  })
})();
