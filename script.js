let input = document.querySelector("#cityInput");
let button = document.querySelector("#searchBtn");
let display = document.querySelector(".weather-result");

async function fetchingWeather(data) {
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=9db2c8bc3a3eb05ab17aba957373fd12&units=metric`
  );
  let result = await response.json();
  console.log(result);

  if (result.cod == "404") {
    display.textContent = `<p>Please enter a valid city </p>`;
    display.style.color = "red";
  } else {
    let imageUrl = `https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`;
    display.style.color = "green";
    display.innerHTML = `
<img src=${imageUrl} alt="no image">
<p> city name is ⇒ ${result.name} </p>
<p> Weather is  ⇒ ${result.weather[0].main} </p>
<p> Description is  ⇒  ${result.weather[0].description} </p>
<p> temperature is  ⇒ ${result.main.temp}℃ </p>
<p> wind speed is  ⇒ ${result.wind.speed} </p> 
`;
  }
}

button.addEventListener("click", function () {
  let data = input.value.trim();
  fetchingWeather(data);
  input.value = "";
});
