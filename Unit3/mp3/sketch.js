var mice = [];
var catPos;
var myState = 0;
var timer = 0;
var cat, catRight, catLeft;
var mouse;
var micePic = [];

function setup() {

  createCanvas(700, 700);

  micePic[0] = loadImage("assets/vmouse.png");
  micePic[1] = loadImage("assets/hmouse.png");
  micePic[2] = loadImage("assets/wmouse.png");
  catRight = loadImage("assets/catRight.png");
  catLeft = loadImage("assets/catLeft.png");
  cat = catLeft;

  mouse = loadImage("assets/vmouse.png");
  barn = loadImage('assets/barn.png');
  hayfloor = loadImage('assets/hayfloor.png');
  farmer = loadImage('assets/farmer.png');
  catnip = loadImage('assets/catnip.png');
  myFont = loadFont('assets/harvestfont.ttf');
  meow = loadSound('assets/meow.wav') ;

  //spawn the mice
  for (var i = 0; i < 5; i++) {
    mice.push(new Mouse());
  }

  //initial cat position
  catPos = createVector(width/2, height -100);
  imageMode(CENTER);
}

function draw() {
  switch (myState) {
    case 0:
      background(0, 255, 255);
      image(barn, width/2, height/2, width, height);
      fill('black');
      textFont(myFont); 
      textSize(180);
      textAlign(CENTER);
      fill(255, 255, 20);
      stroke("black");
      strokeWeight(3);
      text("Catch all of the mice!", 350, 150);
      text("Click to Start", 350, 650);
      break;

    case 1:
      game();
      timer++;
      if (timer > 600) {
        timer = 0;
        myState = 2;
      }
      break;

    case 2:
      background(200);
      image(farmer, width/2, height/2, width, height);
      textFont(myFont);
      textSize(180);
      fill(255, 50, 50);
      text("No Treats For you", 350, 500);
      break;

    case 3:
      background(0, 255, 120);
      image(catLeft, width/2, height/2 + 50, 400, 400);
      textFont(myFont);  
      fill(0, 60, 255);
      textSize(180);
      text("Good Job!", 350, 150);
      textSize(120);
      text("You get some catnip :3", 350, 650);
      push();
      angleMode(DEGREES);
      rotate(-30);
      image(catnip, -100, 500, 150, 120);
      pop();
      break;
  }
}

function mouseReleased() {
  switch (myState) {
    case 0:
      myState = 1;
      break;

    case 2:
      resetTheGame();
      myState = 0;
      break;

    case 3:
      resetTheGame();
      myState = 0;
      break;
  }
}

function resetTheGame() {
  mice = [];
  for (var i = 0; i < 5; i++) {
    mice.push(new Mouse());
  }
  catPos = createVector(width/2, height -100);
  timer = 0;
}

// mouse class
function Mouse() {
  // attributes
  this.pos = createVector(100, 100);
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.mouseNum = floor(random(micePic.length));

  // methods
  this.display = function() {
    fill(this.r, this.g, this.b);
    image(micePic[this.mouseNum], this.pos.x, this.pos.y, 70, 70);
  }

  this.drive = function() {
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) cat = catLeft;
  if (keyCode === RIGHT_ARROW) cat = catRight;
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) catPos.x = catPos.x - 7;
  if (keyIsDown(RIGHT_ARROW)) catPos.x = catPos.x + 7;
  if (keyIsDown(UP_ARROW)) catPos.y = catPos.y - 7;
  if (keyIsDown(DOWN_ARROW)) catPos.y = catPos.y + 7;
}

function game() {
  background(100);
  image(hayfloor, width/2, height/2, width, height);

  //iterate
  for (var i = 0; i < mice.length; i++) {
    mice[i].display();
    mice[i].drive();
    //test if mouse is close to cat
    if (mice[i].pos.dist(catPos) < 50) {
      mice.splice(i, 1);
      meow.setVolume(0.3);
      meow.play() ;
    }
  }

  //win
  if (mice.length == 0) { 
    timer = 0
    myState = 3; 
  }

  // draw the cat
  image(cat, catPos.x, catPos.y, 150, 150);
  checkForKeys();
}