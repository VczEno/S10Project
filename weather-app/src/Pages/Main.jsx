import React, { useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { FaSun } from 'react-icons/fa'

import { useNavigate } from 'react-router-dom'



/* const fetchGeo= 'http://api.openweathermap.org/geo/1.0/direct?q='+search+'&limit='+5+'&appid='+apiKey */

export const Main = ({ search, setSearch, setGeoCoord, apiKey, geoCoord }) => {
    /* const [geoCoord, setGeoCoord] = useState({ lat: '', lon: '' }) */
    

    const navigate= useNavigate()

/*     const fetchWeather = 'https://api.openweathermap.org/data/2.5/weather?lat=' + geoCoord.lat + '&lon=' + geoCoord.lon + '&units=metric&lang=it&appid=' + apiKey
 */    const fetchGeo = 'http://api.openweathermap.org/geo/1.0/direct?q=' + search + '&appid=' + apiKey



 const handleSearch = async () => {
        await fetch(fetchGeo)
            .then(response => response.json())
            .then(json => {
                console.log(json)
                setGeoCoord({ lat: json[0].lat, lon: json[0].lon })
            })
            .catch(err => console.log(err))
           await  setSearch('')
            navigate('/results')
            
    }  

    /* const handleWeather = () => {
        fetch(fetchWeather)
        .then(response => response.json())
            .then(json => {
                console.log(json)
                setWeather(json)
            })
            .catch(err => console.log(err)) */
       
    return (
        <>
            <h1 className='display-4 text-center m-4'>Weather App <FaSun /></h1>
            <InputGroup size="md">
                <Form.Control
                    id='ricercaMain'
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder='inserisci una città per scoprire che tempo farà nei prossimi giorni...'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onSubmit={handleSearch}
                    
                />
                 <Button onClick={handleSearch} >Cerca</Button> 
                 
            </InputGroup>
        </>
    )

}
