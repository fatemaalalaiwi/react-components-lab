import "./WeatherForecast.css"
import WeatherData from "./WeatherData.jsx"
import WeatherIcon from "./WeatherIcon.jsx"

const WeatherForecast = ({weather}) => {

  return (


    <div className="weather">
            {/* <h2>{weather.day}</h2> */}
      {/* <img src={weather.img} alt={weather.imgAlt} /> */}
      {/* <p><span>conditions: </span>{weather.conditions}current weather conditions  </p> */}
      {/* <p><span>time: </span>{weather.time}</p> */}

       <WeatherIcon img={weather.img} alt={weather.imgAlt} />
       <WeatherData conditions={weather.conditions} time={weather.time} day={weather.day}/>
      
    </div>
  );
}

  
export default WeatherForecast;