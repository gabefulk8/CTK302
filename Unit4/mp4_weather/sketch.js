let weather;
let state = 0;
let coldImg;
let hotImg;
let deafaultImg;

function setup() {
  let myTotalString = "https://api.openweathermap.org/data/2.5/weather?lat=40.514&lon=-88.991&appid=23855a3dd622ce6eb6c2222ffd51c832&units=imperial";
  loadJSON(myTotalString, gotData); 

  coldImg = loadImage("image path");
  hotImg = loadImage("image path");
  deafaultImg = loadImage("image path");
}

function gotData(data) {
  weather = data;
}

function draw() {
  switch (state) {
      
    case 0:
      if (weather) {
        state = 1;
      }
      break;

    case 1:
      if (weather.weather[0].id >= 200 &&  weather.weather[0].id < 300) {
        background(deafaultImg);
        // set to Thunderstorm effect
      }

      if (weather.weather[0].id >= 300 &&  weather.weather[0].id < 600) {
        background(deafaultImg);
        // set to Rain effect
      }

      if (weather.weather[0].id >= 600 &&  weather.weather[0].id < 700) {
        background(coldImg);
        // set to Snow effect
      }

      if (weather.weather[0].id >= 700 &&  weather.weather[0].id < 900) {
        if (weather.weather[0].id == 800) {
          background(hotImg);
          // set to clear effect
        }else {
          background(deafaultImg);
          // set to Cloudy effect  
        }
      }
      break;
  }
}
