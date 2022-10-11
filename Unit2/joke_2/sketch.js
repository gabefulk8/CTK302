let state = 0;
let timer = 0;

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
      text("What do you call a belt made of watches?", 50, 210, 400, 80);
      
      timer++
      if (timer == 3 * 60) {
        state = 1;
        timer = 0;
      }
      break;

    case 1:
      background(0, 0, 220);
      text("A waist of time!", 250, 250);

      timer++
      if (timer == 5 * 60) {
        state = 0;
        timer = 0;
      }
      break;
  }
}
