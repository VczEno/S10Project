import React, { useEffect, useState } from 'react'
import { Alert, Container, Spinner } from 'react-bootstrap'
import { CurrentWeather } from '../Components/CurrentWeather'
import { Forecast } from '../Components/Forecast'


export const Results = ({ geoCoord, apiKey }) => {

    const fetchWeather = 'https://api.openweathermap.org/data/2.5/weather?lat=' + geoCoord.lat + '&lon=' + geoCoord.lon + '&units=metric&lang=it&appid=' + apiKey
    const fetchForecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + geoCoord.lat + '&lon=' + geoCoord.lon + '&units=metric&lang=it&appid=' + apiKey

    const [weather, setWeather] = useState('')
    const [forecast, setForecast] = useState([])
    const [isLoading, setLoading] =useState(false)
    const [errMsg, setErrMsg] = useState(false)



    const handleWeather = () => {
        setForecast(true)
        fetch(fetchWeather)
            .then(response => response.json())
            .then(json => {
                console.log(json)
                setWeather(json)
                setLoading(false)
            })
            .catch(err => {console.log(err)
                            setLoading(false)
                            setErrMsg(true)
            })

    }
    const handleForecast = () => {
        setLoading(true)
        fetch(fetchForecast)
            .then(response => response.json())
            .then(json => {
                console.log(json)
                setForecast(json)
                setLoading(false)
            })
            .catch(err => {console.log(err)
                setLoading(false)
                setErrMsg(true)
})

    }
    useEffect(handleWeather, [])
    useEffect(handleForecast, [])

    const degToCardinals = (deg) => {
        switch (true) {
            case deg<22 || deg>337  :
                return 'N';
            case deg>22 && deg<66  :
                return 'NE';
            case deg>66 && deg<112  :
                return 'E';
                case deg>111 && deg<157 :
                    return 'SE';
                    case deg>156 && deg<202 :
                    return 'S';
                    case deg>201 && deg<247 :
                    return 'SW';
                    case deg>246 && deg<292 :
                    return 'W';
                    case deg>291 && deg<337 :
                    return 'NW';
            
            default:
                return deg;
        }  
    }

    function convSecToDate(sec) { //per avere la data delle previsioni in formato locale
        const day = new Date(sec * 1000).toLocaleDateString()
        return day
    }



    return (
        <>
            {weather.weather && forecast.list &&
                <>
                    <CurrentWeather weather={weather} degToCard={degToCardinals} />
                    <Forecast forecast={forecast} degToCard={degToCardinals} />
                </>}

            {isLoading &&
                <Container className='text-center'>
                    <Spinner variant='secondary' className='m-5'></Spinner>
                    
                </Container>}

            {errMsg &&
                <Container className='text-center'>
                <Alert variant='secondary'>C'è stato un errore nel caricamento della pagina, ti invitiamo a riprovare più tardi.</Alert>
            </Container>}

        </>
    )
}
