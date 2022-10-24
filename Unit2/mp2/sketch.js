/// <reference path="../../libs/TSDef/p5.global-mode.d.ts" /> 

let state = 0;
let timer = 0;
let winA;
let winB;
let FoL;
let pLord;
let pLordMus;

function preload () {
  winA = loadImage('assets/winA.png');
  winB = loadImage('assets/winB.png');
  FoL = loadImage('assets/FoL.png');
  pLord = loadSound('assets/Precious_Lord.mp3');
  pLordMus = loadImage('assets/plordmusic.png');
}

function setup() {
  createCanvas(800, 800);
  textAlign(CENTER);
  textSize(28);
}

function draw() {
  switch (state) {
    case 0:
      background(FoL);
      fill(0, 255, 100);
      stroke(0, 0, 0);
      strokeWeight(5);
      text("Before I transferred here, I was very involved in my previous college's choir. Here is my favorite experience with them!", 40, 650, 720, 100);
      timer++;
      if (timer > 6 * 60) {
        timer = 0;
        state = 1;
      }
      break;

    case 1:
      background("blue");
      image(winA, 0, 0, width, height/2);
      image(winB, 0, height/2, width, height/2);
      fill(0, 255, 0);
      stroke(0, 0, 0);
      strokeWeight(10);
      text("We went on a trip to Europe to Iceland, Germany, and then finally to Austria for an International Choir Competition... And we won 1st place in both categories! It was an amazing experience :)", 40, 600, 720, 200);
      timer++;
      if (timer > 10 * 60) {
        timer = 0;
        state = 2;
      }
      break;


    case 2:
      if (!pLord.isPlaying()) {
        pLord.play();
      }
      background(pLordMus);
      fill(0, 255, 100);
      stroke(0, 0, 0);
      strokeWeight(5);
      text("Here is my favorite song that we sang for the competition called Precious Lord. Click at any time to return to the start of the presentation.", 40, 650, 720, 100);
      break;
  }
}

function mouseReleased() {
  if (state == 2) {
    timer = 0;
    state = 0;
    pLord.stop();
  }
}
