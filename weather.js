(function () {
  // Function that will fetch weather data from API
  async function fetchWeather(lat, lon) {
    const apiKey = "a2ef86c41a";
    const url = `https://europe-west1-amigo-actions.cloudfunctions.net/recruitment-mock-weather-endpoint/forecast?appid=${apiKey}&lat=${lat}&lon=${lon}`;

    // Fetch the weather data
    try {
      const response = await fetch(url);
      // Check if the response is OK
      if (!response.ok) {
        // If the response is not OK, throw an error
        throw new Error("Network response error");
      }
      // Parse the JSON response
      return await response.json();
      // Catch any errors that occur during the fetch
    } catch (error) {
      console.error("Error fetching weather:", error);
      throw error;
    }
  }

  // Function to create HTML for the weather display
  function createWeatherDisplay(weatherData) {
    // Get the current weather data
    const currentWeather = weatherData.list[0];
    // Extract the temperature, description, and icon
    const temp = currentWeather.main.temp.toFixed(0);
    const description = currentWeather.weather[0].description;
    const icon = currentWeather.weather[0].icon;
    // Adjusted the styling of the weather widget
    const displayElement = document.createElement("div");
    displayElement.className = "weather-widget";
    displayElement.style.cssText =
      "border-radius: 5px; margin: 40px 0; color: black;"; // Adjusted background-color and added color: black
    displayElement.innerHTML = `
    <h2 style="margin-top: 0; color: black; font-family: Arial, sans-serif;">Current Weather</h3> <!-- Added color: black -->
    <img src="http://openweathermap.org/img/wn/${icon}.png" alt="${description}" style="float: left; style="width: 70px; height: auto;"> <!-- Adjusted size of image -->
    <p style="color: black; font-family: Arial, sans-serif;">Temperature: ${temp}°C</p> <!-- Added color: black -->
    <p style="color: black; font-family: Arial, sans-serif;">Condition: ${description}</p> <!-- Added color: black -->
  `;

    return displayElement;
  }

  // Function to insert the weather display into the page
  function insertWeatherDisplay(displayElement) {
    const container = document.querySelector(
      "#content > section.Sectionstyle__StyledSection-sc-1rnt8u1-0.fFbYaE.Placestyle__HeroSection-sc-7yy3d-0.cYgsUe > div > div > div > div > div:nth-child(1)"
    );
    if (container) {
      // Create a new list item for the weather widget
      const listItem = document.createElement("li");
      // Adjusted the styling of the weather widget
      listItem.style.listStyleType = "none";
      listItem.appendChild(displayElement);
      container.appendChild(listItem);
    } else {
      console.error("Could not find container for weather display");
    }
  }

  // Main function to add the weather widget to the page
  async function addWeatherWidget() {
    // In a real scenario, we'd need to determine these dynamically
    const lat = 20;
    const lon = 30;

    if (Math.random() > 0.5) {
      try {
        const weatherData = await fetchWeather(lat, lon);
        const displayElement = createWeatherDisplay(weatherData);
        insertWeatherDisplay(displayElement);
      } catch (error) {
        console.error("Failed to add weather widget:", error);
      }
    }
  }

  // Check if the DOM is already loaded
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", addWeatherWidget);
  } else {
    addWeatherWidget();
  }
})();
