var cityInfo = $("#cityData");
var searches = $(".pastSearches");
var userFormEl = $("#user-form"); //text input element
var cityInputEl = $("#userCity"); //users search
var userSearchEl = $("#userSearchBtn"); //submit button
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
