
import { WeatherContainer } from './style';
import partialCloud from '../../Assets/images/weather_default.png';
import { getTemp } from '../../Services/utils.js'




const Weather = ({store}) => {
  return (
    <WeatherContainer>
        <div className='hor-row city-name'>
            {store.data.weatherData?.location?.name}
        </div>
        <div className='hor-row condition'>
            {store.data.weatherData?.current?.condition.text}
        </div>
        <div className='hor-row tmp'>
            {getTemp(store.data?.weatherData?.current?.temp_c, store)}
        </div>
        <div className='hor-row'>
            {/* <img src={partialCloud} alt ='weather'/> */}
            <img src={"https:" + store.data.weatherData?.current?.condition?.icon} alt ='weather'/>
        </div>

    </WeatherContainer>
  );
};

export default Weather;
