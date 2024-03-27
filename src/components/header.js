import React, { useState } from "react";
import { HeaderWrapper } from "../styled";
import { useDispatch } from "react-redux";

const Header = () =>{
    const [city, setCity] = useState('')
    const dispatch = useDispatch()
    const searchCity = (e) => {
        e.preventDefault()
        dispatch({ type: "SEARCH", val:city})
    }
  
    return(
        <HeaderWrapper>
            <form name="myForm" onSubmit={searchCity}>
                <input type="text" name="search" onChange={(e)=>setCity(e.target.value)}/>
                <input type="submit" value="Search City"/>
            </form>
        </HeaderWrapper>
    )
};

export default Header