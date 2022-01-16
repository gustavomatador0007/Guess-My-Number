let getInput = document.getElementsByTagName("input")[0];
let getBtn = document.getElementById("check");
let result1 = document.getElementsByTagName("div")[4];
let progress = document.getElementById("progress1");
let takingSpanPoints = document.getElementsByTagName("span")[0]
let quad = document.getElementsByTagName("div")[4]
let takeBody = document.querySelector("body")
let num = document.getElementById("num")
let hightScore = document.getElementsByTagName("span")[1]
let randomNumber = Math.floor(Math.random()*20)+1;
let pointsLeft = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let upadate = document.getElementById("updatePage")

function resultado(){
  let takingPoints = document.getElementsByTagName("span")[0]
  if(getInput.value == randomNumber){
    quad.innerHTML =  randomNumber
    hightScore.innerHTML = Math.max.apply(null, pointsLeft );

    // STYLE
      quad.style.color = "black"
      takeBody.style.background = "rgb(86, 170, 63)"
      num.style.border = "1px solid rgb(255, 255, 255)"
      num.style.background = "rgb(86, 170, 63)"
    // STYLE

    // CRIANDO OUTRO NÚMERO ALEATÓRIO
      
    // CRIANDO OUTRO NÚMERO ALEATÓRIO

  } else if(getInput.value < randomNumber){
    progress.innerHTML = `Too low!`
    pointsLeft.pop()
    takingPoints.innerHTML = Math.max.apply(null, pointsLeft );
    
  } else if(getInput.value > randomNumber){
    progress.innerHTML = `Too high!`
    pointsLeft.pop()
    takingPoints.innerHTML = Math.max.apply(null, pointsLeft)
  }
  if(pointsLeft == 0){
    alert("perdeu")
  } 

  if(getInput.value <=0 || getInput.value >20){
    alert("[ERRO] O valor digitado precisa ser entre 1 e 20 !")
  }
}
getBtn.addEventListener("click",resultado)


function FunctionRandomNumber(){
  progress.innerHTML = "Start guessing"
  console.log(`Easter Egg, reposta número: ${randomNumber} 🤫`)
}
window.addEventListener("load",FunctionRandomNumber)


function updateWindow(params) {
  document.location.reload(true)
}
upadate.addEventListener("click", updateWindow)



