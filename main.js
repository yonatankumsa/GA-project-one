let player = document.getElementById("player");
let obs =document.getElementById("obs1")
let gameBackground = document.getElementById("background");
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
      
    //  console.log(playerTvalue)
    //  let obsLeft = parseInt(window.getComputedStyle(obs).getPropertyValue("right"));
    //   console.log("OBS",obsLeft)
    let obsPos = obs.getBoundingClientRect()
    let obsLeft = obsPos.left
console.log(obsLeft)

if(playerTvalue===250 && obsLeft<180 && obsLeft>0 ){
    // alert("You Crashed")
}

      }, 1000);

