import React from 'react'
import { Button, Card, Image } from 'react-bootstrap'

export const CurrentWeather = ({ weather }) => { //aggiungere altre info alla card
    let info = weather.weather[0]
    return (
        <Card className="text-center">
            <Card.Header className='fs-3'>{weather.name}</Card.Header>
            <Card.Body>
                <Card.Title className='fs-1'>
                    <span>{Math.round(weather.main.temp)}°C</span>
                    <Image src={'https://openweathermap.org/img/wn/' + weather.weather[0].icon + '@2x.png'} alt='meteo icon' />
                </Card.Title>
                <Card.Text>{info.description}</Card.Text>
                <Card.Text>Min. {weather.main.temp_min}°C - Max. {weather.main.temp_max}°C</Card.Text>
{/*                 {<Button variant="primary">Scopri le previsioni per i prossimi giorni</Button>}
 */}            </Card.Body>
            <Card.Footer className="text-muted"></Card.Footer>
        </Card> 
    )
}
