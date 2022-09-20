/// <reference path="../../libs/TSDef/p5.global-mode.d.ts" /> 

let x = 0;
let txt = "Sweet Home Alabama";
let font;
let state = 0;
let v = 2;

function setup() {
  createCanvas(500, 500);
  font = loadFont("assets/oswald.ttf");
}

function draw() {
  if (state == 0) {

    background(220);
    textSize(32);
    fill("black");
    text(txt, x, 200);
  
    x += v;

    if (x > width) {
      x = 0; 
      txt = "Where the skies are so Blue"; 
      state = 1;
    }
  }

  if (state == 1) {
    background(0, 0, 255);
    fill("black");
    text(txt, x, 200);
  
    x += v;

    if (x > width) {
      x = 0; 
      txt = "Sweet Home Alabama"; 
      state = 2;
    }
  }

  if (state == 2) {

    background(220);
    textSize(32);
    fill("black");
    text(txt, x, 200);
  
    x += v;

    if (x > width) {
      x = 0; 
      txt = "Lord I'm comin' home to you"; 
      state = 3;
    }
  }
  if (state == 3) {

    background(0, 255, 0);
    textSize(32);
    fill("black");
    text(txt, x, 200);
  
    x += v;

    if (x > width) {
      x = 0; 
      txt = "Sweet Home Alabama"; 
      state = 0;
    }
  }
}
