import React from 'react';
import Card from './Card';

export default function Cards(props) {// arreglo de ciudades
  // acá va tu código
  // tip, podés usar un map
  return (
  <div>
      {
        props.cities.map(function(elem){
         return <Card  
          max={elem.main.temp_max}
          min={elem.main.temp_min}
          name={elem.name}
          img={elem.weather[0].icon}
          onClose={() => alert(elem.name)}
          key= {elem.id}
           />
        })
      }
  </div>
  )

};

//Este Componente nos va a servir para renderizar muchos Componentes Cards. Básicamente, este componente va a recibir un arreglo de ciudades (con todos sus datos), y va a crear un componente Card por cada ciudad, pasandole las props correspondientes.

