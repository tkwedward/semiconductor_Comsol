class DataManager{
    constructor(basePath, fileNameDict){
        this.dataFrameArray = []
        this.basePath = basePath
        this.fileNameDict = fileNameDict
        this.overallWrapperHtmlObject = document.querySelector(".overallWrapper")

        this.dataWrapperHtmlObject = this.createDataWrapperHtmlObject()
        this.bookmark = new Bookmark(this)

        this.mutationObserver = this.setUpObserver()

        this.observerConfig = {
            "characterData":true,
            "subtree": true,
            "childList": true
        }

        this.overallWrapperHtmlObject.append(this.dataWrapperHtmlObject)
        console.log(this.dataWrapperHtmlObject);
    }

    createDataWrapperHtmlObject(){
        let dataWrapper = document.createElement("div")
        dataWrapper.classList.add("dataWrapper")

        dataWrapper.style.width = "99%"
        return dataWrapper
    }

    addToMonitor(item){
        this.mutationObserver.observe(item, this.observerConfig)
    }

    setUpObserver(){
        let observer = new MutationObserver( function(mutations) { // this is the callback function } )
            let target = mutations[0].target

            let textContainerClass = target.parentElement.classList[0]
            let lineID = target.parentElement.parentElement.id

            let data = {
                "target": target["data"],
                "containerClass": textContainerClass,
                "lineID": lineID
            }

            socket.emit("message", data)
            console.log(data);
        })

        return observer
    }




     downloadFiles(){
         // console.log(this.fileNameDict);
        Object.entries(this.fileNameDict).forEach(p=> {
            let fileName = this.basePath + "/" + p[0]
            let value = p[1]
            if (value==1){
                 this.renderFile(fileName)
            }
        })
    }

    renderFile(fileName){
        let self = this
        let promise = new Promise(function(res, err){
            let xhr = new XMLHttpRequest()
            xhr.open("GET", `/jsonFile/${fileName}`, true)
            xhr.onload = function (data) {
                let resultJson = data.currentTarget.response
                res(resultJson)
            };
            xhr.send()
        }).then(function(d){
            let resultJson = JSON.parse(d)
            return resultJson
        }).then(function(data){
            console.log(self);
            self.createDataFrame(data)
        })
    }


    createDataFrame(data){
        let df = new DataFrame(data, this)
        this.dataFrameArray.push(df)
        this.dataWrapperHtmlObject.append(df.dataFrameHtmlObject)
    }

    save(){
        this.dataFrameArray.forEach((p, i)=>{
            let resultData = p.save()
            let url = `/semiSaveData/${this.basePath}`
            // console.log(resultData);

            let xhr = new XMLHttpRequest();
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify(resultData));
        })
    }
}
