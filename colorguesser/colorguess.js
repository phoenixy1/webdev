var maxSquares = 6;
var winningColor;
init();

function init() {
	generateGame();
	document.querySelector("#newColors").addEventListener("click", generateGame);
	document.querySelector("#easy").addEventListener("click", makeGameEasy);
	document.querySelector("#hard").addEventListener("click", makeGameHard);
}

function generateGame() {
	var winningSquareIndex = getRandomInt(0, maxSquares-1);
	document.querySelector("#guessResult").innerText = "";
	document.querySelector("#header").style.background = "rgb(80, 120, 183)";
	document.querySelector("#newColors").innerText="New Colors";

	for (var i=0; i < maxSquares; i++) {
		var r = getRandomInt(0, 255);
		var g = getRandomInt(0, 255);
		var b = getRandomInt(0, 255);
		targetColor = "rgb(" + r +","+ g + "," + b + ")";
		var currentSquare = document.querySelectorAll(".colorBlock")[i];
		currentSquare.style.background = targetColor;
		currentSquare.classList.remove("invisible");
		currentSquare.removeEventListener("click", hasWon);
		currentSquare.removeEventListener("click", wrongGuess);

		if (i == winningSquareIndex) {
			winningColor = targetColor;
			currentSquare.addEventListener("click", hasWon);
			document.querySelector("#targetColor").innerText = targetColor;
		} else {
			currentSquare.addEventListener("click", wrongGuess);
		}
	}

}

function wrongGuess() {
	this.classList.add("invisible");
	document.querySelector("#guessResult").innerText = "try again!";
}

function hasWon() {
	document.querySelector("#guessResult").innerText = "Correct!";
	for (var i=0; i < maxSquares; i++) {
		var currentSquare = document.querySelectorAll(".colorBlock")[i];
		currentSquare.style.background = winningColor;
		currentSquare.classList.remove("invisible");
	}
	document.querySelector("#header").style.background = winningColor;
	document.querySelector("#newColors").innerText="Play Again?";
}

function makeGameEasy() {
	maxSquares = 3;
	this.classList.add("selectedDifficulty");
	this.classList.remove("clickableElement");
	document.querySelector("#hard").classList.remove("selectedDifficulty");
	document.querySelector("#hard").classList.add("clickableElement");
	document.querySelector("#bottomRow").classList.add("d-none");
	document.querySelector("#bottomRow").classList.remove("d-flex");
	generateGame();

}

function makeGameHard() {
	maxSquares = 6;
	this.classList.add("selectedDifficulty");
	this.classList.remove("clickableElement");
	document.querySelector("#easy").classList.remove("selectedDifficulty");
	document.querySelector("#easy").classList.add("clickableElement");
	document.querySelector("#bottomRow").classList.remove("d-none");
	document.querySelector("#bottomRow").classList.add("d-flex");
	generateGame();
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}