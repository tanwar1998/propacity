
import { MainContainer, NavigationContainer } from './style';
import { useDispatch, connect } from "react-redux";
import React, { useState, lazy, Suspense } from 'react';
import Weather from './weather';
import Search from '../citySearch/index'
import ToggleButton from '../../CommonComonents/ToggleButton/index.js'
import { updateStore } from '../../Store/Actions/index';
const Forecast = lazy(() => import('../forecasts/index.js'));

const App = (props) => {
  const dispatch = useDispatch();
  const [forecast, setForecast] = useState(true)

  

  const handleTmpUnitChange = (isCelcius) => {
    const storeData = {
        key: 'isTempUnitCelcius',
        value: isCelcius
    }
    dispatch(updateStore(storeData));

  }
  
  const displayForecast = (value = true) => {
    setForecast(value)
  }

  return (
    <MainContainer className='hor-row'>
      <NavigationContainer className='hor-row'>
        <div className='hor-row main-content'>
          <div className='hor-row search-container'>

            <div className="hor-row search-city-text">
                Search City
            </div>
            <Search/>
          </div>
          <div className='tmp-content'>
            <ToggleButton
              handleChange = {handleTmpUnitChange}
              label = {"Celcius"}
            />
          </div>
        </div>
        
      </NavigationContainer>

      <div className='hor-row main-content'>
          
        <Weather store = {props.store}/>
        {!forecast && <div className='hor-row sub-heading'>
          <span onClick={displayForecast}>View Forecast?</span>
          
        </div>}

        <Suspense fallback={<div>Loading...</div>}>
          { forecast && <Forecast
           hideForecast = {()=>displayForecast(false)}
         />}
        </Suspense>
      </div>

    </MainContainer>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);

