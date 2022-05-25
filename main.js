let player = document.getElementById("player");
let obs =document.getElementById("obs1")
let obs1 =document.getElementById("obs12")
let gameBackground = document.getElementById("background");
let gameover = document.getElementById("gover")
let gamewin = document.getElementById("win")
let gameScore = document.getElementById("score");
let playagain= document.querySelector("button")

let playagainbutton=document.getElementById("button")
function yoni(){
if(player.classList!=="jump"){

   
    player.classList.add("jump")
    setTimeout(function () {
        player.classList.remove("jump")
        playagainbutton.removeAttribute("class")

    },300)
}

}
      let click = document.addEventListener("keyup", function(e)  {
          yoni()
         })

      setInterval(function () {
       

        const playerTvalue= parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    //     const rockTvalue= parseInt(window.getComputedStyle(obs).getPropertyValue("right"));
    //  console.log(rockTvalue)
    //  let obsLeft = parseInt(window.getComputedStyle(obs).getPropertyValue("right"));
    //   console.log("OBS",obsLeft)
    let obsPos = obs.getBoundingClientRect()
    let obs1Pos = obs1.getBoundingClientRect()
    let obsLeft = obsPos.left
    let obs1Left = obs1Pos.left
    console.log(`obj2 ${obs1Left}`)

console.log(obsLeft)


if(playerTvalue===250 && obs1Left<70 && obs1Left>30){
    // alert("You Crashed")
    gameScore.innerText=""
   
    // gameover.innerText="GAMEOVER";
    playagain.setAttribute("Id","button")
    playagain.innerText="Play Again"
    obs.removeAttribute("class")
    obs1.removeAttribute("class")
    gameover.textContent="You Crashed";
    
}


if(playerTvalue===250 && obsLeft<70 && obsLeft>30){
    // alert("You Crashed")
    gameScore.innerText=""
   
    // gameover.innerText="GAMEOVER";
    playagain.setAttribute("Id","button")
    playagain.innerText="Play Again"
    obs.removeAttribute("class")
    obs1.removeAttribute("class")
    gameover.textContent="You Crashed";
    
}


if(playerTvalue!==250 && obs1Left<70 && obs1Left>30){
  
    gameScore.innerText++;
    console.log(gameScore.innerText)  
    }

if(playerTvalue!==250 && obsLeft<70 && obsLeft>30){
gameScore.innerText++;
console.log(gameScore.innerText)  
}

// if(gameScore.innerText=5){

// }  


if(gameScore.innerText>=3){
   gamewin.textContent=`YOU WIN \n Your Score Is:  ${gameScore.innerText}`
    gameScore.innerText=""
    obs.removeAttribute("class")
    obs1.removeAttribute("class")
    playagain.innerText="play Again"
    playagain.setAttribute("Id","button")
}


      }, 100);

      playagain.addEventListener("click", function(){
        window.location.reload();
        obs.setAttribute("class", "obsclass")
        
      })

    // gameover.innerText="You Crashed";
// console.log(gameover)
