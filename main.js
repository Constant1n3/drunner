

var quizButton = document.querySelector('button');
function quiZ(){
var know = prompt('Who won the miss universe 2017 ? a) Priyanka Chopra b)Emma watson or c)Manushi Chillar');
localStorage.setItem('ans', know);
if(know === "Manushi Chillar"){
	alert('Correct Answer ! you have both good memory and good GK')
}
else{
	alert('wrong answer');
}
}


quizButton.onclick = function(){
 quiZ();
}

var myHeading = document.querySelector('h5');
var editButton = document.querySelector("#eDit")
	function eDIT(){
		var chang = prompt('Suggest alternative for the text below the image');
		
		myHeading.textContent = chang;

	}

editButton.onclick = function(){
	eDIT();
}

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'dawn.jpeg') {
      myImage.setAttribute ('src','macro-leaf.jpeg');
    } else if(mySrc === 'macro-leaf.jpeg') {
      myImage.setAttribute ('src','dawn.jpeg');
    }
    
    
}
