var canvas = document.getElementById("canvas"),
ctx = canvas.getContext("2d")
imgWood = document.getElementById("wood")
imgRope = document.getElementById("rope");

 // Variables
const CANVAS_X = CANVAS_Y = 500,
// the Down Bar
X_DOWN_BAR = 20, Y_DOWN_BAR = 460, WIDTH_DOWN_BAR = 20, LENGTH_DOWN_BAR = 300,
// the Rising Bar
X_RISING_BAR = 60, Y_RISING_BAR = 40, WIDTH_RISING_BAR = 420, LENGTH_RISING_BAR = 20,
// the Up Bar
X_UP_BAR = 20, Y_UP_BAR = 20, WIDTH_UP_BAR = 20, LENGTH_UP_BAR = 460,
// the Rope
X_ROPE = 300, Y_ROPE = 40, X_MOVE_ROPE = 300, Y_MOVE_ROPE = 60,
// the Head (x,y = center of ther head)
X_HEAD = 0, Y_HEAD = 0, RADIUS_HEAD = 0,
// the Body
X_BODY = 0, Y_BODY = 0, X_MOVE_BODY = 0, Y_MOVE_BODY = 0,
// the Arms
X_ARMS = 0, Y_ARMS = 0, X_MOVE_ARMS = 0, Y_MOVE_ARMS = 0,
// the Legs
X_START_LEGS = 0, Y_START_LEGS = 0, X_CENTER_LEGS = 0, Y_CENTER_LEGS = 0, X_END_LEGS = 0, Y_END_LEGS = 0;

function draw(error){
	ctx.fillStyle = "#000000";
	switch (error) {
		case 1:
			drawFloor();
			break;
		case 2:
				drawUp();
			break;
		case 3:
			drawUpper();
			break;
		case 4:
			drawRope();
			drawHead();
			break;
		case 5:
			drawBody();
			break;
		case 6:
			drawArms();
			break;
		case 7:
			drawLegs();
			break;
			default:
			console.error("Numero d'erreur introuvable");

	}

}
// bar bas
function drawFloor(){
	// ctx.fillRect(20,360,100,10);
	// ctx.fillRect(X_DOWN_BAR, Y_DOWN_BAR, LENGTH_DOWN_BAR, WIDTH_DOWN_BAR);
	ctx.drawImage(imgWood, X_DOWN_BAR, Y_DOWN_BAR, LENGTH_DOWN_BAR, WIDTH_DOWN_BAR);
}

//bar monte
function drawUp(){
	// ctx.fillRect(40,20,10,100);
	// ctx.fillRect(X_RISING_BAR, Y_RISING_BAR, LENGTH_RISING_BAR, WIDTH_RISING_BAR);
	ctx.drawImage(imgWood, X_RISING_BAR, Y_RISING_BAR, LENGTH_RISING_BAR, WIDTH_RISING_BAR);
}

//bar haut
function drawUpper(){
	// ctx.fillRect(20,10,100,10);
	// ctx.fillRect(X_UP_BAR, Y_UP_BAR, LENGTH_UP_BAR, WIDTH_UP_BAR);
	ctx.drawImage(imgWood, X_UP_BAR, Y_UP_BAR, LENGTH_UP_BAR, WIDTH_UP_BAR);
}

// corde
function drawRope(){
	ctx.beginPath();
	ctx.moveTo(X_ROPE, Y_ROPE);
	ctx.lineTo(X_MOVE_ROPE, Y_MOVE_ROPE);
	// ctx.moveTo(110,20);
	// ctx.lineTo(110, 30);
	ctx.stroke();
}

// tete
function drawHead(){
	ctx.beginPath();
	ctx.arc(X_HEAD, Y_HEAD, RADIUS_HEAD, 0, 2 * Math.PI);
	// ctx.arc(110, 40, 10, 0, 2 * Math.PI);     // arc(center.x, center.y, radius, startAngle, endAngla)
	ctx.stroke();
}

// corps
function drawBody(){
	ctx.beginPath();
	ctx.moveTo(X_BODY, Y_BODY);
	ctx.lineTo(X_MOVE_BODY, Y_MOVE_BODY);
	// ctx.moveTo(110, 50);
	// ctx.lineTo(110, 80);
	ctx.stroke();
}

// bras
function drawArms(){
	ctx.beginPath();
	ctx.moveTo(X_ARMS, Y_ARMS);
	ctx.lineTo(X_MOVE_ARMS, Y_MOVE_ARMS);
	// ctx.moveTo(90,60);
	// ctx.lineTo(130, 60);
	ctx.stroke();
}

// jambes
function drawLegs(){
	ctx.beginPath();
	ctx.moveTo(X_START_LEGS, Y_START_LEGS);
	ctx.lineTo(X_CENTER_LEGS, Y_CENTER_LEGS);
	ctx.lineTo(X_END_LEGS, Y_END_LEGS);
	// ctx.moveTo(100,100);
	// ctx.lineTo(110, 80);
	// ctx.lineTo(120, 100);
	ctx.stroke();
}
