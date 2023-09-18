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