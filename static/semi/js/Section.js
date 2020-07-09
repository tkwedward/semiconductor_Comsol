class Section {
    constructor (){
        this.lineArray = []
    }

    createSection(type){
        let sectionHtmlObject = document.createElement("div")
        sectionHtmlObject.classList.add(`${type}Section`)

        let sectionTitleHtmlObject = document.createElement("h3")
        variableSectionTitle.innerHTML =  `${this.data["fileName"]} ${type}`
        sectionHtmlObject.append(sectionTitleHtmlObject)

        this.data[`${type}DataArray`].forEach((p, i)=>{
            let line = this.createLine(p, i, type)
            this.lineArray.push(line)
            sectionHtmlObject.append(line)
        })
        return sectionHtmlObject
    }



    save(){
        let lineDataArray = this.lineArray.map(p=>p.save())
        return lineDataArray
    }
}

class VariableSection extends Section{
    constructor (data){
        super()
        this.type = "variable"
        this.data = data
        this.sectionHtmlObject = this.createSection()
        this.generateLine()
    }

    createSection(){
        let dataContainerHtmlObject = document.createElement("div")
        dataContainerHtmlObject.classList.add("VariableSection")

        return dataContainerHtmlObject
    }

    generateLine(){
        let titleHtmlObject = document.createElement("h3")
        titleHtmlObject.classList.add("title")
        titleHtmlObject.innerHTML = `${this.data["fileName"]} VariableSection`
        this.sectionHtmlObject.append(titleHtmlObject)

        this.data["variableDataArray"].forEach((p, i)=>{
            let newLine = new VariableSectionLine(p, i, this)
            this.lineArray.push(newLine)
            // console.log(newLine.lineHtmlObject);

        })
    }

}

class WeakExpressionSection extends Section {
    constructor (data){
        super()
        this.type = "weakExpression"
        this.data = data
        this.sectionHtmlObject = this.createSection()

    }

    createSection(){
        let dataContainerHtmlObject = document.createElement("div")
        dataContainerHtmlObject.classList.add("WeakExpressionSection")

        let titleHtmlObject = document.createElement("h3")
        titleHtmlObject.classList.add("title")
        titleHtmlObject.innerHTML = `${this.data["fileName"]} WeakExperssion`
        dataContainerHtmlObject.append(titleHtmlObject)

        this.data["weakExpressionDataArray"].forEach((p, i)=>{
            let newLine = new WeakExpressionSectionLine(p, i, this)
            this.lineArray.push(newLine)
            dataContainerHtmlObject.append(newLine.lineHtmlObject)
        })

        return dataContainerHtmlObject
    }
}

class ShapeFunctionSection extends Section {
    constructor (data){
        super()
        this.type = "shapeFunction"
        this.data = data
        this.sectionHtmlObject = this.createSection()

    }

    createSection(){
        let dataContainerHtmlObject = document.createElement("div")
        dataContainerHtmlObject.classList.add("ShapeFunction")

        let titleHtmlObject = document.createElement("h3")
        titleHtmlObject.classList.add("title")
        titleHtmlObject.innerHTML = `${this.data["fileName"]} ShapeFunction`
        dataContainerHtmlObject.append(titleHtmlObject)

        this.data["shapeFunction"].forEach((p, i)=>{
            let newLine = new ShapeFunctionSectionLine(p, i, this)
            this.lineArray.push(newLine)
            dataContainerHtmlObject.append(newLine.lineHtmlObject)
        })

        return dataContainerHtmlObject
    }
}

class EquationSection {
    constructor (data){
        this.type = "equation"
        this.data = data
        this.sectionHtmlObject = this.createSection()
    }

    createSection(){
        let equationSection = document.createElement("div")
        equationSection.classList.add("equationSection")

        let equationSectionTitle = document.createElement("h3")
        equationSectionTitle.innerHTML =  `${this.data["fileName"]} equationSection`
        equationSection.append(equationSectionTitle)

        this.data["equationArray"].forEach(p=>{
            let img = document.createElement("img")
            img.src = "/semi/img/" + p["path"]
            img.style.display = "block"
            img.style.margin = "20px";
            img.style.height = "40px"
            equationSection.append(img)
        })
        return equationSection
    }
}
