class DataFrame{
    constructor(data, manager){
        this.data = data


        this.fileName = data["fileName"]
        this.manager = manager
        this.dataFrameHtmlObject = this.createDataFrameHtmlObject()
    }

    createDataFrameHtmlObject(){
        let dataFrameHtmlObject = document.createElement("div")

        let classFileName = this.fileName.split(" ").join("_")
        // console.log(classFileName);
        dataFrameHtmlObject.classList.add("dataFrame", classFileName)

        // file Name Title

        let sectionTitleHtmlObject = document.createElement("h1")
        sectionTitleHtmlObject.innerHTML =
        `${this.data["fileName"]}`
        dataFrameHtmlObject.append(sectionTitleHtmlObject)

        if (this.data["equationArray"]){

            let equationSection = new EquationSection(this.data)
            this.equationSection = equationSection

            dataFrameHtmlObject.append(equationSection.sectionHtmlObject)
        }

        console.log(this.data);
        if (this.data["weakExpressionDataArray"]){
            let weakExpressionSection = new WeakExpressionSection(this.data)
            this.weakExpressionSection = weakExpressionSection

            dataFrameHtmlObject.append(weakExpressionSection.sectionHtmlObject)
        }

        if (this.data["variableDataArray"]){

            let variableSection = new VariableSection(this.data)
            this.variableSection = variableSection
            dataFrameHtmlObject.append(variableSection.sectionHtmlObject)
        }

        return dataFrameHtmlObject
    }



    save(){

        let saveObject = {
            "fileName": this.data["fileName"],

        }

        if (this.variableSection){
            let variableData = this.variableSection.save();
            console.log(variableData);
            saveObject["variableDataArray"] = variableData
        }



        if (this.weakExpressionSection){
            console.log(this.weakExpressionSection);
            let weakExpressionData = this.weakExpressionSection.save()

            saveObject["weakExpressionDataArray"] = weakExpressionData
        } else {
            saveObject["weakExpressionDataArray"] = []
        }

        if (this.equationSection){
            saveObject["equationArray"] =  this.equationArray
        } else {
            saveObject["equationArray"] = []
        }

        console.log(saveObject);

        return saveObject
    }
}
