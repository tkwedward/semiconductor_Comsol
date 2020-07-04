const express = require("express")
const app = express()
const routes = require("./routes")
const path = require("path")
const port = 4000



app.set("view engine", "ejs")
app.use(express.static("static"))
// console.log(path.join(__dirname, "./static"));
app.use("/", routes())


app.listen(port, ()=>{
    console.log("listening prot " + port);

})
