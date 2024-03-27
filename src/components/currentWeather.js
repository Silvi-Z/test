import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CurrentWeatherWrapper } from "../styled";

const CurrentWeather = ({}) => {
    const dispatch = useDispatch()
    const currentCityInfo = useSelector(state=>state.currentCityInfo);
    const currentCity = useSelector(state=>state.currentCity);


    const getWeather = async () => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=bc774cdb8a3cf79b9a053e6628b79fb0&units=metric`);
        const weather = await response.json();
        weather.cod === "404" ? alert(weather.message) : dispatch({ type: "CURENT", val:weather})
      }

      useEffect(()=>{
        getWeather()
      },[currentCity])
    return(
        <CurrentWeatherWrapper>
            <h1>{currentCityInfo?.name}</h1>
            <h3>{`${Math.floor(currentCityInfo?.main?.temp)} C`}</h3>
            <img src={`https://openweathermap.org/img/wn/${currentCityInfo?.weather && currentCityInfo.weather[0].icon}.png`}/>
        </CurrentWeatherWrapper>
    )
};

export default CurrentWeather