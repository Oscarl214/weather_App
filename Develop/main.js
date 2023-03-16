let cityInfo = $("#cityData"); //Div containing City data info
let searches = $(".pastSearches"); //Div where old searches will be displayed that are stored once User searches for them
let userFormEl = $("#user-form"); //text input element
let cityInputEl = $("#userCity"); //users search
let userSearchBtn = $("#userSearchBtn"); //submit button
const cityName=$("#city"); //grabs my h1 where I want the city that is search up to display
const cityTemp=$("#temp"); //grabs my span element where I want the temp data to display
const cityWind=$("#wind"); //grabs my span element where I want the wind data to display
const cityHumid=$("#humid"); //grabs my span element where I want the humidity to display

var apiKey = "48774715b5f5fb8a452c6ba72a2e6d98"; //my API key

var city = ""; //empty variable to match Users input

var attempt2Url =
  "https://api.openweathermap.org/data/2.5/weather?q=" +
  city +
  "&appid=" +
  apiKey +
  "&units=imperial";

fetch(attempt2Url, {
  // The browser fetches the resource from the remote server without first looking in the cache.
  // The browser will then update the cache with the downloaded resource.
  cache: "reload",
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

  


