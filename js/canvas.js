var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

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
			console.error("numero d'erreur introuvable");

	}

}
function drawFloor(){
	// bar bas
	ctx.fillRect(20,120,100,10);
}
function drawUp(){
	//bar monte
	ctx.fillRect(40,20,10,100);
}
function drawUpper(){
	//bar haut
	ctx.fillRect(20,10,100,10);
}
function drawRope(){
	// corde
	ctx.beginPath();
	ctx.moveTo(110,20);
	ctx.lineTo(110, 30);
	ctx.stroke();
}
function drawHead(){
	// tete
	ctx.beginPath();
	ctx.arc(110, 40, 10, 0, 2 * Math.PI);     // arc(center.x, center.y, radius, startAngle, endAngla)
	ctx.stroke();
}
function drawBody(){
	// corps
	ctx.beginPath();
	ctx.moveTo(110, 50);
	ctx.lineTo(110, 80);
	ctx.stroke();
}
function drawArms(){
	// bras
	ctx.beginPath();
	ctx.moveTo(90,60);
	ctx.lineTo(130, 60);
	ctx.stroke();
}
function drawLegs(){
	// jambes
	ctx.beginPath();
	ctx.moveTo(100,100);
	ctx.lineTo(110, 80);
	ctx.lineTo(120, 100);
	ctx.stroke();
}
