import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { CurrentWeather } from '../Components/CurrentWeather'
import { Forecast } from '../Components/Forecast'


export const Results = ({geoCoord, apiKey}) => {

    const fetchWeather = 'https://api.openweathermap.org/data/2.5/weather?lat=' + geoCoord.lat + '&lon=' + geoCoord.lon + '&units=metric&lang=it&appid=' + apiKey
    const fetchForecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + geoCoord.lat + '&lon=' + geoCoord.lon + '&units=metric&lang=it&appid=' + apiKey

    const [weather, setWeather] = useState('')
    const [forecast, setForecast] = useState([])

    

    const handleWeather = () => {
        fetch(fetchWeather)
        .then(response => response.json())
            .then(json => {
                console.log(json)
                setWeather(json)
            })
            .catch(err => console.log(err))
        
    }
    const handleForecast = () => {
        fetch(fetchForecast)
        .then(response => response.json())
            .then(json => {
                console.log(json)
                setForecast(json)
            })
            .catch(err => console.log(err))
        
    }
    useEffect(handleWeather,[])
    useEffect(handleForecast,[])

    
   




  return (
    <>
    {/* <p>coodinate della città {geoCoord.lat} {geoCoord.lon}</p> */}
    {weather.weather && forecast.list &&
    <>
    <CurrentWeather weather={weather}/>
    <Forecast forecast={forecast}/>
    </> }
    
    {!weather && <Spinner></Spinner>}
    
    </>
  )
}
