import { useState } from "react";

const Weather = () => {
      const [temperature,SetTemperature] = useState(null)
      const apiKey = 'cf404443039415d5d7bebc3afdf5d3b3';
      const city = 'Munich'
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

      fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
      const temperature = (data.main.temp);
      SetTemperature(temperature);
      })
      .catch(error => console.error('Error fetching the weather data:', error));
      return(
            <div className="flex flex-row text-gray-500"> 
                  <img className="mr-2" src="/src/assets/icons/sun.svg" alt=""/>
                  <div>{`${Math.round(temperature)} °C`}</div>
            </div>
      )
}

export default Weather;