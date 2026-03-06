async function getWeather() {

  const city = document.getElementById("cityInput").value.trim();

  if (!city) {
    alert("Please enter a city");
    return;
  }

  const apiKey = "1d67b8e2b238fad4c62c2941c9647386";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    if (data.cod != 200) {
      alert("City not found");
      return;
    }

    document.getElementById("cityName").textContent = data.name;
    document.getElementById("temperature").textContent =
      data.main.temp + "°C";
    document.getElementById("description").textContent =
      data.weather[0].description;

    const icon = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    document.getElementById("weatherIcon").src = iconUrl;

  } catch (error) {
    console.log(error);
    alert("Network error");
  }
}