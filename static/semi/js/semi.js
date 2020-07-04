let dataManager = new DataManager()

document.addEventListener("keydown", function(){
    if (event.keyCode==83 && event.ctrlKey ){
        dataManager.save()
    }
})

function renderFile(fileName){
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
        dataManager.createDataFrame(data)
    })
}

async function downloadFiles(){
    await renderFile("Semiconductor Material Model")
    await renderFile("Analytic Doping Model")
    // await renderFile("userDefinedGeneration_variables")
    // await renderFile("Trap_Assisted_Recombinations_variables")
    // await renderFile("Metal Contact 1_A_Bias_variables")
    // await renderFile("Metal Contact 2_B_preamp_Variables")
    await renderFile("Semiconductor Main Interface")
    // await renderFile("Trap_Assisted_Recombinations")

    // await renderFile("Continuity or Heterojunction 1 variables")
    // await renderFile("Semiconductor Material Model weak Expression", "weakExpression")
}

downloadFiles()
