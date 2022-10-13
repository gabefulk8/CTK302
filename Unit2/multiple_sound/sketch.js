let state = 0;
let img;
let lights;
let sepways;
let wheel;

function preload() {
  img = loadImage('assets/revalation.jpg');

  lights = loadSound('assets/Lights.mp3');
  sepways = loadSound('assets/SeparateWays.mp3');
  wheel = loadSound('assets/Wheel.mp3');
}

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(32);
  imageMode(CENTER);
}

function draw() {  
  switch (state) {

    case 0:
      background(160);
      image(img, width/2, height/2 + 75, 400,  400);
      text("Growing up, my favorite album was Revalation by Journey. Here are my 3 favorite songs from that album.", 25, 25, 550, 200);
      break;

    case 1:
      background(180);
      image(img, width/2, height/2 + 75, 400,  400);
      text("Wheel In The Sky", width/2, 100);
      if (!wheel.isPlaying()) {
        wheel.play();
      }
      break;

    case 2:
      background(200);
      image(img, width/2, height/2 + 75, 400,  400);
      text("Lights", width/2, 100);
      if (!lights.isPlaying()) {
        lights.play();
      }
      break;
    
    case 3: 
      background(220);
      image(img, width/2, height/2 + 75, 400,  400);
      text("Separate Ways", width/2, 100);
      if (!sepways.isPlaying()) {
        sepways.play();
      }
      break;
  }
}

function mouseReleased() {
  lights.stop();
  sepways.stop();
  wheel.stop();
  state++;
  if (state > 3) {
    state = 0;
  }
}