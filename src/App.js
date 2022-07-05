<<<<<<< HEAD
import React from "react";

import Favorites from "./components/Favorites/Favorites";
import Buscador from "./components/Buscador/Buscador";
import NavBar from "./components/NavBar/NavBar";
import { Route } from "react-router-dom";
import Movie from "./components/Movie/Movie";

function App() {
  return (
      <React.Fragment>
          <NavBar />
          <Route exact path="/" component={Buscador} />
          <Route path="/favs" component={Favorites} />
          <Route path="/movie/:id" component={Movie} /> {/*Route le pasa las propiedades Match,History,location*/}
      </React.Fragment>
=======
import React from 'react';
<<<<<<< HEAD
import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import data, { Cairns } from './data.js';

function App() {
  return (
    <div className="App">
      <div>
        <Card
          max={Cairns.main.temp_max}
          min={Cairns.main.temp_min}
          name={Cairns.name}
          img={Cairns.weather[0].icon}
          onClose={() => alert(Cairns.name)}
        />
      </div>
      <hr />
      <div>
        <Cards
          cities={data}
        />
      </div>
      <hr />
      <div>
        <SearchBar
          onSearch={(ciudad) => alert(ciudad)}
        />
      </div>
    </div>
=======
import logo from './logo.svg';
import Form from './Form.jsx';

function App() {
  return (
    <Form />
>>>>>>> 94f920d9566b9305db5d6e223fb0368dc771098a
>>>>>>> 7c9fae24c5f06a459a976773e8883b728cb68b6e
  );
}

export default App;
