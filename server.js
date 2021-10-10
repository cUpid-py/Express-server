const http = require("http")

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Welocme to my home page")
    }
    else if (req.url === "/about") {
        res.end("Welcome to about us page")
    } else {
        res.end("ERROR 404, Page cannot be accessed")
    }
})

server.listen(5000, () => {
    console.log("Server is now listening to port 5000....");
})
