class VariableSectionLine {
    constructor(data, i, section){
        // this.dataFrameName = name
        this.data = data
        this.id = i
        this.section = section
        this.lineHtmlObject = this.createSectionLine()

        this.section.sectionHtmlObject.append(this.lineHtmlObject)
        console.log(this.lineHtmlObject);

    }

    createSectionLine(){
        let data = this.data
        let divLine = document.createElement("div")
        divLine.classList.add("item", "line")
        divLine.style.display = "grid"
        divLine.style.gridTemplateColumns = "0.2fr 2fr 1fr 5fr 1fr 1fr"

        if (this.id % 2 == 0 ){
            divLine.style.background = "lightgrey"
        }

        let divNumber = document.createElement("div")
        let divName = document.createElement("div")
        let divFormula = document.createElement("div")
        let divUnit = document.createElement("div")
        let divMeaning = document.createElement("div")
        let divScope = document.createElement("div")

        let name = data["name"]
        let formula = data["formula"]
        let unit = data["unit"]
        let meaning = data["meaning"]
        let scope = data["scope"]

        divNumber.classList.add("number", "box")
        divNumber.innerHTML = this.id + 1

        divName.classList.add("name", "box")
        divName.innerHTML = name
        // divName.innerHTML = name.replace(re, "")
        divName.contentEditable = true

        divFormula.classList.add("formula", "box")
        divFormula.innerHTML = formula
        divFormula.contentEditable = true

        divUnit.classList.add("unit", "box")
        divUnit.innerHTML = unit
        divUnit.contentEditable = true

        divMeaning.classList.add("meaning", "box")
        divMeaning.innerHTML = meaning
        divMeaning.contentEditable = true

        divScope.classList.add("name", "box")
        divScope.innerHTML = scope
        divScope.contentEditable = true

        divLine.append(divNumber, divName, divMeaning, divFormula, divUnit, divScope)

        this.divName = divName
        this.divFormula = divFormula
        this.divUnit = divUnit
        this.divMeaning = divMeaning
        this.divScope = divScope

        return divLine
    }

    save(){
        // console.log(this.lineHtmlObject);
        let lineDict = {
            "name": this.divName.innerHTML,
            "formula": this.divFormula.innerHTML,
            "unit": this.divUnit.innerHTML,
            "meaning": this.divMeaning.innerHTML,
            "scope": this.divScope.innerHTML
        }
        console.log(lineDict);
        return lineDict
    }

}


class WeakExpressionSectionLine {
    constructor(data, i){
        // this.dataFrameName = name
        this.data = data
        this.id = i
        this.lineHtmlObject = this.createSectionLine()

    }

    createSectionLine(){
        let data = this.data

        let divLine = document.createElement("div")
        divLine.classList.add("item")
        divLine.style.display = "grid"
        if (this.id % 2 == 0 ){
            divLine.style.background = "lightgrey"
        }

        divLine.style.gridTemplateColumns = "0.2fr 1fr 1fr 5fr 1fr "

        let divNumber = document.createElement("div")
        let divIntegrationOrder = document.createElement("div")
        let divWeakExpression = document.createElement("div")
        let divFrame = document.createElement("div")
        let divSelection = document.createElement("div")



        let integrationOrder = data["integrationOrder"]
        let weakExpression = data["weakExpression"]
        // if (weakExpression){
        //     weakExpression = weakExpression.split("&lt;").join(" < ")
        //                      .split("&gt;").join(" > ")
        // }

        let frame = data["frame"]
        let selection = data["selection"]

        // var re = new RegExp("[0-9]{1,3} ")

        divNumber.classList.add("number", "box")
        divNumber.innerHTML = this.id + 1

        divIntegrationOrder.classList.add("integrationOrder", "box")
        divIntegrationOrder.innerHTML = integrationOrder
        // divName.innerHTML = name.replace(re, "")
        divIntegrationOrder.contentEditable = true

        divWeakExpression.classList.add("weakExpression", "box")
        divWeakExpression.innerHTML = weakExpression
        divWeakExpression.contentEditable = true

        divFrame.classList.add("frame", "box")
        divFrame.innerHTML = frame
        divFrame.contentEditable = true

        divSelection.classList.add("selection", "box")
        divSelection.innerHTML = selection
        divSelection.contentEditable = true


        divLine.append(divNumber, divIntegrationOrder, divSelection, divWeakExpression, divFrame)

        this.divIntegrationOrder = divIntegrationOrder
        this.divWeakExpression = divWeakExpression
        this.divFrame = divFrame
        this.divSelection = divSelection

        return divLine
    }

    save(){
        let lineDict = {
            "integrationOrder": this.divIntegrationOrder.innerHTML,
            "weakExpression": this.divWeakExpression.innerHTML,
            "frame": this.divFrame.innerHTML,
            "selection": this.divSelection.innerHTML
        }
        return lineDict
    }


}
