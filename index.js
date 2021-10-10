const express = require("express")
const app = express()

app.get("/", function (req, res){
    res.send("Hello Dear, God is good!")
    
    
})

app.listen(3000)