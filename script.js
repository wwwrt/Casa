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

// ușă
fill("#e67e22");
strokeWeight(2);
stroke("#d35400");
rect(280, 400, 40, 100);
fill("#ecf0f1");
strokeWeight(4);
ellipse(300, 450, 10, 10);

// horn
push(); 
translate(250, 100); 
scale(0.8); 
fill("#95a5a6");
strokeWeight(4);
stroke("#7f8c8d");
rect(0, 0, 80, 80);
strokeWeight(2);
stroke("#bdc3c7");
line(20, 0, 20, -20);
line(60, 0, 60, -20);
line(40, -20, 40, -30);
pop(); 

// balcon lateral
fill("#f0e68c");
strokeWeight(4);
stroke("#b8860b");
rect(440, 250, 80, 70);
fill("#8fbc8f");
strokeWeight(2);
stroke("#2e8b57");
rect(450, 255, 60, 20);

// centrare fum horn
translate(280, 80);

// fum horn
noStroke();
fill("#bdc3c7");
ellipse(0, 0, 50, 40);
fill("#d6d6d6");
ellipse(0, -20, 30, 10);
fill("#ffffff");
ellipse(0, -20, 20, 5);
fill("#d6d6d6");
ellipse(0, -25, 15, 5);
fill("#bdc3c7");
ellipse(0, -28, 10, 5);
}