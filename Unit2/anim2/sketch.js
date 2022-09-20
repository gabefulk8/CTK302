let x = 0;
let v = 2;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(225);
  
  push();
  translate(x, 0);
  avatar();
  x += 5;

  if (x > width - 200) {
    x = -300;
  }
  pop();
}

function avatar() {
  noStroke();

  //body
  fill("rgb(110,110,110)");
  ellipse(250, 250, 80, 180);

  //head
  fill("rgb(110,110,110)");
  circle(250, 140, 70);
  fill("rgb(100, 100, 100)");
  quad(215, 135, 285, 135, 290, 170, 210, 170);

  fill("rgb(185,185,185)");
  circle(250, 150, 57);

  fill("rgb(110,110,110)");
  ellipse(250, 126, 50, 15);
  ellipse(250, 170, 80, 30);

  fill("rgb(230,230,230)");
  ellipse(262, 146, 9, 13);
  ellipse(242, 146, 9, 13);

  fill("rgb(180,29,180)")
  ellipse(262, 147, 5, 7);
  ellipse(242, 147, 5, 7);

  //hands
  fill("rgb(185,185,185)");
  circle(202, 262, 15);
  circle(297, 261, 15);

  //arms
  fill("rgb(100, 100, 100)");
  triangle(276, 180, 305, 260, 290, 265);
  triangle(224, 180, 210, 265, 193, 260);

  //feet
  fill("rgb(90, 90, 90)");
  ellipse(235, 332, 40, 30);
  ellipse(265, 332, 40, 30);
}