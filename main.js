let player = document.getElementById("player");
let obs =document.getElementById("obs1")
let gameBackground = document.getElementById("background");
let gameover = document.getElementsByClassName("gamestatus")
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
    let obsLeft = obsPos.left
console.log(obsLeft)

if(playerTvalue===250 && obsLeft<70 && obsLeft>30){
    // alert("You Crashed")
    gameScore.innerText=""
   
    gameover.innerText="GAMEOVER";
    playagain.setAttribute("Id","button")
    playagain.innerText="play Again"
    obs.removeAttribute("class")
}

if(playerTvalue!==250 && obsLeft<70 && obsLeft>30){
gameScore.innerText++;
console.log(gameScore.innerText)  
}


if(gameScore.innerText>=10){
    alert("high score")
    gameScore.innerText=""
    obs.removeAttribute("class")

    playagain.setAttribute("Id","button")
}


      }, 100);

      playagain.addEventListener("click", function(){
        obs.setAttribute("class", "obsclass")
        
      })