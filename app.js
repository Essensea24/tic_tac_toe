var boxArr = document.getElementsByClassName("boxes");

var button = document.getElementById("refreshButton");

var one = document.getElementById("firstHit");

var two = document.getElementById("secondHit");
var oneNumber = document.getElementById("oneResult");
var twoNumber = document.getElementById("twoResult");


var hit="player2"

gameStart();

button.addEventListener("click", clearBoard);
one.addEventListener("click", luckyNumberOne);
two.addEventListener("click", luckyNumberTwo);



function luckyNumberOne() {
	oneNumber.innerHTML= Math.floor(Math.random()*100);
	alert(oneNumber.innerHTML);
}

function luckyNumberTwo() {
	twoNumber.innerHTML= Math.floor(Math.random()*100);
	alert(twoNumber.innerHTML);
}

function clearBoard(){
	for ( i=0; i<9;i++) {
	boxArr[i].innerHTML = "";
	boxArr[i].style.backgroundImage = "";
	hit="player2"
	}
	alert("Board is cleared!")

}




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
			content = "x";
			this.style.backgroundImage="url('x1.jpg')"
			this.innerHTML = content;
		} else if (hit = "palyer1" && this.innerHTML===""){
			hit = "player2";
			content = "O";
			this.style.backgroundImage="url('0.png')";
			this.	innerHTML = content;
		}
		console.log("this is running")
		winnerIs()
}



function winnerIs() {
	if ((boxArr[0].innerHTML==="x" && boxArr[1].innerHTML==="x" &&boxArr[2].innerHTML==="x") || (boxArr[0].innerHTML==="O" && boxArr[1].innerHTML==="O" && boxArr[2].innerHTML==="O")) {
		alert(boxArr[0].innerHTML + " Rock! GAME OVER"); clearBoard();
	} else if ((boxArr[3].innerHTML==="x" && boxArr[4].innerHTML==="x" &&boxArr[5].innerHTML==="x") || (boxArr[3].innerHTML==="O" && boxArr[4].innerHTML==="O" && boxArr[5].innerHTML==="O")) {
		alert(boxArr[3].innerHTML + " Rock! GAME OVER"); clearBoard();
	} else if ((boxArr[6].innerHTML==="x" && boxArr[7].innerHTML==="x" &&boxArr[8].innerHTML==="x") || (boxArr[6].innerHTML==="O" && boxArr[7].innerHTML==="O" && boxArr[8].innerHTML==="O")) {
		alert(boxArr[6].innerHTML + " Rock! GAME OVER"); clearBoard();
	} else if ((boxArr[0].innerHTML==="x" && boxArr[4].innerHTML==="x" &&boxArr[8].innerHTML==="x") || (boxArr[0].innerHTML==="O" && boxArr[4].innerHTML==="O" && boxArr[8].innerHTML==="O")) {
		alert(boxArr[0].innerHTML + " Rock! GAME OVER"); clearBoard();
	} else if((boxArr[2].innerHTML==="x" && boxArr[4].innerHTML==="x" &&boxArr[6].innerHTML==="x") || (boxArr[2].innerHTML==="O" && boxArr[4].innerHTML==="O" && boxArr[6].innerHTML==="O")) {
		alert(boxArr[2].innerHTML + " Rock! GAME OVER"); clearBoard();
	} else if ((boxArr[0].innerHTML==="x" && boxArr[3].innerHTML==="x" &&boxArr[6].innerHTML==="x") || (boxArr[0].innerHTML==="O" && boxArr[3].innerHTML==="O" && boxArr[6].innerHTML==="O")) {
		alert(boxArr[0].innerHTML + " Rock! GAME OVER"); clearBoard();
	} else if ((boxArr[1].innerHTML==="x" && boxArr[4].innerHTML==="x" &&boxArr[7].innerHTML==="x") || (boxArr[1].innerHTML==="O" && boxArr[4].innerHTML==="O" && boxArr[7].innerHTML==="O")) {
		alert(boxArr[1].innerHTML + " Rock! GAME OVER"); clearBoard();
	} else if ((boxArr[2].innerHTML==="x" && boxArr[5].innerHTML==="x" &&boxArr[8].innerHTML==="x") || (boxArr[8].innerHTML==="O" && boxArr[2].innerHTML==="O" && boxArr[5].innerHTML==="O")) {
		alert(boxArr[8].innerHTML + " Rock! GAME OVER!"); clearBoard();
	} else if (boxArr[0].innerHTML==="" || boxArr[1].innerHTML==="" || boxArr[2].innerHTML===""|| boxArr[3].innerHTML==="" || boxArr[4].innerHTML==="" || boxArr[5].innerHTML==="" || boxArr[6].innerHTML==="" || boxArr[7].innerHTML==="" || boxArr[8].innerHTML==="") {
		console.log("keep playing")
	} else {
		console.log("GAME OVER! Both languages S-U-C-K!"); clearBoard()
	}	
}


	