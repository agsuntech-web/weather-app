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

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    console.log(data);

    document.getElementById("cityName").textContent = data.name;
    document.getElementById("temperature").textContent =
      data.main.temp + "°C";
    document.getElementById("description").textContent =
      data.weather[0].description;

      const iconCode = data.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
      
      document.getElementById("weatherIcon").src = iconUrl;

  } catch (error) {
    console.error(error);
    alert("Error fetching weather");
  }
}

document
  .getElementById("cityInput")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      getWeather();
    }
  });