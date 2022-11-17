var bubbles = [];
let url = "";
var sFlake;

function setup() {
  let key = "1l8bRsLuldmvyLTTT6_WVPtF8Rox7J4GMvBsBDWhcUPo"; // this is KEY of the URL from the sheet

  sFlake = loadImage("assets/snowflake.png");

  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1"; // here I'm making the string for loadJSON.

  loadJSON(url, gotData);

  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
}

// The data comes back as an array of objects

function gotData(data) {
  console.log(data); // Print the data in the console

  // add each line to an array of bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(
      new Bubble(
        data[i]["What is your first name?"],
        data[i]["What is your favorite color?"],
        data[i]["How much do you like winter?"]
      )
    ); // THESE NEED TO MATCH SPREADSHEET
  }
}

function draw() {
  background(50);

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  }
}

// my Bubble class
class Bubble {
  constructor(name, col, winter) {
    // only the order of these parameters matters!
    this.name = name;
    this.col = col;
    this.winter = winter;
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(0, int(winter));
  }

  display() {
    noStroke();
    imageMode(CENTER);
    tint(this.col);
    let size = 25 * this.winter + 20;
    image(sFlake, this.pos.x, this.pos.y, size, size);
    fill("white");
    text(this.name, this.pos.x, this.pos.y);
    this.pos.add(this.vel);
    if (this.pos.y > height + 100) {
      this.pos.y = -100;
    }
  }
}