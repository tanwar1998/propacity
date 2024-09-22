import styled from "styled-components";

export const ForecastContainer = styled.div`
    
    .heading{
      color: #343434;
      text-align: left;
      margin: 0 0 30px;
      padding: 0 15px;

      span{
        color: blue;
        cursor: pointer;
      }
    }
    .content-main{
        display: grid;
        grid-column-gap: 1%;
        grid-row-gap: 20px;    
        padding-left: 1%;    
        grid-template-columns: 19% 19% 19% 19% 19%;
    }
    @media only screen and (max-width: 900px){

      .content-main{
        grid-template-columns: 32% 32% 32%;
      }
  
    }
    @media only screen and (max-width: 576px){

      .content-main{
        grid-template-columns: 49% 49%;
      }
  
    }

`;


export const ForecastContent = styled.div`
    

    display: inline-block;
    float: none;
    border-radius: 10px;
    /* max-width: 300px; */
    /* margin: 10px 0; */
    box-shadow: 1px 1px 5px 2px #d1d1d1;
    padding: 15px 10px;
    box-sizing: border-box;
    background: linear-gradient(32deg, #4646ed, #6f6fb9, #2828c5);
    position: relative;
    max-width: 185px;
    margin: auto;

    .city-name{
        color: #ffffff;
        font-size: 16px;
        font-weight: bold;
      }
      .day{
        font-size: 12px;
        color: #fff;
        text-align: right;
      }
      .condition{
        color: #d1cccc;
        text-align: right;
        font-size: 12px;
        margin: 5px 0; 
      }
      .tmp{
        color: #fff;
        font-size: 35px;
        margin: 10px 0;
      }
      img{
        width: 45px;
        float: none;
        position: absolute;
        left: 10px;
        top: 5px;
      }
      .temp-content{
        position: absolute;
        bottom: 10px;
        font-size: 12px;
        text-align: left;
        color: #fff;

        .low{
          float: right;
          margin-right: 20px;
        }
      }

    @media only screen and (max-width: 400px){
      .temp-content{
        font-size: 11px;
      }
    }
`;

