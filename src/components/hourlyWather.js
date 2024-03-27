import React, { useEffect, useState } from "react";
import moment from "moment"
import { HourlyWatherList } from "../styled";
import { useDispatch, useSelector } from "react-redux";


const HourlyWather = ({}) => {
    const dispatch = useDispatch()
    const dailyInfo = useSelector(state=>state.hourlyInfo);
    const currentCity = useSelector(state=>state.currentCity);

    const getDailyWeather = async() => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${currentCity}&appid=bc774cdb8a3cf79b9a053e6628b79fb0&units=metric`);
        const weather = await response.json();
        dispatch({ type: "HOURLY", val:weather?.list.slice(0,6)})
        dispatch({ type: "DAILY", val:weather?.list})

      }

      useEffect(()=>{
        getDailyWeather()
      },[currentCity])

    return(
        <HourlyWatherList>
            {dailyInfo?.map(item=>(
                <li>{moment(item?.dt_txt).format('hh:mm:ss')} {`${Math.floor(item?.main.temp)} C`}<img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}/></li>
            ))}
        </HourlyWatherList>
    )
};

export default HourlyWather;