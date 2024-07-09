# National Trust Weather Display

## Project Overview

This project aims to add a weather display to National Trust property pages, enhancing user experience by providing local weather information.

## Screenshot
<br>
![image](https://github.com/INFINITYX00/national-trust-weather/assets/145766101/19fc34eb-1a08-4359-8a97-9a0c82bae7e3)


## How to use

1. Go to the "weather.js" file and copy all of the code

2. Navigate to a National Trust property page (make sure to use Google Chrome) or alternatively navigate to https://www.nationaltrust.org.uk/visit/warwickshire/packwood-house

3. Open DevTools using F12 or click the 3 dots on top right of the screen -> more tools -> developer tools

4. Paste the code into the console and hit enter, 50% of the time it will display the weather just below the property description.

## Features

- Fetches weather data for a property location
- Displays current temperature and weather conditions
- Includes a weather icon for visual representation
- Uses basic A/B testing

## Overview for Non-Technical Audience

1. Weather Addition: A small box (widget) shows the current weather for each National Trust property.

2. What It Shows: The weather box displays the temperature, a brief description of the weather and a small picture representing the weather condition.

3. How It Works: When someone visits a property page, the program attempts to fetch weather information from a weather service.

4. Integration: I designed this weather box to fit in as closely as possible with the existing National Trust website design.

5. Testing: The weather information is shown to only half of the website visitors. This helps understand if adding weather information might make people more likely to visit the properties.

6. Benefits: By providing weather information, visitors can plan their trips better.

7. Future Improvements: In the future, more detailed weather forecasts could be added and make the system fetch location-specific data for each property.

This addition aims to make the National Trust website more informative and user-friendly, potentially encouraging more people to visit these beautiful properties.

## Technical Approach

1. **Weather Data Retrieval**:

   - Utilises the provided mock weather API endpoint
   - Implements error handling for network requests

2. **Weather Display**:

   - Creates a weather widget with temperature, description, and icon
   - Styled to be closely matched to the National Trust website

3. **Widget Injection**:

   - Attempts to insert the weather widget into a specific location
     on the page
   - Uses a pre-defined DOM selector to find the insertion point

4. **A/B Testing**:
   - Implements a basic 50/50 split using Math.random()
   - Only displays the weather widget to approximately 50% of users

## Future Improvements

- Implement dynamic location data extraction from the page
- Enhance error handling and add fallback displays
- Improve A/B testing
- Use caching to reduce API calls and improve performance
- Expand weather information to include a 5 day forecast

## Conclusion

This weather widget provides a basic foundation for enhancing National Trust property pages with local weather information. While functional, there are several areas for potential improvement and optimization in future iterations.
