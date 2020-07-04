// ;(function(window){
//     // Game
//     //     Info section
//     //     Deck
//     //     Discard Pile
//     //     Rules
//     //
//     // Deck
//     //     Cards
//     //     ---
//     //     shuffle
//     //     stack
//     //
//     // Cards
//     //     vals
//     //     suit
//     //     ---
//     //     flip
//     //
//     // Discard Pile
//     //     Holders
//     //     ---
//     //     accept or reject
//
//     var Game = function (el, option){
//         this.el = document.getElementById(el)
//         this.option = option
//
//         // Info section
//         this.info_div = document.createElement("div");
//         this.info_div.id = "info_div";
//
//         // Deck
//         this.deck_div = document.createElement("div");
//         this.deck_div.id = "deck_div";
//         this.gameDeck = new Deck(this.deck_div, option);
//         this.gameDeck.buildDeck();
//         // Discard Pile
//
//
//         // Rules
//
//         let k = this.el.appendChild(this.info_div);
//         this.el.appendChild(this.deck_div)
//         console.log(k);
//     }
//
//     // Deck
//     var Deck = function(deck_div, option){
//         this.deckData = option.data;
//         this.buildDeck = function(){
//             var parentFrag = document.createDocumentFragment()
//
//             deck_div.innerHTML = ""
//
//             for (var i = this.deckData.length - 1; i >= 0; i--){
//                 var card = new Card();
//                 card.id = "card-" + i
//                 card.data = this.deckData[i]
//                 card.buildCard(parentFrag)
//             }
//             deck_div.appendChild(parentFrag)
//         }
//     }
//
//     // Card
//     var Card = function(){
//         this.id = "";
//         this.data = "";
//         this.cardCont = document.createElement("div")
//         this.cardCont.className = "card_container"
//
//         this.cardFront = document.createElement("div")
//         this.cardFront.className = "card_front"
//
//         this.cardBack = document.createElement("div")
//         this.cardBack.className = "card_back"
//
//         this.buildCard = function(parentFrag){
//             var flipDiv = document.createElement("div"),
//             frontValDiv = document.createElement("div"),
//             backValDiv = document.createElement("div"),
//             catDiv =  document.createElement("div")
//
//             flipDiv.className = "flip"
//             frontValDiv.className = "front_val"
//             backValDiv.className = "back_val"
//             catDiv.className = "cat_val"
//
//             frontValDiv.innerHTML = this.data.q;
//             backValDiv.innerHTML = this.data.category;
//
//             catDiv.innerHTML = this.data.a;
//
//             this.cardFront.appendChild(frontValDiv)
//             this.cardFront.appendChild(catDiv)
//             this.cardFront.appendChild(backValDiv)
//
//             flipDiv.appendChild(this.cardFront)
//             flipDiv.appendChild(this.cardBack)
//
//             this.cardCont.id = this.id
//             this.cardCont.appendChild(flipDiv)
//             parentFrag.appendChild(this.cardCont)
//
//
//         }
//
//
//
//     }
//
//     var DiscardPile = function(){
//
//     }
//
//     window.Game = Game
//
// })(window);







//
// document.body.addEventListener("drop", function(e){
//     console.log("dropevent");
//     console.log(myArt);
//     e.preventDefault();
//     e.preventDefault(e.pageX - myX);
//     myArt.style.left = e.pageX - myX + "px"
//     console.log();
//
// }, false)



let wrapper = document.createElement("div")
wrapper.className = "sliderWrapper"
wrapper.style.position = "relative"
wrapper.style.width = "80vw"
wrapper.style.background = "green"
wrapper.style.margin = "0"
wrapper.style.left = "100px"
wrapper.style.top = "100px"


function createDiv(className){
    let div = document.createElement("div")
    div.className = className
    div.style.position = "relative"
    div.style.left = "0px"
    div.style.width = "10px"
    div.style.height = "100px"
    div.style.background = "blue"
    div.draggable = true


    let myX;
    let myY;
    let myArt;
    return div
}


let div1 = createDiv("div1")
let div2 = createDiv("div2")
let div3 = createDiv("div3")


// div1.style.left = "100px";
div1.style.height = "100px";

div2.style.position = "relative"
div2.style.left = "900px";
div2.style.height = "100px";

wrapper.append(div1)
// order()

// document.body.append(div1, div2, div3)
document.body.append(wrapper)


wrapper.addEventListener("dragstart", function(e){
    var img = new Image();
    img.src = "";
    e.dataTransfer.setDragImage(img, 0, 0);
    myArt = e.target
    myX = e.offsetX
    myY = e.offsetY

})

wrapper.addEventListener("dragover", function(e){
    e.preventDefault();
    let data = myArt.getBoundingClientRect()
    console.log(e.clientX - myX);
    myArt.style.left = e.pageX - myX + "px"
})















//
// let baseOfPointer = 15
//
//
//
//
// document.body.addEventListener("dragstart", function(e){
//     // position of the mouse relative to the left corner of the item
//     var img = new Image();
//     img.src = "";
//
//     console.log(e.pageX, e.pageY);
//     console.log(img);
//     e.dataTransfer.setDragImage(img, 0, 0);
//     myArt = e.target
//     myX = e.offsetX
//     myY = e.offsetY
//
// })
//
// document.body.addEventListener("dragover", function(e){
//     e.preventDefault();
//     console.log(e.pageX);
//     myArt.style.left = e.pageX - myX + "px"
// })
//
// document.body.addEventListener("drop", function(e){
//     console.log("dropevent");
//     console.log(myArt);
//     e.preventDefault();
//     e.preventDefault(e.pageX - myX);
//     myArt.style.left = e.pageX - myX + "px"
//     console.log();
//
// }, false)
//
//
// let wrapper = document.createElement("div")
// wrapper.className = "sliderWrapper"
// wrapper.style.position = "relative"
// wrapper.style.width = "80vw"
// wrapper.style.left = "100px"
// wrapper.style.top = "100px"
//
//
// let sliderBar = document.createElement("div")
// sliderBar.className = "sliderBar"
// sliderBar.style.display = "block"
// sliderBar.style.background = "rgb(0, 168, 107)"
// sliderBar.style.width = "100%"
// sliderBar.style.minHeight = "10px"
//
//
// function createDiv(className, color="red"){
//     let pointer = document.createElement("div")
//     pointer.className = className
//     pointer.draggable = true
//     pointer.style.position = "relative"
//     pointer.style.display = "inline"
//     pointer.style.height = 0
//     pointer.style.width = 0
//     pointer.style.borderLeft =  baseOfPointer + "px solid transparent"
//     pointer.style.borderRight = baseOfPointer + "px solid transparent"
//     pointer.style.borderBottom = "80px solid " + color
//     return pointer
// }
//
//
//
//
// let pointerLeft = createDiv("pointerLeft", "green")
// pointerLeft.style.left = -baseOfPointer + "px"
// // pointerLeft.style.position = "absolute"
// // pointerLeft.style.top = "12px"
//
// let pointerRight = createDiv("pointerRight", "red")
// pointerRight.style.right = -baseOfPointer + "px"
// // pointerRight.style.position = "absolute"
// // pointerRight.style.top = "12px"
//
// wrapper.append(sliderBar, pointerLeft, pointerRight)
// document.body.append(pointerLeft)
//
//
//
// let sliderBarPositionData = sliderBar.getBoundingClientRect()
// let pointerRightPositionData = pointerRight.getBoundingClientRect()
// let pointerLeftPositionData = pointerLeft.getBoundingClientRect()
// console.log(pointerLeftPositionData, pointerRightPositionData);
