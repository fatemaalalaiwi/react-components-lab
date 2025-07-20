

const WeatherData = ({ conditions, time, day }) => {
  return (
    <>
      <p><span>conditions: </span>{conditions}</p>
      <p><span>time: </span>{time}</p>
      <p><span>Day: </span>{day}</p>
    </>
  );
};

export default WeatherData;
