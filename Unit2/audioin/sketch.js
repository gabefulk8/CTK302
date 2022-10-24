var mic;
var vol = 0;
var approachingVol = 0;
var far;
var lessfar;
var closer;
var moreclose;

// variables that you might want to tweak
let theLoudestItGets = 0.2; // check your mic inputs and see how loud it gets, put it here.
var ease = 0.08; // how responsive do you want this? Higher numbers mean faster response.

function preload() {
  far = loadImage('assets/mmfar.jpg');
  lessfar = loadImage('assets/mmnotfar.jpg');
  closer = loadImage('assets/mmclose.jpg');
  moreclose = loadImage('assets/mmface.jpg');
}

function setup() {
  createCanvas(800, 800);

  // code for initializing mic in.
  mic = new p5.AudioIn(); // what does "new" mean?
  mic.start();
}

function draw() {
  // get the sound input
  vol = mic.getLevel(); // returned level is between 0 and 1

  // make a "gradual" easing variable that approaches the original vol
  approachingVol += (vol - approachingVol) * ease;

  // text on the screen for debugging
  textSize(32);
  textAlign(CENTER);
  text(
    "Click the screen first to give\npermission for mic input.\nMy volume is " +
      vol.toFixed(3) +
      "\nApproaching Vol = " +
      approachingVol.toFixed(3),
    10,
    60
  );

  // this moves that first box
//  x = vol*200 ;
 x = map(vol, 0, theLoudestItGets, 0, width);
  rect(x, 200, 50, 50);

  // use y for your "gradual" variable!
  y = map(approachingVol, 0, theLoudestItGets, 0, width);
  rect(y, 270, 50, 50);


  // this maps z to between 0 and 3 so you can switch on it.
  z = int(map(approachingVol, 0, theLoudestItGets, 0, 3));
  text("z = " + z, 300, 20);
  switch (z) {
    case 0:
      background(far);
      fill("white");
      text("Shhh, don't make too much noise or he'll hear you.", width/2, height/4 * 3);
      break;
    case 1:
      background(lessfar);
      fill("white");
      text("Quiet down! He's getting closer!", width/2, height/4 * 3);
      break;
    case 2:
      background(closer);
      fill("white");
      text("Seriously! Put a sock in it if you want to live...", width/2, height/4 * 3);
      break;
    default:
      background(moreclose);
      fill("red");
      text("RUN", width/2, height/4 * 3);
      break;
  }
}

// you need this code for audio programs and also, the user
// needs to click the screen before the mic input will work.

function touchStarted() {
  getAudioContext().resume();
}