let icons = document.querySelectorAll(".icons")
let youSelect
var yourScore = 0;
var compScore = 0;
for (let icon of icons) {
    icon.addEventListener('click', () => {
        youSelect = icon.getAttribute("id")
        console.log(youSelect)
        computerChoice(youSelect,icons)
        
      
    });
}

function computerChoice(youSelect,icons){
    let generateChoice = Math.floor(Math.random()*3)
    let computerSelect = icons[generateChoice].getAttribute("id") 
   
   
    if(youSelect != computerSelect){
        yourScore++
        console.log("your score " + yourScore)
        document.querySelector("#you").innerHTML = "You :" + yourScore
        
    }
    else {
        compScore++
        console.log("comp score " + compScore)

        document.querySelector("#computer").innerHTML = "Comp : "+ compScore
        
    }

}