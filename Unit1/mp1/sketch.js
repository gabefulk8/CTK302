function setup() {
  createCanvas(500, 500);
  noStroke();
}

function draw() {
  background(220);
  
  angleMode(DEGREES);
  
  if (mouseIsPressed) {
    ///night background
    //ground
    fill("rgb(112,143,112)");
    rect(0, 325, 500, 175);
  
    fill("rgb(68,68,134)");
    rect(0, 0, 500, 325);
  
    fill("rgb(173,173,173)");
    circle(500,0, 120);
  
    //head
    fill("rgb(110,110,110)");
    circle(250, 140, 70);
    fill("rgb(100, 100, 100)");
    quad(215, 135, 285, 135, 290, 170, 210, 170);
  
    fill("rgb(185,185,185)");
    circle(250, 150, 57);
  
    fill("rgb(110,110,110)");
    ellipse(250, 126, 50, 15);
    ellipse(250, 170, 80, 30);
  
    fill("rgb(230,230,230)");
    ellipse(262, 146, 9, 13);
    ellipse(242, 146, 9, 13);
  
    fill("rgb(180,29,180)")
    ellipse(264, 147, 5, 7);
    ellipse(244, 147, 5, 7);
    
    //eyebrows
    fill("rgb(140,37,140)");
    quad(236, 135, 234, 138, 246, 142, 248, 138);
    quad(256, 138, 258, 142, 268, 139, 268, 135); 
      
    //knife effects
    frameRate(6);
    fill(random(120,195), 0, random(120,195));
    circle(350, 219, random(35, 50));
    
    //knife
    fill("rgb(170,170,170)");
    beginShape();
    vertex(345, 213);
    bezierVertex(345, 213, 346, 227, 365, 215);
    bezierVertex(363, 215, 348, 238, 340, 216);
    vertex(340, 216);
    endShape();
    fill("rgb(77,35,35)");
    quad(335, 194, 328, 197, 339, 218, 346, 214);
  
    //nunchuck effects
    fill(random(120,195), 0, random(120,195));
    rotate(-32);
    ellipse(6, 320, random(35, 50), random(90, 105));
    rotate(32);
    
    //nunchuck
    fill("rgb(77,35,35)");
    quad(148, 238, 145, 245, 185, 263, 188, 255);
    quad(192, 276, 186, 276, 188, 306.5, 195, 306);
    fill("rgb(41,41,41)");
    circle(187, 260, 9);
    circle(188, 267, 9);
    circle(189, 274, 9);
    
    //hands
    fill("rgb(185,185,185)");
    circle(169, 250, 15);
    circle(337, 207, 15);
  
    //arms
    fill("rgb(100, 100, 100)");
    beginShape();
    vertex(278, 190);
    vertex(300, 218);
    vertex(329, 202);
    vertex(337, 217);
    vertex(298, 237);
    vertex(281, 227);
    endShape();
    
    beginShape();
    vertex(222, 188);
    vertex(184, 208);
    vertex(163, 242);
    vertex(178, 249);
    vertex(192, 224);
    vertex(214, 215);
    endShape();
    
    //body
    fill("rgb(110,110,110)");
    ellipse(250, 250, 80, 180);
  
    //feet
    fill("rgb(90, 90, 90)");
    ellipse(231, 332, 40, 30);
    ellipse(269, 332, 40, 30);
  
    //text
    fill("white");
    textAlign(CENTER);
    textSize(17);
    text("But at night, he uses his powers to fight the shadow demons", width/2, 70);   
    
    //left effect
    fill(random(38, 50), random(38, 50), random(38, 50));
    ellipse(67, 222, random(83, 90), random(253, 260));
    
    //left shadow monster
    fill("rgb(35,35,35)");
    ellipse(67, 222, 80, 250);
    fill("rgb(156,0,0)");
    triangle(47, 152, 60, 152, 53.5, 164);
    triangle(87.5, 152, 74.5, 152, 81, 164);

    //right effect
    fill(random(38, 50), random(38, 50), random(38, 50));
    circle(414, 370, random(83, 90));
    
    //right shadow monster
    fill("rgb(35,35,35)");
    circle(414, 370, 80);
    fill("rgb(156,0,0)");
    circle(402, 356, 6);
    circle(425, 356, 6);  
    
  } else {
    ///day background
    //ground
    fill("rgb(134,179,134)");
    rect(0, 325, 500, 175);
  
    fill("rgb(151,151,236)");
    rect(0, 0, 500, 325);
  
    fill("rgb(233,233,184)");
    circle(0, 0, 120);
  
    //body
    fill("rgb(110,110,110)");
    ellipse(250, 250, 80, 180);
  
    //head
    fill("rgb(110,110,110)");
    circle(250, 140, 70);
    fill("rgb(100, 100, 100)");
    quad(215, 135, 285, 135, 290, 170, 210, 170);
  
    fill("rgb(185,185,185)");
    circle(250, 150, 57);
  
    fill("rgb(110,110,110)");
    ellipse(250, 126, 50, 15);
    ellipse(250, 170, 80, 30);
  
    fill("rgb(230,230,230)");
    ellipse(262, 146, 9, 13);
    ellipse(242, 146, 9, 13);
  
    fill("rgb(180,29,180)")
    ellipse(262, 147, 5, 7);
    ellipse(242, 147, 5, 7);
  
    //hands
    fill("rgb(185,185,185)");
    circle(202, 262, 15);
    circle(297, 261, 15);
  
    //arms
    fill("rgb(100, 100, 100)");
    triangle(276, 180, 305, 260, 290, 265);
    triangle(224, 180, 210, 265, 193, 260);
  
    //feet
    fill("rgb(90, 90, 90)");
    ellipse(235, 332, 40, 30);
    ellipse(265, 332, 40, 30);
  
    //text
    fill("black");
    textAlign(CENTER);
    textSize(17);
    text("Jin may seem like a normal ninja during the day...", width/2, 50);
  }
  
}