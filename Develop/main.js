let cityInfo = $("#cityData"); //Div containing City data info
let searches = $(".pastSearches"); //Div where old searches will be displayed that are stored once User searches for them
let userFormEl = $("#user-form"); //text input element
let cityInputEl = $("#userCity"); //users search
let userSearchBtn = $("#userSearchBtn"); //submit button
const cityName = $("#city"); //grabs my h1 where I want the city that is search up to display
const cityTemp = $("#temp"); //grabs my span element where I want the temp data to display
const cityWind = $("#wind"); //grabs my span element where I want the wind data to display
const cityHumid = $("#humid"); //grabs my span element where I want the humidity to display

var apiKey = "48774715b5f5fb8a452c6ba72a2e6d98"; //my API key

function handleFormSubmit(event) {
  event.preventDefault();

  // select form element by its `name` attribute and get its value

  var cityItem = cityInputEl.val();
  var attempt2Url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityItem +
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

      const cityTemp = $("#temp"); //Got my temp to show on designated temp span element
      cityTemp.text(data.main.temp + "°F");

      //TODO: CALL MY H1 TITLE AND SET IT TO CITY DATA
      //CALL MY WIND ELEMENT AND SET IT TO WIND DATA
      //CALL MY HUMIDITY ELEMENT AND SET IT TO HUMID DATA
    });

  // print to the page
  // shoppingListEl.append("<li>" + shoppingItem + "</li>");

  // clear the form input element
  cityInputEl.val("");
}

// Create a submit event listener on the form element
userFormEl.on("submit", handleFormSubmit);

//Questions
//1. should everything be on one function or different function expressions I call on as I need to?
//2. I know I have to add an event listener/event handler to the search(submit button) on my form
//3. Then take the inputted value of the user so that I can use that specific value to fetch whatever city they search for
//4. ^^^ Should that be its own function expression?
//5. Then create a function that displays the specific data I pulled from the fetch function and apply it to the text content of its designated span elements
//Ex: Temp, Humidity, Wind

//create everything in one function
//I can create my elements and cards for my forecast in my last then call in my fetch
//look at mini project solution
