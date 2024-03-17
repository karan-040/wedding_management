import dotenv from "dotenv"
import db from "./db/db.connect.js"
import app from "./app.js"
import version from "./constants.js"
dotenv.config({path:"./.env"})

const port = process.env.PORT || 3000

db.connect()
.then(()=>{
    console.log(`connected to the database: ${db.database}`)
    app.on("error",()=>{
        console.log("server is not able to communicate with the database");
    })

    app.listen(port,()=>{
        console.log(`server started running on http://localhost:${port}${version}/homepage`)
    })
})
.catch((error)=>{
    console.log("could not connect to the database ",error)
})