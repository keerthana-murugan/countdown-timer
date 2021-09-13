var heading = document.getElementById("heading");
var bgColor = document.getElementById("main-div");
var para = document.getElementById("para");

heading.style.fontSize = "200px";

var intervalID = setInterval(function(){
    heading.innerText -=1; 
    console.log(heading.innerText);
    bgColor.style.backgroundColor = "rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")"
    if(heading.innerText<1){
        para.innerText = "** Timer Ended **";
        clearInterval(intervalID);
    }
},1000);
