class DataManager{
    constructor(){
        self.dataFrameArray = []
        self.dataWrapperHtmlObject = this.createDataWrapperHtmlObject()
        document.body.append(self.dataWrapperHtmlObject)

    }

    createDataWrapperHtmlObject(){
        let dataWrapper = document.createElement("div")
        dataWrapper.classList.add("dataWrapper")
        return dataWrapper
    }

    createDataFrame(data){
        let df = new DataFrame(data, this)
        self.dataFrameArray.push(df)
        self.dataWrapperHtmlObject.append(df.dataFrameHtmlObject)
    }

    save(){

        self.dataFrameArray.forEach((p, i)=>{
            let resultData = p.save()
            let url = `/semiSaveData`
            // console.log(resultData);

            let xhr = new XMLHttpRequest();
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify(resultData));
        })
    }
}
