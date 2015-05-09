var boxArr = document.getElementsByClassName("boxes");

var button = document.getElementById("refreshButton");


var hit="player2"
var result;
gameStart();

button.addEventListener("click", clearBoard)

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
			content = "JS";
			this.style.backgroundImage="url('js.jpeg')"
			this.innerHTML = content;
		} else if (hit = "palyer1" && this.innerHTML===""){
			hit = "player2";
			content = "HTML";
			this.style.backgroundImage="url('HTML.jpeg')";
			this.	innerHTML = content;
		}
		console.log("this is running")
		winnerIs()
}



function winnerIs() {
	if ((boxArr[0].innerHTML==="JS" && boxArr[1].innerHTML==="JS" &&boxArr[2].innerHTML==="JS") || (boxArr[0].innerHTML==="HTML" && boxArr[1].innerHTML==="HTML" && boxArr[2].innerHTML==="HTML")) {
		alert(boxArr[0].innerHTML + " Rock! GAME OVER")
	} else if ((boxArr[3].innerHTML==="JS" && boxArr[4].innerHTML==="JS" &&boxArr[5].innerHTML==="JS") || (boxArr[3].innerHTML==="HTML" && boxArr[4].innerHTML==="HTML" && boxArr[5].innerHTML==="HTML")) {
		alert(boxArr[3].innerHTML + " Rock! GAME OVER")
	} else if ((boxArr[6].innerHTML==="JS" && boxArr[7].innerHTML==="JS" &&boxArr[8].innerHTML==="JS") || (boxArr[6].innerHTML==="HTML" && boxArr[7].innerHTML==="HTML" && boxArr[8].innerHTML==="HTML")) {
		alert(boxArr[6].innerHTML + " Rock! GAME OVER")
	} else if ((boxArr[0].innerHTML==="JS" && boxArr[4].innerHTML==="JS" &&boxArr[8].innerHTML==="JS") || (boxArr[0].innerHTML==="HTML" && boxArr[4].innerHTML==="HTML" && boxArr[8].innerHTML==="HTML")) {
		alert(boxArr[0].innerHTML + " Rock! GAME OVER")
	} else if((boxArr[2].innerHTML==="JS" && boxArr[4].innerHTML==="JS" &&boxArr[6].innerHTML==="JS") || (boxArr[2].innerHTML==="HTML" && boxArr[4].innerHTML==="HTML" && boxArr[6].innerHTML==="HTML")) {
		alert(boxArr[2].innerHTML + " Rock! GAME OVER")
	} else if ((boxArr[0].innerHTML==="JS" && boxArr[3].innerHTML==="JS" &&boxArr[5].innerHTML==="JS") || (boxArr[0].innerHTML==="HTML" && boxArr[3].innerHTML==="HTML" && boxArr[5].innerHTML==="HTML")) {
		alert(boxArr[0].innerHTML + " Rock! GAME OVER")
	} else if ((boxArr[1].innerHTML==="JS" && boxArr[4].innerHTML==="JS" &&boxArr[7].innerHTML==="JS") || (boxArr[1].innerHTML==="HTML" && boxArr[4].innerHTML==="HTML" && boxArr[7].innerHTML==="HTML")) {
		alert(boxArr[1].innerHTML + " Rock! GAME OVER")
	} else if ((boxArr[2].innerHTML==="JS" && boxArr[5].innerHTML==="JS" &&boxArr[5].innerHTML==="JS") || (boxArr[8].innerHTML==="HTML" && boxArr[2].innerHTML==="HTML" && boxArr[5].innerHTML==="HTML")) {
		alert(boxArr[8].innerHTML + " Rock! GAME OVER!")
	} else if (boxArr[0].innerHTML==="" || boxArr[1].innerHTML==="" || boxArr[2].innerHTML===""|| boxArr[3].innerHTML==="" || boxArr[4].innerHTML==="" || boxArr[5].innerHTML==="" || boxArr[6].innerHTML==="" || boxArr[7].innerHTML==="" || boxArr[8].innerHTML==="") {
		console.log("keep playing")
	} else {
		console.log("GAME OVER! Both languages S-U-C-K!")
	}	
}


