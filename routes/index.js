const express = require("express")
const path = require("path")
const fs = require("fs")
const router = express.Router();
const bodyParser = require('body-parser');


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

module.exports = params =>{
    router.get("/", function(request, response){
        return response.render("pages/index")
    })

    router.get("/card", function(request, response){
        return response.render("pages/cardGame")
    })

    router.get("/semi", (request, response) => {
        response.render("pages/semi.ejs")
    })

    router.get("/jsonFile/:fileName", (request, response)=>{
        let fileName = request.params.fileName + ".json"

        fs.readFile(path.join(__dirname, `../static/semi/data/${fileName}`), 'utf8', (err, json) => {
            let obj = JSON.parse(json);

            response.json(obj);
        });

    })

    router.post("/semiSaveData", (request, response) => {

        let rawData = request.body
        let fileName = rawData["fileName"] + ".json"
        let saveJson = JSON.stringify(rawData)

        fs.writeFileSync(path.join(__dirname, `../static/semi/data/${fileName}`), saveJson, null, 4)// write File
        console.log("success");
        return response
    })

    return router
}
