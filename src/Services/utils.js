
export const getTemp = (temp, store) => {
    if(store?.data?.isTempUnitCelcius){
        return temp + '°C'
    }

    return parseFloat((temp * 9/5) + 32).toFixed(2) + " °F";
}