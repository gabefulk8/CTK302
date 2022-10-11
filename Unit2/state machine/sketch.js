let amt, startColor, newColor, change;
let state = 0;

function setup() {
  noStroke();
  createCanvas(400, 400);
  colorMode(RGB);
  startColor = color(200, 200, 200);
  newColor = color(random(180, 255), 200, 0);
  change = 0;
}

function draw() {
  switch (state) {
    case 0:
      background(220);
      for (let i = 0; i < width; i += 15) {
        for (let j = 0; j < height; j += 15) {
          frameRate(10);
          fill(lerpColor(startColor, newColor, change));
          circle(i, j, 25);
          change += 0.01;
          newColor = color(random(180, 255), 0, 200);
          if (change >= 1) {
            change = 0;
          }
        }
      }
      break;
    case 1:
      background("grey");
      for (let i = 0; i < width; i += 10) {
        for (let j = 0; j < height; j += 10) {
          if (j % 30 == 0) {
            fill("white");
            rect(i, j, 10, 15);
          } else if (j % 20 == 0) {
            fill("red");
            rect(i, j, 10, 15);
          } else {
            fill("blue");
            rect(i, j, 10, 15);
          }
        }
      }

      break;
    case 2:
      background(220);
      for (let i = 1; i < width; i += 20) {
        for (let j = 1; j < height; j += 20) {
          if (i % 20 == 0) {
            fill("black");
            triangle(i, j, i + 10, j, i + 5, j - 10);
          } else fill("white");
          triangle(i, j, i + 10, j, i + 5, j - 10);
        }
      }
      break;
    case 3:
      background("rgb(0,103,0)");
      for (let j = 0; j < 3000; j += 25) {
        for (let i = 0; i < 3000; i += 25) {
          fill(50, random(190, 255), 50);
          push();
          translate(width / 2, -height - 1000);
          rotate(45);
          rect(i, j, 20, 20);
          pop();
        }
      }
      break;
    case 4:
      background("black");
      for (let j = 0; j < 100; j++) {
        for (let i = 0; i < 100; i++) {
          push();
          fill("green");
          rect(i * 25, j * 5, (i + j) / (i - j), (i + j) * (i - j));
          pop();
        }
      }
      break;
  }
}
function mouseReleased() {
  if (state < 4) {
    state++;
  } else {
    state = 0;
  }
}
