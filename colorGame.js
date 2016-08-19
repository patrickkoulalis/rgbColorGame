var numSq = 6;
var colors = genRandomColors(numSq);
var square = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var targetColor = pickColor();
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var modeBtn = document.querySelectorAll(".mode");

//init app
init();

//Reset game
resetBtn.addEventListener("click" , function(){
	reset();
})

function init() {
	modeBtnListeners();
	sqGen();
	reset();
}

function sqGen() {
	for(var i = 0; i < square.length; i++){
		square[i].addEventListener("click", function(){
			var clickedColor = this.style.background;
			if(clickedColor === targetColor){
				message.textContent = "Correct!";
				changeColors(clickedColor);
				h1.style.background = clickedColor;
				resetBtn.textContent = "Play Again?";
			} else {
				this.style.background = "#232323";
				message.textContent = "Try Again"
			}
		});
	}
}

function modeBtnListeners() {
	for(var i = 0; i < modeBtn.length; i++){
		modeBtn[i].addEventListener("click" ,  function(){
			modeBtn[0].classList.remove("selected");
			modeBtn[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSq = 3: numSq = 6;
			reset();
		});
	}
}

function changeColors(color) {
	for(var i = 0; i < square.length; i++){
		square[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random]
}

function genRandomColors(num) {
	var arr = [];
	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset() {
	//Gen new colors
	colors = genRandomColors(numSq);
	// Pick new target color
	targetColor = pickColor();
	//Change color diplay to show new target color
	colorDisplay.textContent = targetColor;
	//Gen new sqaures with arr colors
	for(var i = 0; i < square.length; i++){
		square[i].style.background = colors[i];
		if(colors[i]){
			square[i].style.display = "block";
			square[i].style.background = colors[i];
		} else {
			square[i].style.display = "none";
		}
	}
	h1.style.background = "#4682b4";
	resetBtn.textContent = "New Colors";
	message.textContent = ""
}