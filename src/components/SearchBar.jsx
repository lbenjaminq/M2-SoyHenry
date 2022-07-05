import React from 'react';

export default function SearchBar(props) {//recibe por props una funcion onSearch
  // acá va tu código
function fn(){
  
  props.onSearch('Ciudad')
}

  return (
    <div>
          <input type="text"/>
          { <button onClick={fn}>Agregar</button>} /*<button onClick={()=> props.onSearch('ciudad')}></button> */
    </div>
  )
};