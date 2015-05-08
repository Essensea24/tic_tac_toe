// declare variable boxArr to an array td array, which is tds

var boxArr = document.getElementsByClassName("box");

var score = 0;

initialize();


//this function caculates the randombox that will be selected
function randomBox() {
	return Math.floor(Math.random() * 9);
	console.log("#1 is running")
}

function initialize() {
	//this line assign the inner value of html of random array(array of random box to image)
	boxArr[randomBox()].innerHTML= "<img src='mole.png'>";
	console.log("randomBox is running");
	//for loop is being used here to assign eventlistener on click to all the buttons. "This" here is button that user clicks on, which is the eventlistener on click itself.  
	for(var i = 0; i < boxArr.length; i++){
        boxArr[i].addEventListener('click', function(){
        	//So if the event click happens on the button that has has inner html of not empty, sent clicked button value to empty, and add score of 1. if we look at variable above, score is actually start at 0. if this code run, score then would be equal to 1.
            if(this.innerHTML !== ""){
                this.innerHTML = "";
                score++;
                //to link the score value to the scoreBoard id, we then use Dom get element by id to target scoreboard id, then user .innerhtml to change the string value of that particular id.
                document.getElementById('scoreBoard').innerHTML = score;
                //this cold is being used to reset the image to another random box, if click happens on the image box.
                boxArr[randomBox()].innerHTML = "<img src='mole.png'>"
                // console.log("score add is running");
            } else {
                score--;
                //notice that we only copy the scoreboard inner html value code here because we only want to the score to change, but not the image on the box itself. 
                document.getElementById('scoreBoard').innerHTML = score;
                // console.log("score - is running");

                }
        })
    }
}
