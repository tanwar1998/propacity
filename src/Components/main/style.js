import styled from "styled-components";

export const MainContainer = styled.div`
  text-align: center;

  .main-content{
    max-width: 1200px;
    margin: auto;
    float: none;
  }

  .sub-heading, .sub-heading2{
    text-align: left;
    padding: 0 15px;

    span{
      color: blue;
      cursor: pointer;
    }
  }
  .sub-heading2{
    margin: 30px 0;
  }

`;


export const WeatherContainer = styled.div`

  display: inline-block;
  float: none;
  border-radius: 10px;
  max-width: 300px;
  margin: 10px 0;
  box-shadow: 1px 1px 5px 2px #d1d1d1;
  padding: 15px 10px;
  box-sizing: border-box;
  background: linear-gradient(176deg, #b9b9ef, #6f6fb9, #2828c5);
  margin: 30px 0;

  .city-name{
    color: #ffffff;
    font-size: 18px;
    font-weight: bold;
  }
  .condition{
    color: #d1cccc;
    font-size: 12px;
    margin: 5px 0 0; 
  }
  .tmp{
    color: #fff;
    font-size: 60px;
    // font-weight: bold;
  }
  img{
    width: 100px;
    float: none;
    margin-top: 10px;
  }


`;

export const NavigationContainer = styled.div`
  padding: 10px 10px;
  box-shadow: 0 1px 5px 1px #c9c9c9;
  z-index: 2;

  .search-container{
    display: grid;
    grid-template-columns: 100px auto;

    .search-city-text{
      line-height: 40px;
      font-size: 14px;
    }
  }

  .tmp-content{
    position: absolute;
    right: 10px;
  }
  @media only screen and (max-width: 576px){
    .search-container{
      display: block;
      max-width: calc(100% - 110px);

    }
    .search-city-text{
      display: none;
    }
    .tmp-content{
      right: -15px;
    }

  }




`;

