const apiKey = "DEIN_API_KEY"; // hole dir kostenlos einen unter https://openweathermap.org/api
const city = "Munich,de";

async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    const temp = Math.round(data.main.temp);
    const desc = data.weather[0].description;
    const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString("de-DE");
    const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString("de-DE");

    document.getElementById("weather").innerHTML = `
      <h2>${temp}°C</h2>
      <p>${desc}</p>
      <p>🌅 Sonnenaufgang: ${sunrise}</p>
      <p>🌇 Sonnenuntergang: ${sunset}</p>
    `;
  } catch (error) {
    document.getElementById("weather").innerHTML = "Wetterdaten konnten nicht geladen werden.";
  }
}

getWeather();
