import React from 'react'
import { Button, Image, Tab, Tabs,  } from 'react-bootstrap'

export const Forecast = ({ forecast }) => {

    const currentDay= new Date().getDate()
    const currentMonth=new Date().getMonth()+1
    console.log(currentDay)
    console.log(currentMonth)

    return (

        <Tabs
            defaultActiveKey="profile"
            id="justify-tab-example"
            className="mb-3"
            justify
        >
            <Tab eventKey="Oggi" title='Oggi'>
                <ul>
                    {forecast.list.map((f, index) =>
                        <li key={index}> {f.dt_txt.slice(5, 16)}
                            <Image src={'https://openweathermap.org/img/wn/' + f.weather[0].icon + '@2x.png'} alt='meteo icon' />
                            {f.weather[0].description} - temp: {Math.round(f.main.temp)}°C - precProb: {Math.round(f.pop * 100)}% - vento: {f.wind.speed}Km/h - umidità: {f.main.humidity}% - tPerc: {f.main.feels_like}°C
                        </li>)}
                </ul>
            </Tab>
            <Tab eventKey="Domani" title="Domani">
                Tab content for Domani
            </Tab>
            <Tab eventKey="longer-tab" title="Loooonger Tab">
                Tab content for Loooonger Tab
            </Tab>
            <Tab eventKey="contact" title="Contact" disabled>
                Tab content for Contact
            </Tab>
        </Tabs>



    )
}
