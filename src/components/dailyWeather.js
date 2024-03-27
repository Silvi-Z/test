import React, { useEffect, useState } from "react";
import moment from "moment"
import { DailyWatherItem, DailyWatherList } from "../styled";
import { useDispatch, useSelector } from "react-redux";

const DailyWather = ({}) => {
    const [fiveDays, setFiveDays] = useState()
    const dispatch = useDispatch()
    const dailyInfo = useSelector(state=>state.dailyInfo);
    const selectedDay = useSelector(state=>state.hourlyInfo);
   
    const getFiveDays = () => {
        setFiveDays(dailyInfo?.filter(item=> (
            moment(item?.dt_txt).format('HH') === "00"
        )))
    }
    useEffect(()=>{
        getFiveDays()
    },[dailyInfo])

    const selectDay = (day) => {
        dispatch({ type: "HOURLY", val: dailyInfo?.filter(item=> (
            moment(item?.dt_txt).format('DD') === moment(day?.dt_txt).format('DD')
         )) })
    }

    return(
        <DailyWatherList>
            {fiveDays?.map(item=>(
                <DailyWatherItem selected={moment(item?.dt_txt).format('DD-MM') === moment(selectedDay[0]?.dt_txt).format('DD-MM')} onClick={()=>selectDay(item)}>{moment(item?.dt_txt).format('DD-MM')}
                <span>{`${Math.floor(item?.main.temp)} C`}<img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}/></span></DailyWatherItem>
            ))}
        </DailyWatherList>
    )
};

export default DailyWather;