let state = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
}

function draw() {
  switch (state) {
    case 0:
      background(180);
      fill("black");
      textSize(36);
      text("I used to hate facial hair...", 250, 250);
      break;

    case 1:
      background(0, 230, 0);
      text("... but then it grew on me!", 250, 250);
      break;
  }
}

function mouseReleased() {
  if (state == 1) {
    state = 0;
  } else {
    state = 1;
  }
}
