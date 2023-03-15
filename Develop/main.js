var cityInfo=$("#cityData");
var searches=$(".pastSearches");

var userCity=$("#userCity");



var apiKey= "48774715b5f5fb8a452c6ba72a2e6d98";
var city="";
var queryURL= "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;

var formSubmitHandler = function (event) {
    event.preventDefault();
  
    var city = userCity.value.trim();
  
    if (city) {
      getUserRepos(city);
  
      cityInfo.textContent = '';
      userCity.value = '';
    } else {
      alert('Please enter a valid city');
    }
  };

  //TODO: Figure out how to fetch information needed