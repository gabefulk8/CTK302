/// <reference path="../../libs/TSDef/p5.global-mode.d.ts" /> 


let state = 0;
let timer = 0;
let ball;

function setup() {
  createCanvas(400, 400);
  noStroke();
  ball = loadImage('assets/ball.png')
}

function draw() {
  switch (state) {

    case 0:
      background("green");
      fill("rgb(73,194,255)");
      rect(0, 0, width, 175);
      
      //net
      //vert
      fill("rgb(153,152,152)");
      rect(width/4 +20, height/4, 5, height/3);
      rect(width/4 +40, height/4, 5, height/3);
      rect(width/4 +60, height/4, 5, height/3);
      rect(width/4 +80, height/4, 5, height/3);
      rect(width/4 +100, height/4, 5, height/3);
      rect(width/4 +120, height/4, 5, height/3);
      rect(width/4 +140, height/4, 5, height/3);
      rect(width/4 +160, height/4, 5, height/3);
      rect(width/4 +180, height/4, 5, height/3);
      //hori
      rect(width/4, height/4 +20, width/2, 5);
      rect(width/4, height/4 +40, width/2, 5);
      rect(width/4, height/4 +60, width/2, 5);
      rect(width/4, height/4 +80, width/2, 5);
      rect(width/4, height/4 +100, width/2, 5);
      rect(width/4, height/4 +120, width/2, 5);
      
      //goal
      fill("white");
      rect(width/4, height/4, 10, height/3);
      rect(width/4, height/4, width/2, 10);
      rect(width/4 * 3, height/4, 10, height/3);
      
      //shooter
      fill("red");
      rect(64, 280, 52, 120);
      fill("black");
      rect(68, 280, 8, 120);
      rect(86, 280, 8, 120);
      rect(104, 280, 8, 120);  
      fill("rgb(241,230,192)");
      circle(90, 250, 70);
      
      //keeper
      fill("blue");
      rect(width/2 -16, height/3 +40, 35, 70);
      fill("rgb(241,230,192)");
      circle(width/2 +2, 160, 40);
      
      //ball
      image(ball, 176, 350, 56, 48);
      
      //text
      textAlign(CENTER);
      fill("white");
      textSize(18);
      text("He lines up to take the penalty kick...", width/2, 40);

      timer++;
      if (timer > 3 * 60) {
        timer = 0;
        state = 1;
      }
      break;

    case 1:
      background("green");
      fill("rgb(73,194,255)");
      rect(0, 0, width, 175);
      
      //net
      //vert
      fill("rgb(153,152,152)");
      rect(width/4 +20, height/4, 5, height/3);
      rect(width/4 +40, height/4, 5, height/3);
      rect(width/4 +60, height/4, 5, height/3);
      rect(width/4 +80, height/4, 5, height/3);
      rect(width/4 +100, height/4, 5, height/3);
      rect(width/4 +120, height/4, 5, height/3);
      rect(width/4 +140, height/4, 5, height/3);
      rect(width/4 +160, height/4, 5, height/3);
      rect(width/4 +180, height/4, 5, height/3);
      //hori
      rect(width/4, height/4 +20, width/2, 5);
      rect(width/4, height/4 +40, width/2, 5);
      rect(width/4, height/4 +60, width/2, 5);
      rect(width/4, height/4 +80, width/2, 5);
      rect(width/4, height/4 +100, width/2, 5);
      rect(width/4, height/4 +120, width/2, 5);
      
      //goal
      fill("white");
      rect(width/4, height/4, 10, height/3);
      rect(width/4, height/4, width/2, 10);
      rect(width/4 * 3, height/4, 10, height/3);

      //keeper
      fill("blue");
      rect(width/2 -10, height/3 +40, 35, 70);
      fill("rgb(241,230,192)");
      circle(width/2 +8, 160, 40);
          
      //shooter
      fill("red");
      rect(165, 275, 48, 110);
      fill("black");
      rect(172, 275, 6, 110);
      rect(186, 275, 6, 110);
      rect(200, 275, 6, 110);  
      fill("rgb(241,230,192)");
      circle(189, 250, 55);
      
      //ball
      image(ball, 225, 255, 47, 40);
      
      //text
      textAlign(CENTER);
      fill("white");
      textSize(18);
      text("He takes the shot...", width/2, 40);
      
      timer++;
      if (timer > 1 * 60) {
        timer = 0;
        state = 2;
      }
      break;


    case 2:
      background("green");
      fill("rgb(73,194,255)");
      rect(0, 0, width, 175);
      
      //net
      //vert
      fill("rgb(153,152,152)");
      rect(width/4 +20, height/4, 5, height/3);
      rect(width/4 +40, height/4, 5, height/3);
      rect(width/4 +60, height/4, 5, height/3);
      rect(width/4 +80, height/4, 5, height/3);
      rect(width/4 +100, height/4, 5, height/3);
      rect(width/4 +120, height/4, 5, height/3);
      rect(width/4 +140, height/4, 5, height/3);
      rect(width/4 +160, height/4, 5, height/3);
      rect(width/4 +180, height/4, 5, height/3);
      //hori
      rect(width/4, height/4 +20, width/2, 5);
      rect(width/4, height/4 +40, width/2, 5);
      rect(width/4, height/4 +60, width/2, 5);
      rect(width/4, height/4 +80, width/2, 5);
      rect(width/4, height/4 +100, width/2, 5);
      rect(width/4, height/4 +120, width/2, 5);
      
      //goal
      fill("white");
      rect(width/4, height/4, 10, height/3);
      rect(width/4, height/4, width/2, 10);
      rect(width/4 * 3, height/4, 10, height/3);
      
      //keeper
      angleMode(DEGREES);
      fill("blue");
      push();
      rotate(60);
      rect(285, -120, 35, 70);
      pop();
      fill("rgb(241,230,192)");
      circle(width/2 +68, 194, 40);
      
      //shooter
      fill("red");
      rect(165, 275, 48, 110);
      fill("black");
      rect(172, 275, 6, 110);
      rect(186, 275, 6, 110);
      rect(200, 275, 6, 110);  
      fill("rgb(241,230,192)");
      circle(189, 250, 55);
      
      //ball
      image(ball, 265, 125, 38, 32);
      
      //text
      textAlign(CENTER);
      fill("white");
      textSize(18);
      text("GOOOOOAAAALLL!!", width/2, 40);


      timer++;
      if (timer > 4 * 60) {
        timer = 0;
        state = 0;
      }
      break;
  }
}
