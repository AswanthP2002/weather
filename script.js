const apiKey =  "2f26bb8011e44c6b276d7bb046124461";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

var cityNamer = document.querySelector(".search input").value;

const weatherIcon = document.querySelector(".Weather-icon");

var dayNightCycle;

async function checkWeather(city){
    const respons = await fetch(apiUrl + `&appid=${apiKey}` + `&q=${city}`);
    var data = await respons.json();
    
    console.log(data.name);
    if(data.cod == "404"){
        document.querySelector(".warning").style.display = "block";
    }else{

        document.querySelector(".warning").style.display = "none";

        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " Km/h";
        document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
        document.querySelector(".city").innerHTML = data.name;

        //weather checking
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "Images/images/clouds.png" ;
        }else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "Images/images/clear.png";
        }else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "Images/images/drizzle.png";
        }else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "Images/images/mist.png";
        }else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "Images/images/rain.png";
        }else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "Images/images/snow.png";
        }else if(data.weather[0].main == "Smoke"){
            weatherIcon.src = "Images/images/smoke.png";
        }else if(data.weather[0].mai == "Thunderstorm"){
            weatherIcon.src = "Images/images/thunderStorm.png";
        }

        dayNightCycle = data.weather[0].icon;
        var isDorN = dayNightCycle.substr(dayNightCycle.length-1,1);
        
        if(isDorN == "n"){
            document.querySelector(".card").style.background = "linear-gradient(to right,rgb(71, 71, 71),rgb(43, 45, 46))";
        }else{
            document.querySelector(".card").style.background = "linear-gradient(to right,rgb(31, 152, 223),rgb(18, 230, 201))";
        }

        document.querySelector(".Weather").style.display = "block";
    }
}

function searchCity(){

    var city = document.querySelector(".search input").value;
    checkWeather(city); 

}