var calculateNum = document.getElementById("half-button");
var getFortune = document.getElementById("fortune-b");
var outputFortune = document.getElementById("fortune-output");

getFortune.addEventListener("click", fortune);
calculateNum.addEventListener("click", calculate);
outputFortune.addEventListener("click", restyle);

function calculate(){
  var inputNum = document.getElementById("half-input").value;
  var outputNum = inputNum / 2;
  alert("Half of " + inputNum + " is " + outputNum);
  console.log("Half of " + inputNum + " is " + outputNum);
}


function fortune(){
  var name = document.getElementById("fortune-input").value;
  var fortunes = ["The fortune you seek is in another cookie.", "A foolish man listens to his heart. A wise man listens to cookies.", "You will be hungry again in one hour.", "Never forget a friend. Especially if he owes you.", "It is a good day to have a good day.", "Ask your mom instead of a cookie.", "You are not illiterate.", "404. Fourtune not found."];
  outputFortune.innerHTML = name + ": " + fortunes[Math.floor(Math.random() * fortunes.length)];
}

function restyle(){
  var color = ["black", "#a81919", "#c8ffa6", "yellow", "#ffa270", "#27c2a5", "#1d2a7a", "#ad68bd"];
  var size = ["2vh", "3vh", "0.8vh", "5vh", "8vh", "4vh", "6vh"];
  var textDecor = ["overline", "line-through", "underline", "underline overline"];

  var colorI = Math.floor(Math.random() * color.length);
  var sizeI = Math.floor(Math.random() * size.length);
  var textDecorI = Math.floor(Math.random() * textDecor.length);

  outputFortune.style.color = color[colorI];
  outputFortune.style.fontSize = size[sizeI];
  outputFortune.style.textDecoration = textDecor[textDecorI];
}
