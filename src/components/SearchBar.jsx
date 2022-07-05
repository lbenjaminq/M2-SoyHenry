<<<<<<< HEAD
import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}
=======
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
>>>>>>> ccc3b8ff27a3978819945e6fe01f86441d008595
