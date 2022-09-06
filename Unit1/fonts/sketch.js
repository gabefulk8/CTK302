let f1, f2, f3;

function setup() {
  createCanvas(500, 500);
  f1 = loadFont("assets/oswald.ttf");
  f2 = loadFont("assets/qwitcherBold.ttf");
  f3 = loadFont("assets/qwitcherReg.ttf");
  textAlign(CENTER);
}

function draw() {
  background("black");
  fill("white");
  textFont(f1, 48);
  text("hello there!", width/2, 100); 
  textFont(f3, 48);
  text("I am Obi Wan", width/2, 200); 
  textFont(f2, 60);
  text("Kenobi", width/2, 300); 
}
