import React from 'react'
import { Button, Container, Form, Image, InputGroup } from 'react-bootstrap'
import logo from '../assets/logo.png'


import { useNavigate } from 'react-router-dom'

export const Main = ({ search, setSearch, setGeoCoord, apiKey, geoCoord }) => {

    const navigate = useNavigate()
    const fetchGeo = 'http://api.openweathermap.org/geo/1.0/direct?q=' + search + '&appid=' + apiKey

    const handleSearch = async (e) => {
        e.preventDefault()
        await fetch(fetchGeo)
            .then(response => response.json())
            .then(json => {
                console.log(json)
                setGeoCoord({ lat: json[0].lat, lon: json[0].lon })
            })
            .catch(err => console.log(err))
        await setSearch('')
        navigate('/results')
    }

    return (
        <Container className='text-center'>
            <Image src={logo} className='mx-auto' height='350px'></Image>
            <Form onSubmit={handleSearch}>
                <InputGroup size="lg" className='w-75 mx-auto' >
                    <Form.Control
                        id='ricercaMain'
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder='che tempo farà nei prossimi giorni a...'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onSubmit={handleSearch}
                    />
                    <Button type='submit' onClick={handleSearch}>Cerca</Button>
                </InputGroup>
            </Form>
        </Container>
    )

}
