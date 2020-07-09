const express = require("express")
const app = express()

var http = require('http').createServer(app);
const io = require('socket.io')(http);

const routes = require("./routes")
const path = require("path")
const port = 4000

app.set("view engine", "ejs")
app.use(express.static("static"))
// console.log(path.join(__dirname, "./static"));
app.use("/", routes())

io.on('connection', function (socket) {
    socket.on("message", (data)=>{
        console.log(123);
        console.log(data);
    })

})


http.listen(port, ()=>{
    console.log("listening prot " + port);

})
