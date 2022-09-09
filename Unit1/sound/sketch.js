/// <reference path="../../libs/TSDef/p5.global-mode.d.ts" /> 

let s1;

function preload() {
  s1 = loadSound("assets/evolution.mp3");
}


function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  s1.play();

}

function draw() {
  background("black");
  fill("white");

  text("This sound is called Evolution. It gives me 'Space Movie' vibes :)", 100, 100, 200, 200);
}


function mouseReleased() {
  if (s1.isPlaying()) {
    s1.pause();
  } else {
    s1.play();
  }
}
