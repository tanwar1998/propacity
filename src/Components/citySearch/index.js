import React, { useState, useEffect} from 'react';
import { CitySearchContainer } from './style';
import DropdownInput from '../../CommonComonents/InputDropdown'
import { connect } from "react-redux";
import getForecastData from '../../Services/getApis/getForecastData.js';



const CITY_LIST = [
  {
    label: "New York",
    value: 'new york',
  },
  {
    label: "London",
    value: 'london',
  },
  {
    label: "Delhi",
    value: 'delhi',
  },
  {
    label: "Paris",
    value: 'paris',
  },
  {
    label: "Rio",
    value: 'rio',
  },
  {
    label: "Jaipur",
    value: 'jaipur',
  },
  {
    label: "Chennai",
    value: 'chennai',
  },
  {
    label: "Mumbai",
    value: 'mubai',
  },
  {
    label: "Chandigarh",
    value: 'chandigarh',
  },
]


const Search = (props) => {
  console.log('serah>>>>>>>>>>>>>>>>>', props)
  const [currentCity, setCurrentCity] = useState(CITY_LIST[0])
  const handleCityChange = (value)=>{
    setCurrentCity(value);
    // props.getForecastData(value, props.store);
  }
  useEffect(()=>{
    console.log('useeffec callled>>>>>>>')
      props.getForecastData(CITY_LIST[0].value, props.store);
  }, []);
  
  return (
    <CitySearchContainer className='hor-row'>
        <DropdownInput
            options = {CITY_LIST}
            onChange = { handleCityChange }
            
            defaultValue = { currentCity }
          />
    </CitySearchContainer>
  );
};

const mapStateToProps = (store) => {
  return {
      store,
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getForecastData: (item, update = false) => dispatch(getForecastData(item, update)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

