import React from 'react'
import { Accordion, Col, Image, Row, Tab, Tabs, } from 'react-bootstrap'
import { FiWind} from "react-icons/fi";
import { SiRainmeter } from "react-icons/si";
import { IoIosCloud } from "react-icons/io";
import { IoTimerOutline } from "react-icons/io5";
import { TbTemperature } from "react-icons/tb";
import { PiDropHalfBottomLight } from "react-icons/pi";

export const Forecast = ({ forecast, degToCard }) => {

  /*   const degToCardinals = (deg) => {
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
    } */


    function convSecToDate(sec) { //per avere la data delle previsioni in formato locale
        const day = new Date(sec * 1000).toLocaleDateString()
        return day
    }

    const forecastDays = () => { // funzione che genera le date per le tabs, tenendo conto dell'eventuale cambio del mese
        const daysArr = []
        let currentDate = new Date()
        for (let i = 0; i < 6; i++) {
            daysArr.push(currentDate.toLocaleDateString())
            currentDate.setDate(currentDate.getDate() + 1)
        }
        return daysArr

    }
    return (

        <Tabs
            defaultActiveKey={forecastDays()[0]}
            id="justify-tab-example"
            className="mb-3"
            justify
        >
            {forecastDays().map((day, index) => {
                return (
                    <Tab eventKey={day} key={index} title={day}>
                        
                            {forecast.list.filter(f => convSecToDate(f.dt) === day).map((f, index) =>


                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>
                                            <Row key={index} className='align-items-center text-center w-100'
                                            >
                                                <Col xs={6} md={1}>
                                                    {f.dt_txt.slice(11, 16)}
                                                </Col>
                                                <Col xs={6} md={2} className='fs-2 fw-semibold'>
                                                    {Math.round(f.main.temp)}°C
                                                </Col>
                                                <Col xs={12} md={4} className='d-flex align-items-center justify-content-center'>
                                                    <Image src={'https://openweathermap.org/img/wn/' + f.weather[0].icon + '@2x.png'} alt='meteo icon' height='50px' />
                                                    {f.weather[0].description}
                                                </Col>
                                                <Col xs={6} md={3}> 
                                                <SiRainmeter /> {Math.round(f.pop * 100)}%
                                                </Col>
                                                <Col  xs={6}md={2}>
                                                     <FiWind/> <b>{degToCard(f.wind.deg)}</b> {f.wind.speed} Km/h 
                                                </Col>

                                            </Row>

                                        </Accordion.Header>
                                        <Accordion.Body>
                                        <Row className='text-center'>
                                        <Col sm={6} md={3}>
                                        <TbTemperature />T. percepita: {Math.round(f.main.feels_like)}°C
                                        </Col>
                                        <Col sm={6} md={3}>
                                        <IoIosCloud/> Copertura: {f.clouds.all}%
                                        </Col>
                                        <Col sm={6} md={3}>
                                        <PiDropHalfBottomLight /> Umidità: {f.main.humidity}%
                                        </Col>
                                        <Col sm={6} md={3}>
                                        <IoTimerOutline />Pressione: {f.main.pressure} mbar
                                        </Col>
                                        </Row>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>


                            )

                            }
                        
                    </Tab>
                )
            })
            }








            {/*  <Tab eventKey="Oggi" title={currentDate(0).slice(0,-5)}>
                <ul>
                    {forecast.list.filter(f => convSecToDate(f.dt) == currentDate(0)).map((f, index) =>

                        <li key={index}>{convSecToDate(f.dt)} {f.dt_txt.slice(11, 16)}
                            <Image src={'https://openweathermap.org/img/wn/' + f.weather[0].icon + '@2x.png'} alt='meteo icon' />
                            {f.weather[0].description} - temp: {Math.round(f.main.temp)}°C - precProb: {Math.round(f.pop * 100)}% - vento: {f.wind.speed}Km/h - umidità: {f.main.humidity}% - tPerc: {f.main.feels_like}°C
                        </li>
                    )

                    } </ul>
            </Tab>

           <Tab eventKey="Domani" title={currentDate(1)}>
                <ul>
                {forecast.list.filter(f => convSecToDate(f.dt) == currentDate(1)).map((f, index) =>

                                                <li key={index}>{convSecToDate(f.dt)} {f.dt_txt.slice(11, 16)}

                            
                            <Image src={'https://openweathermap.org/img/wn/' + f.weather[0].icon + '@2x.png'} alt='meteo icon' />
                            {f.weather[0].description} -
                            temp: {Math.round(f.main.temp)}°C -
                            precProb: {Math.round(f.pop * 100)}% -
                            vento: {f.wind.speed}Km/h -
                            umidità: {f.main.humidity}% -
                            tPerc: {f.main.feels_like}°C
                        </li>)}
                </ul>
            </Tab> 
              <Tab eventKey="longer-tab" title={currentDay+2}>
                <ul>
                    {forecast.list.filter(f => convSecToDateDay(f.dt) == currentDay + 2).map((f, index) =>
                        <li key={index}> {f.dt_txt.slice(5, 16)} giorno: {convSecToDateDay(f.dt)} mese: {convSecToDateMonth(f.dt)}
                            <Image src={'https://openweathermap.org/img/wn/' + f.weather[0].icon + '@2x.png'} alt='meteo icon' />
                            {f.weather[0].description} - temp: {Math.round(f.main.temp)}°C - precProb: {Math.round(f.pop * 100)}% - vento: {f.wind.speed}Km/h - umidità: {f.main.humidity}% - tPerc: {f.main.feels_like}°C
                        </li>)}
                </ul>
            </Tab> 
            <Tab eventKey="contact" title="Contact" disabled>
                Tab content for Contact
            </Tab> */}
        </Tabs>

    )

}
