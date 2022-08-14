let count = 0
var countEl = document.getElementById("count-el")
let savedEntry = document.getElementById("saved")
let dash = " - "
let savedValue = savedEntry.getAttribute("value")
let savedCount = ""
let loop = 0





function increment(){
    count ++
    
    countEl.innerText = count
    
    console.log("The buttoun was clicked")
}

function save(){

    if(loop < 1){
        savedCount += count
    }
    else{
        savedCount += dash + count
    }

    savedEntry.setAttribute("value", savedCount)

    count = 0
    countEl.innerText = count
    loop = 2
    // console.log(count + dash)
    
}
