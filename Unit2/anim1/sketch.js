/// <reference path="../../libs/TSDef/p5.global-mode.d.ts" /> 

let x = -400;
let txt = "Sweet Home Alabama";
let f1;
let state = 0;
let v = 3;

function setup() {
  createCanvas(500, 500);
  f1 = loadFont("assets/qwitcherReg.ttf");
}

function draw() {
  textFont(f1, 72);

  if (state == 0) {

    background(220);
    fill("black");
    text(txt, x, 200);
  
    x += v;

    if (x > width) {
      x = -550; 
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
      x = -400; 
      txt = "Sweet Home Alabama"; 
      state = 2;
    }
  }

  if (state == 2) {

    background(220);
    fill("black");
    text(txt, x, 200);
  
    x += v;

    if (x > width) {
      x = -550; 
      txt = "Lord I'm comin' home to you"; 
      state = 3;
    }
  }
  if (state == 3) {

    background(0, 255, 0);
    fill("black");
    text(txt, x, 200);
  
    x += v;

    if (x > width) {
      x = -400; 
      txt = "Sweet Home Alabama"; 
      state = 0;
    }
  }
}
