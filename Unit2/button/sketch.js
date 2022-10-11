/// <reference path="../../libs/TSDef/p5.global-mode.d.ts" /> 

let state = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  textSize(36);
  strokeWeight(4);
}

function draw() {
  background(180);
  fill("red");
  rect(125, 250, 250, 80)

  switch (state) {
    case 0:
      fill("black");
      text("Don't press this button.", 50, 130, 400, 80 );
      break;

    case 1:
      fill("black");
      text("Dude, what did I just say, cut it out!", 50, 130, 400, 80);
      break;
      
    case 2:
      fill("black");
      text("Alright, whatever. I give up.", 50, 130, 400, 80);
      break;
  }
}

function mouseReleased() {
  if (mouseX > 125 && mouseX < 375 && mouseY > 250 && mouseY < 330) {
    if (state < 2) {
      state++;
    } else {
      state = 0;
    }
  }
}
