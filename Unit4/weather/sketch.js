let weather;
let state = 0;
let x = 0;
let temperature = 0;
let sunny;
let myFont; 

function setup() {
  createCanvas(600, 600);

  sunny = loadImage("assets/weather.png");
  myFont = loadFont("assets/newsFont.ttf");

  textFont(myFont);

  let myTotalString = "https://api.openweathermap.org/data/2.5/weather?lat=40.195&lon=-88.404&appid=23855a3dd622ce6eb6c2222ffd51c832&units=imperial";

  loadJSON(myTotalString, gotData); 
}

function gotData(data) {
  weather = data;
  print(weather); 
  temperature = weather.main.temp;
}

function draw() {
  switch (state) {
      
    case 0:
      if (weather) {
        state = 1;
      }
      break;

    case 1:
      background(sunny);
      fill("black");
      textSize(28);
      text("What is the weather in " + weather.name + ", IL?", 20, 30);
      textSize(20);
      text("Forecast is " + weather.weather[0].description, 20, 60);
      text("Temperature is " + round(temperature) + "°F", 20, 80);
      text("Feels like " + round(weather.main.feels_like) + "°F", 20, 100);
      
      
      //scale based on temp
      fill('#ba555c')
      noStroke();
      rect(418, 308, 22, -temperature);
      let x = round(temperature);
      fill('black');
      textSize(18);
      text(x + "°", 417, 328);

      break;
  }
}
