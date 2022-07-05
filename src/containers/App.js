import React, { useState } from 'react';
import { Route, Routes} from 'react-router-dom';

import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import About from '../components/about.jsx'
import Ciudad from '../components/Ciudad.jsx'
const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onFilter(id) {
    let ciudad = cities.find(ci => ci.id === parseInt(id));  
    return ciudad;
  }

  return (
    <div className="App">
      
        <Route 
          path="/" 
          render={() => <Nav onSearch={onSearch}/>}
        />
        <Route 
          exact path='/' 
          render = {() => <Cards cities={cities} onClose={onClose}/>}
        />
        <Route 
          path='/about' 
          component={About}
        /> 
        <Route 
          exact path='/ciudad/:ciudadId' 
          //lo que quiero es pasarle a ciudad solo city con :ciudadId usando match
          //si quier tener todas las props (match location y history) puedo hacer: 
        //render={(props) => <Ciudad city= {onFilter(props.match.params.ciudadId)} />} o un destructuring de alguna o todas las props:
          render={({match}) => <Ciudad city= {onFilter(match.params.ciudadId)} />}
                                  
        /> 

    </div>
  );
}
export default App;
