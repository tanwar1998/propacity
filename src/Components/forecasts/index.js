import React, {useEffect} from 'react';
import { ForecastContainer } from './style';
import { connect } from "react-redux";
import ForecastComponent from './forecastComponent';


const Forecast = (props) => {
  return (
    <ForecastContainer className='hor-row'>
      <div className='hor-row heading'>
        Forecast for five days(
        <span onClick={props.hideForecast}>Hide section?</span>
        )
      </div>
      <div className='hor-row content-main'>
        {
          props.store.data.weatherData?.forecast?.forecastday?.map((item, i)=>(
            <ForecastComponent
              data = {item}
              store = {props.store}
              tmpKey = {"key"+i}
              city = { props.store.data?.weatherData.location?.name }
            />
          ))
        }
        
      </div>
    </ForecastContainer>
  );
};

const mapStateToProps = (store) => {
  return {
      store,
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Forecast);
