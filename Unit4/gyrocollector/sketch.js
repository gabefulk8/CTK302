// variables needed for gyroscope
var beta, gamma; // orientation data
var x = 0; // acceleration data
var y = 0;
var z = 0;
var xPosition = 0;
var yPosition = 0;

var catImage;
var myFont;

function setup() {

  createCanvas(windowWidth, windowHeight);

  // initialize accelerometer variables
  alpha = 0;
  beta = 0;
  gamma = 0;

  // load any images you need
  catImage = loadImage("assets/vibeCat.jpeg");
  imageMode(CENTER);
  noStroke();

  myFont = loadFont("assets/oCat.ttf");
}

function draw() {

  background('white');

  // the map command !!!!
  // takes your variable and maps it from range 1 to range 2
  // map(yourVar, range1_x, range1_y, range2_x, range2_y) ;
  xPosition = map(gamma, -18, 18, 0, width);
  yPosition = map(beta, 25, 45, 0, height);


  // move the frog around the screen
  push(); // before you use translate, rotate, or scale commands, push and then pop after
  translate(xPosition, yPosition); // move everything over by x, y
  //  rotate(radians(alpha)); // using alpha in here so it doesn't feel bad

  // draw the FROG
  image(catImage, 0, 0, 500, 500);
  pop();


  // update the frog's position using the accelerometer data
  catImage.x = xPosition;
  catImage.y = yPosition;

  // MORE DECORATIONS - write that pretty ATK type on top.
  fill('black');
  textSize(100);
  textAlign(CENTER);
  textFont(myFont);
  text("Vibe Cat", width/2, height/2);
}

// HERE'S THE STUFF YOU NEED FOR READING IN DATA!!!

// Read in accelerometer data
window.addEventListener('deviceorientation', function(e) {
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});


// accelerometer Data
window.addEventListener('devicemotion', function(e) {
  // get accelerometer values
  x = e.acceleration.x;
  y = e.acceleration.y;
  z = e.acceleration.z;
});
