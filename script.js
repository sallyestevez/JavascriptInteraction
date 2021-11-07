var heading;
var buttonExecution;
var input;
var output;
var songs;

document.addEventListener("DOMContentLoaded", function(){
  heading = document.getElementByID("title");
  buttonExecution = document.getElementByID("buttonExecution");
  output = document.getElementByID("fortuneText");
  input = document.getElementByID("myInput");

  buttonExecution.addEventListener("click", fortune);
});

// 1. Write function called "fortune" that will take one argument (visitor's name)
// and prints a random "fortune teller style" fortune into an element of your page

function fortune(){
  songs = ["Hi High", "Girl Front", "Stylish", "favOriTe", "Butterfly", "Heat",
  "Heart Attack", "You and Me Together", "Kiss Later", "WOW", "Why Not?", "Star",
  "new", "Love Cherry Motion", "Satellite", "Eclipse", "Love Letter", "Let Me In",
  "Oh (Yes I Am)", "love4eva", "rendezvous 18.6y", "Sweet Crazy Love", "Colors",
  "LOONATIC", "frozen", "Egoist", "One & Only", "Love & Live", "Universe", "D-1"];

  
}
// 2. Write a function called "restyle" that applies new CSS styles to the "fortune"
// text in a random manner each time it fires. Modify at least three CSS properties
function restyle(){

}
