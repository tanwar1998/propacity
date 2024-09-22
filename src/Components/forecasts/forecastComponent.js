
import { ForecastContent } from './style';
// import partialCloud from '../../Assets/images/weather_default.png'
import { getTemp } from '../../Services/utils.js'



const Component = ({data, tmpKey, city, store}) => {
  return (
    <ForecastContent key = {tmpKey}>
        <img src={ "https:" + data.day.condition.icon} alt ='weather'/>
        <div className='hor-row day'>
            {data.date}
        </div>
        <div className='hor-row condition'>
            {data.day.condition.text}
        </div>
        <div className='hor-row city-name'>
            {city}
        </div>
        <div className='hor-row tmp'>
            {getTemp(data.day.avgtemp_c, store)}
        </div>
        <div className='hor-row temp-content'>
            <span className='high'>
                High: <span style={{fontWeight: "bold"}}>
                    {getTemp(data.day.maxtemp_c, store)}
                </span>
            </span>
            <span className='low'>
                Low: <span style={{fontWeight: "bold"}}>
                    {getTemp(data.day.mintemp_c, store)}
                </span>
            </span>
        </div>

    </ForecastContent>
  );
};

export default Component;
