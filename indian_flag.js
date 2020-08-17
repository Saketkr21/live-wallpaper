function setup() {
	createCanvas(windowWidth, windowHeight);

	stroke(0);
	fill(255,90,10);
	rect(500,200,300,60);
	fill(255,255,255);
	rect(500,260,300,60);
	fill(0,255,0);
	rect(500,320,300,60);
	line(500,200,500,600);
	fill(0,0,255);
	var cir_x = 650, cir_y = 290, rad=59;
	for (let index = 0; index < 1; index++) {
		ellipse(cir_x, cir_y, rad-index, rad-index);
		
	}
	stroke(0);
	for(var i=0; i<windowWidth; i++){
		for(var j=0; j<windowHeight; j++){
			if( Math.sqrt( Math.pow(cir_x-i, 2) + Math.pow(cir_y-j, 2) ) == Math.floor(rad/2)+1 ){
				line(cir_x, cir_y, i, j);
			}
		}
	}
}

function draw() {

}