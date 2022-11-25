//Detecting button click
for(var i=0;i<document.querySelectorAll(".drum").length;i++){

 document.querySelectorAll(".drum")[i].addEventListener("click",function (){

   // this.style.color="white";

   var btext = this.innerHTML;

music(btext);
buttonAnimation(btext);
});

}
//Detecting keyboard press
document.addEventListener("keydown",function(event){
  music(event.key);
  buttonAnimation(event.key);

});

function music(key){
  switch(key){
    case "w":
    var audio1=new Audio("sounds/tom-1.mp3");
    audio1.play();
    break;
    case "a":
    var audio2=new Audio("sounds/tom-2.mp3");
    audio2.play();
    break;
    case "s":
    var audio3=new Audio("sounds/tom-3.mp3");
    audio3.play();
    break;
    case "d":
    var audio3=new Audio("sounds/tom-4.mp3");
    audio3.play();
    break;
    case "j":
    var audio3=new Audio("sounds/snare.mp3");
    audio3.play();
    break;
    case "k":
    var audio3=new Audio("sounds/kick-bass.mp3");
    audio3.play();
    break;
    case "l":
    var audio3=new Audio("sounds/crash.mp3");
    audio3.play();
    break;
    default:
    console.log(key);
  }
}

function buttonAnimation(currentKey)
{
  var abut=document.querySelector("."+currentKey);
  abut.classList.add("pressed");

setTimeout(function(){
  abut.classList.remove("pressed");
},100);
}
