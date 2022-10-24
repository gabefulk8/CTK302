let numberOfTouches ;
let zerof;
let onef;
let twof;
let threef;

function preload() {
  zerof = loadImage('assets/zerofing.png');
  onef = loadImage('assets/onefing.png');
  twof = loadImage('assets/twofing.jpg');
  threef = loadImage('assets/threefing.png');
}

function setup() {
  createCanvas(400, 400);
  textSize(28);
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);
  
  switch(numberOfTouches) {
    case 0: 
      background(zerof);
      text("zilch, nada, not a soul", 5, 22) ; 
      break ;
      
    case 1: 
      background(onef);
      text("alright... we've got a bite...", 5, 22) ; 
      break ;
      
    case 2:
      background(twof);
      text("woah, now we're talking", 5, 22) ; 
      break ;
      
    case 3:
      background(threef);
      text("heyoo now it's poppin'", 5, 22) ; 
      break ;   
  }
}