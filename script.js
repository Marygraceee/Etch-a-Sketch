let click = true;

function startDraw()
{

  let choice = prompt("Select a grid size, from 2 to 100");
  let numericalchoice = parseInt (choice, 10);
  if (numericalchoice < 2 || numericalchoice > 100)
  {
    alert("Choice is invalid")
  }
 
  else
  {
for (i = 0; i < numericalchoice * numericalchoice; i++)
{
   let container = document.getElementById("container");
   container.style.gridTemplateColumns = `repeat(${numericalchoice}, 1fr)`;
   container.style.gridTemplateRows = `repeat(${numericalchoice}, 1fr)`;
   let box = document.createElement("div");
   box.classList.add("children");
   container.appendChild(box);
   document.getElementById("start").disabled = true;
} } 
}



function reset(){
  document.querySelectorAll('.children').forEach(e => e.remove());
  document.getElementById("start").disabled = false;
}


function changetoBlack(){
  if (click = true){
  let bambini = document.querySelectorAll(".children");
for (i = 0; i < bambini.length; i++){
  bambini[i].addEventListener("mousedown", (e) => {
e.target.style.backgroundColor = "black";
  })
}
}}

function erase(){
  if (click = true){
  let bambini = document.querySelectorAll(".children");
for (i = 0; i < bambini.length; i++){
  bambini[i].addEventListener("mousedown", (e) => {
e.target.style.backgroundColor = "white";
  })
}
}}

document.querySelector("body").addEventListener("click", () => {
  click = !click;
});

