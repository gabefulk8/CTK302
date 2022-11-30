// Note - use your own APPID to get this to work!

let weather;
let weatherID = 0; // returned in the JSON weather element
let state = 0;
let x = 0;
let temperature = 0;
let sunny;

function setup() {
  createCanvas(400, 400);

  sunny = loadImage("assets/weather.png");

  // HERE is the call to get the weather. We build the string first.

  let myCityString = "https://api.openweathermap.org/data/2.5/weather?lat=40.195&lon=-88.404&appid=23855a3dd622ce6eb6c2222ffd51c832";

  //You can also use "zipcode"
  // substitute zip=61820 for q=Normal,IL,US
  
  let myIDString = "appid=23855a3dd622ce6eb6c2222ffd51c832" ;

  let myTotalString = myCityString + myIDString;
  

  loadJSON(myTotalString, gotData); // that gotData function happens when JSON comes back.
}

function gotData(data) {
  weather = data;
  print(weather); // for debugging purposes, print out the JSON data when we get it.
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
      textSize(40);
      text("What is the weather in " + weather.name + "?", 20, 20);
      textSize(20);
      text("Windspeed is " + weather.wind.speed, 20, 60);
      text("Forecast is " + weather.weather.description, 20, 80);
      text("Temperature is " + temperature, 20, 100);
      
      /*
      scale based on temp
      
      rect();

      https://openweathermap.org/current#current_JSON

      https://openweathermap.org/city/4900885

      */
      break;
  }
}
