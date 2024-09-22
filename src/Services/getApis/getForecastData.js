import axios from 'axios';
import { updateStore, updateLoader } from '../../Store/Actions/index';
import { updatePermanentStore } from '../../Store/Actions/permanentAction';
import { toast } from 'react-toastify';

const foreCastData = {
    "location": {
      "name": "London",
      "region": "City of London, Greater London",
      "country": "United Kingdom",
      "lat": 51.52,
      "lon": -0.11,
      "tz_id": "Europe/London",
      "localtime_epoch": 1726932930,
      "localtime": "2024-09-21 16:35"
    },
    "current": {
      "last_updated_epoch": 1726932600,
      "last_updated": "2024-09-21 16:30",
      "temp_c": 23,
      "temp_f": 73.4,
      "is_day": 1,
      "condition": {
        "text": "Partly cloudy",
        "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
        "code": 1003
      },
      "wind_mph": 8.5,
      "wind_kph": 13.7,
      "wind_degree": 123,
      "wind_dir": "ESE",
      "pressure_mb": 1015,
      "pressure_in": 29.97,
      "precip_mm": 0,
      "precip_in": 0,
      "humidity": 53,
      "cloud": 50,
      "feelslike_c": 24.7,
      "feelslike_f": 76.4,
      "windchill_c": 23,
      "windchill_f": 73.5,
      "heatindex_c": 24.7,
      "heatindex_f": 76.4,
      "dewpoint_c": 11.3,
      "dewpoint_f": 52.3,
      "vis_km": 10,
      "vis_miles": 6,
      "uv": 6,
      "gust_mph": 11.1,
      "gust_kph": 17.9
    },
    "forecast": {
      "forecastday": [
        {
          "date": "2024-09-21",
          "date_epoch": 1726876800,
          "day": {
            "maxtemp_c": 23.8,
            "maxtemp_f": 74.8,
            "mintemp_c": 15.1,
            "mintemp_f": 59.2,
            "avgtemp_c": 19,
            "avgtemp_f": 66.1,
            "maxwind_mph": 8.9,
            "maxwind_kph": 14.4,
            "totalprecip_mm": 7.16,
            "totalprecip_in": 0.28,
            "totalsnow_cm": 0,
            "avgvis_km": 9.6,
            "avgvis_miles": 5,
            "avghumidity": 72,
            "daily_will_it_rain": 1,
            "daily_chance_of_rain": 89,
            "daily_will_it_snow": 0,
            "daily_chance_of_snow": 0,
            "condition": {
              "text": "Moderate rain",
              "icon": "//cdn.weatherapi.com/weather/64x64/day/302.png",
              "code": 1189
            },
            "uv": 3
          },
          "astro": {
            "sunrise": "06:45 AM",
            "sunset": "07:00 PM",
            "moonrise": "08:07 PM",
            "moonset": "11:32 AM",
            "moon_phase": "Waning Gibbous",
            "moon_illumination": 88,
            "is_moon_up": 1,
            "is_sun_up": 0
          },
          "hour": [
            {
              "time_epoch": 1726920000,
              "time": "2024-09-21 13:00",
              "temp_c": 23.4,
              "temp_f": 74.1,
              "is_day": 1,
              "condition": {
                "text": "Thundery outbreaks in nearby",
                "icon": "//cdn.weatherapi.com/weather/64x64/day/200.png",
                "code": 1087
              },
              "wind_mph": 8.9,
              "wind_kph": 14.4,
              "wind_degree": 126,
              "wind_dir": "SE",
              "pressure_mb": 1016,
              "pressure_in": 30.01,
              "precip_mm": 0,
              "precip_in": 0,
              "snow_cm": 0,
              "humidity": 47,
              "cloud": 30,
              "feelslike_c": 24.8,
              "feelslike_f": 76.7,
              "windchill_c": 23.4,
              "windchill_f": 74.1,
              "heatindex_c": 24.8,
              "heatindex_f": 76.7,
              "dewpoint_c": 11.6,
              "dewpoint_f": 52.8,
              "will_it_rain": 0,
              "chance_of_rain": 0,
              "will_it_snow": 0,
              "chance_of_snow": 0,
              "vis_km": 9,
              "vis_miles": 5,
              "gust_mph": 10.3,
              "gust_kph": 16.6,
              "uv": 5
            }
          ]
        },
        {
          "date": "2024-09-22",
          "date_epoch": 1726963200,
          "day": {
            "maxtemp_c": 19.3,
            "maxtemp_f": 66.7,
            "mintemp_c": 16.2,
            "mintemp_f": 61.1,
            "avgtemp_c": 17.2,
            "avgtemp_f": 62.9,
            "maxwind_mph": 8.7,
            "maxwind_kph": 14,
            "totalprecip_mm": 11.58,
            "totalprecip_in": 0.46,
            "totalsnow_cm": 0,
            "avgvis_km": 8.9,
            "avgvis_miles": 5,
            "avghumidity": 88,
            "daily_will_it_rain": 1,
            "daily_chance_of_rain": 88,
            "daily_will_it_snow": 0,
            "daily_chance_of_snow": 0,
            "condition": {
              "text": "Moderate rain",
              "icon": "//cdn.weatherapi.com/weather/64x64/day/302.png",
              "code": 1189
            },
            "uv": 2
          },
          "astro": {
            "sunrise": "06:47 AM",
            "sunset": "06:58 PM",
            "moonrise": "08:34 PM",
            "moonset": "01:04 PM",
            "moon_phase": "Waning Gibbous",
            "moon_illumination": 79,
            "is_moon_up": 1,
            "is_sun_up": 0
          },
          "hour": [
            {
              "time_epoch": 1727006400,
              "time": "2024-09-22 13:00",
              "temp_c": 17.5,
              "temp_f": 63.6,
              "is_day": 1,
              "condition": {
                "text": "Light rain shower",
                "icon": "//cdn.weatherapi.com/weather/64x64/day/353.png",
                "code": 1240
              },
              "wind_mph": 6.9,
              "wind_kph": 11.2,
              "wind_degree": 109,
              "wind_dir": "ESE",
              "pressure_mb": 1012,
              "pressure_in": 29.88,
              "precip_mm": 0.51,
              "precip_in": 0.02,
              "snow_cm": 0,
              "humidity": 90,
              "cloud": 89,
              "feelslike_c": 17.5,
              "feelslike_f": 63.6,
              "windchill_c": 17.5,
              "windchill_f": 63.6,
              "heatindex_c": 17.5,
              "heatindex_f": 63.6,
              "dewpoint_c": 15.8,
              "dewpoint_f": 60.4,
              "will_it_rain": 1,
              "chance_of_rain": 100,
              "will_it_snow": 0,
              "chance_of_snow": 0,
              "vis_km": 10,
              "vis_miles": 6,
              "gust_mph": 9.6,
              "gust_kph": 15.5,
              "uv": 4
            }
          ]
        },
        {
          "date": "2024-09-23",
          "date_epoch": 1727049600,
          "day": {
            "maxtemp_c": 17.7,
            "maxtemp_f": 63.9,
            "mintemp_c": 13.9,
            "mintemp_f": 56.9,
            "avgtemp_c": 15.5,
            "avgtemp_f": 59.9,
            "maxwind_mph": 9.2,
            "maxwind_kph": 14.8,
            "totalprecip_mm": 11.56,
            "totalprecip_in": 0.46,
            "totalsnow_cm": 0,
            "avgvis_km": 9,
            "avgvis_miles": 5,
            "avghumidity": 88,
            "daily_will_it_rain": 1,
            "daily_chance_of_rain": 88,
            "daily_will_it_snow": 0,
            "daily_chance_of_snow": 0,
            "condition": {
              "text": "Moderate rain",
              "icon": "//cdn.weatherapi.com/weather/64x64/day/302.png",
              "code": 1189
            },
            "uv": 1
          },
          "astro": {
            "sunrise": "06:49 AM",
            "sunset": "06:55 PM",
            "moonrise": "09:13 PM",
            "moonset": "02:28 PM",
            "moon_phase": "Waning Gibbous",
            "moon_illumination": 69,
            "is_moon_up": 1,
            "is_sun_up": 0
          },
          "hour": [
            {
              "time_epoch": 1727092800,
              "time": "2024-09-23 13:00",
              "temp_c": 17.5,
              "temp_f": 63.4,
              "is_day": 1,
              "condition": {
                "text": "Patchy rain nearby",
                "icon": "//cdn.weatherapi.com/weather/64x64/day/176.png",
                "code": 1063
              },
              "wind_mph": 8.1,
              "wind_kph": 13,
              "wind_degree": 242,
              "wind_dir": "WSW",
              "pressure_mb": 1005,
              "pressure_in": 29.68,
              "precip_mm": 0.06,
              "precip_in": 0,
              "snow_cm": 0,
              "humidity": 76,
              "cloud": 88,
              "feelslike_c": 17.5,
              "feelslike_f": 63.4,
              "windchill_c": 17.5,
              "windchill_f": 63.4,
              "heatindex_c": 17.5,
              "heatindex_f": 63.4,
              "dewpoint_c": 13.2,
              "dewpoint_f": 55.7,
              "will_it_rain": 1,
              "chance_of_rain": 100,
              "will_it_snow": 0,
              "chance_of_snow": 0,
              "vis_km": 10,
              "vis_miles": 6,
              "gust_mph": 10.3,
              "gust_kph": 16.6,
              "uv": 4
            }
          ]
        },
        {
          "date": "2024-09-24",
          "date_epoch": 1727136000,
          "day": {
            "maxtemp_c": 17.5,
            "maxtemp_f": 63.4,
            "mintemp_c": 11.6,
            "mintemp_f": 52.9,
            "avgtemp_c": 14.6,
            "avgtemp_f": 58.3,
            "maxwind_mph": 9.6,
            "maxwind_kph": 15.5,
            "totalprecip_mm": 5.83,
            "totalprecip_in": 0.23,
            "totalsnow_cm": 0,
            "avgvis_km": 9.3,
            "avgvis_miles": 5,
            "avghumidity": 82,
            "daily_will_it_rain": 1,
            "daily_chance_of_rain": 89,
            "daily_will_it_snow": 0,
            "daily_chance_of_snow": 0,
            "condition": {
              "text": "Moderate rain",
              "icon": "//cdn.weatherapi.com/weather/64x64/day/302.png",
              "code": 1189
            },
            "uv": 2
          },
          "astro": {
            "sunrise": "06:50 AM",
            "sunset": "06:53 PM",
            "moonrise": "10:07 PM",
            "moonset": "03:37 PM",
            "moon_phase": "Last Quarter",
            "moon_illumination": 58,
            "is_moon_up": 1,
            "is_sun_up": 0
          },
          "hour": [
            {
              "time_epoch": 1727179200,
              "time": "2024-09-24 13:00",
              "temp_c": 17.2,
              "temp_f": 62.9,
              "is_day": 1,
              "condition": {
                "text": "Patchy rain nearby",
                "icon": "//cdn.weatherapi.com/weather/64x64/day/176.png",
                "code": 1063
              },
              "wind_mph": 6.9,
              "wind_kph": 11.2,
              "wind_degree": 275,
              "wind_dir": "W",
              "pressure_mb": 1007,
              "pressure_in": 29.73,
              "precip_mm": 0.02,
              "precip_in": 0,
              "snow_cm": 0,
              "humidity": 64,
              "cloud": 99,
              "feelslike_c": 17.2,
              "feelslike_f": 62.9,
              "windchill_c": 17.2,
              "windchill_f": 62.9,
              "heatindex_c": 17.2,
              "heatindex_f": 62.9,
              "dewpoint_c": 10.4,
              "dewpoint_f": 50.7,
              "will_it_rain": 1,
              "chance_of_rain": 89,
              "will_it_snow": 0,
              "chance_of_snow": 0,
              "vis_km": 10,
              "vis_miles": 6,
              "gust_mph": 8.6,
              "gust_kph": 13.8,
              "uv": 4
            }
          ]
        },
        {
          "date": "2024-09-25",
          "date_epoch": 1727222400,
          "day": {
            "maxtemp_c": 16.1,
            "maxtemp_f": 60.9,
            "mintemp_c": 11.8,
            "mintemp_f": 53.3,
            "avgtemp_c": 14,
            "avgtemp_f": 57.1,
            "maxwind_mph": 13.6,
            "maxwind_kph": 22,
            "totalprecip_mm": 7.91,
            "totalprecip_in": 0.31,
            "totalsnow_cm": 0,
            "avgvis_km": 9.8,
            "avgvis_miles": 6,
            "avghumidity": 89,
            "daily_will_it_rain": 1,
            "daily_chance_of_rain": 88,
            "daily_will_it_snow": 0,
            "daily_chance_of_snow": 0,
            "condition": {
              "text": "Moderate rain",
              "icon": "//cdn.weatherapi.com/weather/64x64/day/302.png",
              "code": 1189
            },
            "uv": 3
          },
          "astro": {
            "sunrise": "06:52 AM",
            "sunset": "06:51 PM",
            "moonrise": "11:14 PM",
            "moonset": "04:28 PM",
            "moon_phase": "Waning Crescent",
            "moon_illumination": 48,
            "is_moon_up": 1,
            "is_sun_up": 0
          },
          "hour": [
            {
              "time_epoch": 1727265600,
              "time": "2024-09-25 13:00",
              "temp_c": 15.1,
              "temp_f": 59.2,
              "is_day": 1,
              "condition": {
                "text": "Light rain shower",
                "icon": "//cdn.weatherapi.com/weather/64x64/day/353.png",
                "code": 1240
              },
              "wind_mph": 3.1,
              "wind_kph": 5,
              "wind_degree": 260,
              "wind_dir": "W",
              "pressure_mb": 993,
              "pressure_in": 29.32,
              "precip_mm": 0.22,
              "precip_in": 0.01,
              "snow_cm": 0,
              "humidity": 90,
              "cloud": 100,
              "feelslike_c": 15.1,
              "feelslike_f": 59.2,
              "windchill_c": 15.1,
              "windchill_f": 59.2,
              "heatindex_c": 15.1,
              "heatindex_f": 59.2,
              "dewpoint_c": 13.5,
              "dewpoint_f": 56.3,
              "will_it_rain": 1,
              "chance_of_rain": 100,
              "will_it_snow": 0,
              "chance_of_snow": 0,
              "vis_km": 10,
              "vis_miles": 6,
              "gust_mph": 4.5,
              "gust_kph": 7.2,
              "uv": 4
            }
          ]
        }
      ]
    }
  }

const getForecastData = (data, store) => {
    return function (dispatch) {
      dispatch(updateLoader(true));
      let date = new Date();
      let url =  process.env.REACT_APP_WEATHER_BASE_API 
      +"forecast.json?key=" 
      // + process.env.REACT_APP_WEATHER_API_KEY
      + "&q=" + data
      +"&days=5&hour="+date.getHours();

      const config = {
          method: "GET",
          url:  url,
          headers: {
              'Content-Type': 'application/json',
          },
      };
      axios(config).then((response) => {
          dispatch(updateLoader(false));
          if (response?.data.location) {
              const storeData = {
                  key: 'weatherData',
                  value: response.data
              }
              dispatch(updateStore(storeData));
              dispatch(updatePermanentStore(storeData));
          }
      }, (err) => {
          const storeData = {
            key: 'weatherData',
            value: store.storage?.data?.weatherData || {}
          }
          dispatch(updateStore(storeData));
          toast.error("Unrecognised error, while fetching weather data!", 2000)
      })
    }
};

export default getForecastData;