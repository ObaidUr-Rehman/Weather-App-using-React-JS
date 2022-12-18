import React, { useState, useEffect } from "react";
import "./Tempapp.css";
import DeviceThermostatRoundedIcon from '@mui/icons-material/DeviceThermostatRounded';

const Tempapp = () => {

    const [city, setcity] = useState();
    const [search, setsearch] = useState("")
    
    useEffect(() => {
        const fetchAPI = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=1fe55f27829afc97ea60a0f3b1978686`
            const response = await fetch(url);
            const resJSON = await response.json();
            setcity(resJSON.main);
        };
        fetchAPI();
    }, [search]);

// window.location.href;    tells the url

    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input
                        type="search" className="inputField"
                        onChange={(event) => { setsearch (event.target.value)
                        }} />
                </div>
            

            { !city ? (
                <p className='errorMsg'>No Data Found</p>
            ) : ( 

                <div>
                <div className="info">

                    <h1 className="location">
                    <DeviceThermostatRoundedIcon style={{fontSize:"100px"}}/>{search}
                    </h1>

                    <h2 lassName="temp">
                        {city.temp}
                    </h2>

                    <h3 className="tempmin_max"> 
                    Min: {city.temp_min}°C | Max: {city.temp_max}°C
                    </h3>

                </div>

                <div className="wave -one"></div>
                <div className="wave -two"></div>
                <div className="wave -three"></div>
                </div>

            )}

                
            </div>
        </>
    )
}

export default Tempapp;