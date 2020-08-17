var cir_x, cir_y, r,g,b;
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(50);
}

function draw() {
	cir_x = random(windowWidth);
	cir_y = random(windowHeight);
	r = random(255);
	g = random(255);
	b = random(255);

	fill(r,g,b);
	ellipse(cir_x, cir_y, 24, 24);
}

function mousePressed() {
	background(50);
}