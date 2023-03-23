function setup() {
  createCanvas(600, 600);
  background("#87ceeb");
}

function draw() {
  // dealuri verzi
  fill("#a8e6cf");
  noStroke();
  ellipse(500, 600, 800, 500);
  fill("#9bd1c9");
  ellipse(200, 600, 600, 300);

// perete
fill("#f7dc6f");
strokeWeight(4);
stroke("#d4ac0d");
rect(150, 200, 300, 300);

// acoperiș
fill("#e74c3c");
strokeWeight(4);
stroke("#c0392b");
triangle(150, 200, 450, 200, 300, 100);

// fereastră stânga
fill("#ecf0f1");
strokeWeight(2);
stroke("#bdc3c7");
rect(200, 280, 80, 100);
strokeWeight(4);
line(240, 280, 240, 380);
line(200, 330, 280, 330);

// fereastră dreapta
fill("#ecf0f1");
strokeWeight(2);
stroke("#bdc3c7");
rect(320, 280, 80, 100);
strokeWeight(4);
line(360, 280, 360, 380);
line(320, 330, 400, 330);

}