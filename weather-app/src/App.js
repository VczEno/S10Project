import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Main } from './Pages/Main';
import { Nav } from './Components/Nav';
import { Results } from './Pages/Results';
import { Footer } from './Components/Footer';
import { Container } from 'react-bootstrap';
import { useState } from 'react';



function App() {

  const [search, setSearch]= useState('')
  const [geoCoord, setGeoCoord] = useState({ lat: '', lon: '' })
  const apiKey = 'db4990ba7fe8b5c699238237ffcd0a26'




  return (
    <>
    <BrowserRouter> 
    <Nav/>
    <Container className='m-5 mx-auto'>
    <Routes>
      <Route path='/' element={<Main setSearch={setSearch} search={search}  geoCoord={geoCoord} setGeoCoord={setGeoCoord} apiKey={apiKey}/>} />
      <Route path='/results' element={<Results geoCoord={geoCoord} apiKey={apiKey}/>}/> 
    </Routes>
    </Container>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;

/* Funzionalità

L'utente dovrà essere in grado di selezionare la città e ricevere le informazioni sul tempo (pioverà?, temperatura?, prossimi giorni?)

Dovrai avere una pagina principale con input di ricerca e una pagina per visualizzare i risultati
Puoi usare le Open Weather API per costruire il tuo sito del Meteo personale!

registrati su: https://openweathermap.org/api
le chiamate che dovrai fare saranno a:

/geo/1.0/direct
/data/2.5/weather
/data/2.5/forecast */
