class SectionLineBase {
    constructor(data, i, section){
        this.data = data
        this.id = i
        this.section = section
        this.lineColor = ""
        this.sectionName = this.section.data["fileName"].split(" ").join("_")
        this.lineHtmlObject = this.createSectionLine()
        //
    }

    createImportantButton(line){
        let self = this

        let checkbox = document.createElement("input")
        if (this.data["check"]){
            checkbox.checked = true
            line.style.background = "gold"
        } else {
            checkbox.checked = false
            // line.style.background = "gold"
        }
        checkbox.type = "checkbox"
        console.log(checkbox.checked);
        checkbox.addEventListener("input", function(){
            if (checkbox.checked){
                line.style.background = "gold"
                console.log(3234);
                console.log(self.id);
                console.log(self.id%2);
            } else {

                console.log(self.id%2);
                line.style.background = self.id%2?"": "lightgrey"
            }
        })
        return checkbox
    }
}

class VariableSectionLine extends SectionLineBase{
    constructor(data, i, section){
        super(data, i, section)
        this.section.sectionHtmlObject.append(this.lineHtmlObject)
    }

    createSectionLine(){
        let data = this.data
        let divLine = document.createElement("div")
        divLine.classList.add("item", "line")
        divLine.id = `${this.sectionName}_item_${this.id}`
        divLine.style.display = "grid"
        divLine.style.gridTemplateColumns = "0.2fr 2fr 1fr 5fr 1fr 1fr 0.5fr"

        if (this.id % 2 == 0 ){
            divLine.style.background = "lightgrey"
            this.lineColor = "lightgrey"
        }

        let divNumber = document.createElement("div")
        let divName = document.createElement("div")
        let divFormula = document.createElement("div")
        let divUnit = document.createElement("div")
        let divMeaning = document.createElement("div")
        let divScope = document.createElement("div")
        let divCheckBox = this.createImportantButton(divLine)

        let name = data["name"]
        let formula = data["formula"]
        let unit = data["unit"]
        let meaning = data["meaning"]
        let scope = data["scope"]
        let checkStatus = data["check"]

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



        divLine.append(divNumber, divName, divMeaning, divFormula, divUnit, divScope, divCheckBox)

        this.divName = divName
        this.divFormula = divFormula
        this.divUnit = divUnit
        this.divMeaning = divMeaning
        this.divScope = divScope
        this.divCheckBox = divCheckBox

        let divArray = [divName, divFormula, divUnit, divMeaning, divScope, divCheckBox]
        divArray.forEach(p=>{
            dataManager.addToMonitor(p)
        })

        return divLine
    }

    save(){
        // console.log(this.lineHtmlObject);

        let lineDict = {
            "name": this.divName.innerHTML,
            "formula": this.divFormula.innerHTML,
            "unit": this.divUnit.innerHTML,
            "meaning": this.divMeaning.innerHTML,
            "scope": this.divScope.innerHTML,
            "check": this.divCheckBox.checked
        }

        console.log(lineDict);
        return lineDict
    }

}


class WeakExpressionSectionLine extends SectionLineBase{
    constructor(data, i, section){
        // this.dataFrameName = name
        super(data, i, section)
    }

    createSectionLine(){
        let data = this.data

        let divLine = document.createElement("div")
        divLine.classList.add("item")
        divLine.id = `${this.sectionName}_item_${this.id}`

        divLine.style.display = "grid"
        if (this.id % 2 == 0 ){
            divLine.style.background = "lightgrey"
        }

        divLine.style.gridTemplateColumns = "0.2fr 1fr 1fr 5fr 1fr 0.5fr"

        let divNumber = document.createElement("div")
        let divIntegrationOrder = document.createElement("div")
        let divWeakExpression = document.createElement("div")
        let divFrame = document.createElement("div")
        let divSelection = document.createElement("div")
        let divCheckBox = this.createImportantButton(divLine)


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


        divLine.append(divNumber, divIntegrationOrder, divSelection, divWeakExpression, divFrame, divCheckBox)

        this.divIntegrationOrder = divIntegrationOrder
        this.divWeakExpression = divWeakExpression
        this.divFrame = divFrame
        this.divSelection = divSelection
        this.divCheckBox = divCheckBox

        let divArray = [divIntegrationOrder, divWeakExpression, divFrame, divSelection]
        divArray.forEach(p=>{
            dataManager.addToMonitor(p)
        })

        return divLine
    }

    save(){
        let lineDict = {
            "integrationOrder": this.divIntegrationOrder.innerHTML,
            "weakExpression": this.divWeakExpression.innerHTML,
            "frame": this.divFrame.innerHTML,
            "selection": this.divSelection.innerHTML,
            "check": this.divCheckBox.checked
        }
        return lineDict
    }


}

class ShapeFunctionSectionLine  extends SectionLineBase{
    constructor(data, i, section){
        super(data, i, section)
    }

    createSectionLine(){
        let data = this.data

        let divLine = document.createElement("div")
        divLine.classList.add("item")
        divLine.id = `${this.sectionName}_item_${this.id}`

        divLine.style.display = "grid"
        if (this.id % 2 == 0 ){
            divLine.style.background = "lightgrey"
        }

        divLine.style.gridTemplateColumns = "0.2fr 1fr 1fr 1fr 1fr 1fr 1fr 0.5fr"

        let divNumber = document.createElement("div")
        let divName = document.createElement("div")
        let divShapeFunction = document.createElement("div")
        let divUnit = document.createElement("div")
        let divDescription = document.createElement("div")
        let divFrame = document.createElement("div")
        let divSelection = document.createElement("div")
        let divCheckBox = this.createImportantButton(divLine)


        let name = data["name"]
        let shapeFunction = data["shapeFunction"]
        let unit = data["unit"]
        let description = data["description"]
        let frame = data["frame"]
        let selection = data["selection"]

        divNumber.classList.add("number", "box")
        divNumber.innerHTML = this.id + 1

        divName.classList.add("name", "box")
        divName.innerHTML = name
        divName.contentEditable = true

        divShapeFunction.classList.add("shapeFunction", "box")
        divShapeFunction.innerHTML = shapeFunction
        divShapeFunction.contentEditable = true

        divUnit.classList.add("unit", "box")
        divUnit.innerHTML = unit
        divUnit.contentEditable = true

        divDescription.classList.add("description", "box")
        divDescription.innerHTML = description
        divDescription.contentEditable = true

        divFrame.classList.add("frame", "box")
        divFrame.innerHTML = frame
        divFrame.contentEditable = true


        divSelection.classList.add("selection", "box")
        divSelection.innerHTML = selection
        divSelection.contentEditable = true


        divLine.append(divNumber, divName, divSelection, divShapeFunction, divUnit, divDescription, divFrame, divSelection)

        this.divName = divName
        this.divShapeFunction = divShapeFunction
        this.divUnit = divUnit
        this.divDescription = divDescription
        this.divFrame = divFrame
        this.divSelection = divSelection
        this.divCheckBox = divCheckBox

        let divArray = [divName, divShapeFunction, divUnit, divDescription, divFrame, divSelection, divCheckBox]
        divArray.forEach(p=>{
            dataManager.addToMonitor(p)
        })

        return divLine
    }

    save(){
        let lineDict = {
            "name": this.divName.innerHTML,
            "shapeFunction": this.divShapeFunction.innerHTML,
            "unit": this.divUnit.innerHTML,
            "description": this.divDescription.innerHTML,
            "frame": this.divFrame.innerHTML,
            "selection": this.divSelection.innerHTML,
            "check": this.divCheckBox.checked
        }
        return lineDict
    }


}
