import React from 'react'
import { Card, Col, Image, Row } from 'react-bootstrap'
import { IoIosCloud } from 'react-icons/io'
import { IoTimerOutline } from 'react-icons/io5'
import { PiDropHalfBottomLight } from 'react-icons/pi'
import { TbTemperature } from 'react-icons/tb'
import { FaTemperatureArrowDown } from "react-icons/fa6";
import { FaTemperatureArrowUp } from "react-icons/fa6";
import { FiSunrise } from "react-icons/fi";
import { FiSunset } from "react-icons/fi"; 
import { FiWind} from "react-icons/fi";




export const CurrentWeather = ({ weather, degToCard }) => { //aggiungere altre info alla card

    function secToTime(sec) { //per avere la data delle previsioni in formato locale
        const hour = new Date(sec * 1000).getHours()
        const min = new Date(sec * 1000).getMinutes()
        return (hour+':'+min)
    }

    return (

        <Card className="text-center mb-5 w-75 mx-auto">
            <Card.Header className='fs-1 fw-semibold'>{weather.name}, {weather.sys.country}</Card.Header>
            <Card.Body className='d-flex flex-column flex-sm-row justify-content-evenly align-content-evenly align-items-center'>
                <Card.Title className='d-flex flex-sm-column justify-content-center align-items-center'>
                    <p className='fs-1 m-0'>{Math.round(weather.main.temp)}°C</p>
                    <Image src={'https://openweathermap.org/img/wn/' + weather.weather[0].icon + '@2x.png'} alt='meteo icon' />
                    {weather.weather[0].description}
                </Card.Title>
                <Card.Text className='d-flex flex-column fs-4'>
                    <div className='d-flex justify-content-evenly'>
                    <p><FaTemperatureArrowDown />{Math.round(weather.main.temp_min)}°C</p>
                    <p><FaTemperatureArrowUp /> {Math.round(weather.main.temp_max)}°C</p>
                    </div>
                    <p> <FiWind/> <b>{degToCard(weather.wind.deg)}</b> {weather.wind.speed} Km/h </p>
                    <div className='d-flex justify-content-evenly'>
                    <p><FiSunrise /> {secToTime(weather.sys.sunrise)} </p>
                    <p><FiSunset/> {secToTime(weather.sys.sunset)} </p>
                    </div>
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
                <Row className='text-center'>
                    <Col sm={6} md={3}>
                        <TbTemperature />T. percepita: {Math.round(weather.main.feels_like)}°C
                    </Col>
                    <Col sm={6} md={3}>
                        <IoIosCloud /> Copertura: {weather.clouds.all}%
                    </Col>
                    <Col sm={6} md={3}>
                        <PiDropHalfBottomLight /> Umidità: {weather.main.humidity}%
                    </Col>
                    <Col sm={6} md={3}>
                        <IoTimerOutline />Pressione: {weather.main.pressure} mbar
                    </Col>
                </Row>

            </Card.Footer>
        </Card>


    )
}
