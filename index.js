const express = require("express")
const app = express()
const port = process.env.PORT || 4000






app.get("/", (req,res,next)=>{

        res.send("Hello from the baseRoute")



})



app.listen(port, () => console.log(`App runs on port ${port}`))