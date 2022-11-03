let cars = [];
let timer = 0;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  noStroke();
  background("rgb(124,181,124)");

  timer++;
  if (timer > 7) {
    cars.push(new Car());
    timer = 0;
  }

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
  }

  //torch
  push();
  fill("rgb(129,77,77)");
  quad(295, 500, 305, 500, 315, 440, 285, 440);
  fill("rgb(218,65,0)");
  ellipse(width / 2, 435, 35, 25);
  pop();
}

class Car {
  // constructor
  constructor() {
    this.pos = createVector(width / 2, 440);
    this.vel = new createVector(random(1, -1), random(-2, -4));
    this.r = random(200, 240);
    this.g = random(50, 75);
    this.b = 0;
    this.a = random(150, 255);
  }

  // methods

  display() {
    fill(this.r, this.g, this.b, this.a);
    circle(this.pos.x, this.pos.y, 30);
    this.r -= 3;
    this.g -= 3;
    this.a -= 3;
  }

  move() {
    this.pos.add(this.vel);
  }
}
