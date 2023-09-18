### installation redis >>

explore the site `https://github.com/microsoftarchive/redis/releases`

**download redis msi**

**install from local. dont forget to select env file when install**

#### open your cmd 

            redis-cli (for version)

            ping

            set name sarwar
            get name

####  create a folder

            npm init -y
            npm i redis express

### create a server ::

in pub.js >>>

        const express = require("express");
        import { Color } from "colors";

        const app = express()


        app.listen(3001,()=>{
            console.log("publisher start on 30001");
        })

##### start the server  

node pub.js 


#### published redis ::

in pub.js>>>


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
    await publisher.publish("message", JSON.stringify(data));

    res.send({
        message:"Data published"
    })
    });

    app.listen(3001, () => {
    console.log("publisher start on 30001");
    });

