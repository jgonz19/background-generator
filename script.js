var css = document.querySelector("h3");
var clr1 = document.querySelector(".color1");
var clr2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("btn");
/*console.log(css);
console.log(clr1);
console.log(clr2);*/

function setGradient(){
    body.style.background="linear-gradient(to right, " + clr1.value + ", " + clr2.value + ")";
    css.textContent = body.style.background + ",";
}

setGradient();

function changeColor(){
    var clr1New = "#" + ((1<<24)*Math.random() | 0).toString(16);
    var clr2New = "#" + ((1<<24)*Math.random() | 0).toString(16); 
    body.style.background="linear-gradient(to right, " + clr1New + ", " + clr2New + ")";
    css.textContent = body.style.background + ",";
}

clr1.addEventListener("input", setGradient);
clr2.addEventListener("input", setGradient);
button.addEventListener("click", changeColor);