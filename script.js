const apiKey = "d42127ec3862c817305da6683debe41b";

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const weatherIcon = document.getElementById("weatherIcon");

async function getWeather(city){

  const url =
  `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=${apiKey}&units=metric`;

  try{

    const response = await fetch(url);

    if(!response.ok){
      throw new Error("City not found");
    }

    const data = await response.json();

    cityName.innerText = data.name;
    temperature.innerText = `${Math.round(data.main.temp)}°C`;
    description.innerText = data.weather[0].description;
    humidity.innerText = `${data.main.humidity}%`;
    wind.innerText = `${data.wind.speed} km/h`;

    const iconCode = data.weather[0].icon;

    weatherIcon.src =
    `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  }

  catch(error){
    alert(error.message);
  }
}

searchBtn.addEventListener("click", () => {

  const city = cityInput.value.trim();

  if(city !== ""){
    getWeather(city);
  }
});

getWeather("Delhi");
