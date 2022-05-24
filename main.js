let player = document.getElementById("player");
let obs =document.getElementById("obs1")
let gameBackground = document.getElementById("background");

let gameScore = document.getElementById("score");

function yoni(){
if(player.classList!=="jump"){


    player.classList.add("jump")
    setTimeout(function () {
        player.classList.remove("jump")
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
    alert("You Crashed")
    gameScore.innerText=""
}

if(playerTvalue!==250 && obsLeft<50 && obsLeft>10){
gameScore.innerText++;
}
if(gameScore.innerText==="6"){
    alert("high score")
    gameScore.innerText=""
}
      }, 100);

