var heading;
var tagline;
var fortuneHTML;
var runButton;
var inputName;
var outputText;
var background;

document.addEventListener("DOMContentLoaded", function(){

  heading = document.getElementById("title");
  tagline = document.getElementById("tag")
  fortuneHTML = document.getElementById("fortuneText");
  background = document.getElementById("pageHTML");
  body = document.getElementById("pageBody");
  runButton = document.getElementById("runButton");
  outputText = document.getElementById("fortuneText");
  inputName = document.getElementById("myInput");

  runButton.addEventListener("click", fortune);
  runButton.addEventListener("click", restyle);

});

// 1. Write function called "fortune" that will take one argument (visitor's name)
// and prints a random "fortune teller style" fortune into an element of your page
function fortune(){
  var songs = ["Hi High", "Girl Front", "Stylish", "favOriTe", "Butterfly", "Heat",
  "Heart Attack", "You and Me Together", "Kiss Later", "WOW", "Why Not?", "Star",
  "new", "Love Cherry Motion", "Satellite", "Eclipse", "Love Letter", "Let Me In",
  "Oh (Yes I Am)", "love4eva", "rendezvous 18.6y", "Sweet Crazy Love", "Colors",
  "LOONATIC", "frozen", "Egoist", "One & Only", "Love & Live", "Universe", "D-1"];

  var randomSong = songs[Math.floor(Math.random()*songs.length)];

  var inputText = inputName.value;

  outputText.innerHTML = inputText + "'s suggested LOONA song is: " + randomSong;

  // console.log(inputText);
}

// 2. Write a function called "restyle" that applies new CSS styles to the "fortune"
// text in a random manner each time it fires. Modify at least three CSS properties
function restyle(){

  var fonts = ["Gideon Roman, cursive", "Zen Kurenaido, sans-serif",
  "Zen Loop, cursive", "Kiwi Maru, serif", "New Tegomin, serif",
  "Noto Serif Display, serif", "Rampart One, cursive", "Sen, sans-serif",
  "Yatra One, cursive", "Yusei Magic, sans-serif"];
  var colors = ["#533A71", "#6184D8", "#FE938C", "#50c5b7", "#F1FFFA", "#BAD7F2",
  "#FFB7C3", "#5EC2B7", "#9DD9D2", "#FF1654", "#7F2CCB", "#EAF4D3", "#2A2D43",
  "#FF84E8", "#FFA9E7", "#B3D89C", "#77A6B6", "#932F6D", "#420039", "#1E3231"];

  var randomFont = fonts[Math.floor(Math.random()*fonts.length)];
  var randomColor = colors[Math.floor(Math.random()*fonts.length)];
  var randomBackgroundColor = colors[Math.floor(Math.random()*colors.length)];

  heading.style.fontFamily = randomFont;
  runButton.style.fontFamily = randomFont;
  fortuneHTML.style.color = randomColor;
  background.style.backgroundColor = randomBackgroundColor;
  heading.style.textShadow = "5px 5px 1px" + randomBackgroundColor;
  tagline.style.textDecoration = "underline";
  tagline.style.textDecorationStyle = "wavy";
  tagline.style.textDecorationColor = randomBackgroundColor;
}
