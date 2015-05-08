
//This is a working function to get value for player1 and player2
var boxArr = document.getElementsByClassName("boxes");

console.log(boxArr.length);

gameStart();

var hit="player2"



function gameStart() {
	 console.log("function is running");


		for ( i=0; i<9;i++) {
			console.log("i is running");
		boxArr[i].addEventListener("click", clickInitiated);
		}
}

function clickInitiated() {

		console.log("evenlistener is running");
		
		if ((hit == "player2" && this.style.backgroundImage!=='') || (hit == "player1" && this.style.backgroundImage!=='')) {

			alert("This box is taken by an awesome language. Select another box!")
		} else if (hit == "player2" && this.innerHTML==='') {
			hit = "player1";
			this.style.backgroundImage="url('js.jpeg')"
		} else if (hit = "palyer1" && this.innerHTML===""){
			hit = "player2";
			this.style.backgroundImage="url('HTML.jpeg')"
		}
}
