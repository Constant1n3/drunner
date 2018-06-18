/*function draw(){
	var canvas = document.getElementById('tutorial');
	if(canvas.getContext)
	{
		var ctx = canvas.getContext('2d');
		ctx.beginPath();
		ctx.moveTo(275,200);
		ctx.arc(200,200,25,0,Math.PI*2,true);
		ctx.fillStyle = "#FF6A6A";
		ctx.fill();
	}
}*/
	var newX = [10,178,356,538,712],test=0;
var canvas = document.querySelector("#tutorial");
    var context = canvas.getContext("2d");
function update() {
   context.clearRect(0,0, canvas.width, canvas.height);
   for (var i = 0; i < 3;i++) {

   	drawlines(context);
   	test++;
   }
  	
 	

 	
 	
  context.beginPath();
  context.arc(mouseX, mouseY, 10, 0, 2 * Math.PI, true);
  context.fillStyle = "#FF6A6A";
  context.fill();
  context.closePath();

  setTimeout(update,10);


}

var noR = getRandomInt(0,360);;
 function drawlines(context){
	
	if(test==0)
	var abcissa = canvas.width-(newX[0]++);
	else if(test==1)
	var abcissa = canvas.width-(newX[1]++);
    else if(test==2){
	var abcissa = canvas.width-(newX[2]++);
	test=0;
	}
	context.beginPath();
	context.fillRect(abcissa,0,15,noR);
	context.fillRect(abcissa,(noR+40),15,canvas.height);
	console.log(abcissa);
}


var canvasPos = getPosition(canvas);
var mouseX = 0;
var mouseY = 0;
canvas.addEventListener("mousemove",setMousePosition,false);
function setMousePosition(e){
	mouseX = e.clientX - canvasPos.x;
	mouseY = e.clientY - canvasPos.y;
}
update();
function getPosition(el) {
  var xPosition = 0;
  var yPosition = 0;
 
  while (el) {
    xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
    yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
    el = el.offsetParent;
  }
  return {
    x: xPosition,
    y: yPosition
  };
}       
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}