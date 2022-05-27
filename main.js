let player = document.getElementById("player");
let obs =document.getElementById("obs1")
let obs1 =document.getElementById("obs12")
let gameBackground = document.getElementById("background");
let gameover = document.getElementById("gover")
let gamewin = document.getElementById("win")
let gameScore = document.getElementById("score");
let playagain= document.querySelector("button")
let startbutton = document.getElementById("startbutton")

let right =document.getElementById("rightscreen")
let left =document.getElementById("leftscreen")

let playagainbutton=document.getElementById("button")
audio2()
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

         right.addEventListener("touchstart",yoni)
         left.addEventListener("touchstart",yoni)

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
    gameover.textContent="You Crushed";
    audio1()
    
}


if(playerTvalue===250 && obsLeft<70 && obsLeft>30){
    // alert("You Crashed")
    gameScore.innerText=""
   
    // gameover.innerText="GAMEOVER";
    playagain.setAttribute("Id","button")
    playagain.innerText="Play Again"
    obs.removeAttribute("class")
    obs1.removeAttribute("class")
    gameover.textContent="You Crushed";
    audio1()
    
}


if(playerTvalue!==250 && obs1Left<70 && obs1Left>50){
  
    gameScore.innerText++;
    console.log(gameScore.innerText)  
    }

if(playerTvalue!==250 && obsLeft<70 && obsLeft>30){
gameScore.innerText++;
console.log(gameScore.innerText)  
}

// if(gameScore.innerText=5){

// }  


if(gameScore.innerText>=10){
 
    // gameScore.innerText=""
    obs.removeAttribute("class")
    obs1.removeAttribute("class")
    playagain.innerText="play Again"
    playagain.setAttribute("Id","button")
    gamewin.setAttribute("class","gamewinstatus")
    gamewin.textContent=`YOU WIN \n  Score :  ${gameScore.innerText}`
    
}

     

playagain.addEventListener("click", function(){
    window.location.reload();
    obs.setAttribute("class", "obsclass")
    obs1.setAttribute("class", "obsclass1")

    gameover.innerText="";
    gamewin.innerText="";
    
   
    
  })

      }, 100);


    // gameover.innerText="You Crashed";
// console.log(gameover)


setTimeout( function(){
  
    gameBackground.removeAttribute("id")
    gameBackground.setAttribute("id", "background")
    
   
    
},1000)
  

setTimeout( function(){
   
    gameBackground.removeAttribute("id")
    gameBackground.setAttribute("id", "background1")

},13000)
  

setTimeout(function (){    
   
    gameBackground.removeAttribute("id")
    gameBackground.setAttribute("id", "background2")
   
  

},8000)
  

// window.addEventListener("DOMContentLoaded", function(){
//     obs.removeAttribute("class")
//     obs1.removeAttribute("class")
// })

// startbutton.addEventListener("click",function(){
//     obs.setAttribute("class", "obsclass")
//     obs1.setAttribute("class", "obsclass1")


// })

function audio1(){
    let audio1 = new Audio("./audios/20220526_110054264.m4a");
    audio1.play();
}

function audio2(){
let audiotwo= new Audio("./audios/20220526_120502678 (1).m4a")
audiotwo.play();
}

