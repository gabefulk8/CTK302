let x = 0;
let v = 5;
let state = 0;
let timer = 0;

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
}

function draw() {
  background(100);
  
  
  //car
  fill("blue");
  rect(x, 750, 100, 50);
  x = x + v;
  if (x > width) {
    x = -100;
  }
  
  // stoplight with default gray lights. Colored lights are on top of gray
  fill("yellow");
  rect(width/2, height/2, 200, 600);
  fill(220);
  ellipse(width/2, height/2 + 170, 150, 150);
  ellipse(width/2, height/2, 150, 150);
  ellipse(width/2, height/2 - 170, 150, 150);
  
  
  switch (state) {
    case 0: //green
      v = 8;
      fill("green");
      ellipse(width/2, height/2 - 170, 150, 150);
      break;

    case 1: //yellow
      v = 4;
      fill("yellow");
      ellipse(width/2, height/2, 150, 150);
      break;

    case 2: //red
      if (x > (width/2 -5) && x < (width/2 + 5)) {
        v = 0;
      }
      fill("red");
      ellipse(width/2, height/2 + 170, 150, 150);
      break;
  }
  
  timer++;
  if (timer > 240) {
    state ++;
    timer = 0;
    if (state > 2)  {
      state = 0;
    }
  }
}