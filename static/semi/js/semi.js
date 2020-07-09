let socket = io();


let simpleFileNameDict = {
    "Semiconductor": 1,
    "Semiconductor Material Model 1": 1,
    "Continuity or Heterojunction 1":1,
    "Insulation 1":1,
    "left contact":1,
    "right contact":1,
    "Thin insulator":1
}

let simplePath = "simple"

let dataManager = new DataManager(simplePath, simpleFileNameDict)
dataManager.downloadFiles()

document.addEventListener("keydown", function(){
    if (event.keyCode==83 && event.ctrlKey ){
        dataManager.save()
    }
})




socket.on("message", function(data){
    console.log(data);
})
//
// async function downloadFiles(){
//     // simple
//     await renderFile("Semiconductor")
//     await renderFile("Semiconductor Material Model 1")
//     // await renderFile("Insulation 1")
//     // await renderFile("Continuity or Heterojunction 1")
//     // await renderFile("left contact")
//     // await renderFile("right contact")
//     // await renderFile("Thin insulator")
//     // await renderFile("Zero Charge 1")
//
//     // complex
//     //
//     // await renderFile("Semiconductor Material Model")
//     // await renderFile("Analytic Doping Model")
//     // await renderFile("userDefinedGeneration")
//     // await renderFile("Continuity or Heterojunction 1 variables")
//     // // await renderFile("Trap_Assisted_Recombinations_variables")
//     // // await renderFile("Metal Contact 1_A_Bias_variables")
//     // // await renderFile("Metal Contact 2_B_preamp_Variables")
//     // await renderFile("Semiconductor Main Interface")
//     // // await renderFile("Trap_Assisted_Recombinations")
//     //
//     // // await renderFile("Continuity or Heterojunction 1 variables")
//     // // await renderFile("Semiconductor Material Model weak Expression", "weakExpression")
// }
//
// downloadFiles()
