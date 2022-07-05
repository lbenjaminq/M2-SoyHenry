
import './Timer.css'
import React, { useState, useEffect, useRef } from 'react';

 

const Timer = () => {
  const myRef= useRef(null)
  const [segundos, setSegundos] = useState(0);
  const [activo, setActivo] = useState(false);
  const [tipo, setTipo] = useState('Contador');

  useEffect(() => {
    let intervalo = null;
    if (activo && tipo === 'Contador') {
      intervalo = setInterval(() => {
        setSegundos(segundos => segundos + 1);
      }, 1000);
    }
    if (activo && tipo === 'Cuenta Regresiva') {
      intervalo = setInterval(() => {
        setSegundos(segundos => segundos - 1);
      }, 1000);
    }
    if (!activo && segundos !== 0 && tipo === 'Contador') {
      clearInterval(intervalo);
    }
    if (segundos === 0 && tipo === 'Cuenta Regresiva') {
      reset();
      clearInterval(intervalo);
    }

    return () => clearInterval(intervalo); // esto se ejecuta cuando se desmonte el componente(cuando no aparezca en el viewport)
  }, [activo, segundos, tipo]); // cuando alguno de estos valores cambia se ejecuta useeffect 
  //-en un principio activo:false,cuando se hace click en el boton inico el estado activo cambia activo:true entonces se ejecuta useEffect()
  //-cuando se le da click a inicio el estado segundo cambia en el setInterval
  //-cuando se le da click a contador cambia a cuenta regresiva(para que en el setInterval cambie el estado de segundos restandose en uno) y se ejecuta de nuevo useEffect()

  function toggle() {
    setActivo(!activo);
  }

  function reset() {
    setSegundos(0);
    setActivo(false);
  }

  function cambioTipo() {
    if(tipo === 'Contador') setTipo('Cuenta Regresiva')
    if(tipo === 'Cuenta Regresiva') setTipo('Contador')
}

  function agregaSegundos() {
    // `current` apunta al input y .value a lo que se escribe en el input
    let ref = myRef.current.value
    setSegundos(Number(ref)) // similar a usar un state, cambia el estado de segundos con lo que sea que hayan puesto en el input
  }

  return (
    <div className="app">
      <div className="time">
        {segundos}
      </div>
      <div className="row">
        <button onClick={toggle} className="button-primary">
        {activo ? 'Pausa' : 'Inicio'} 

        {/*si activo es true se pone el cartel en pausa, si esta en false se pone el en inicio*/}
        
        </button>
        <button onClick={reset} className="button-secondary">
          Reset
        </button>
      </div>
      <button onClick={cambioTipo} className="button">
         {tipo}
      </button>
      {tipo === 'Cuenta Regresiva' && <input type="number" ref={myRef} onChange={agregaSegundos} placeholder="Ingresa Segundos" autoComplete="off"/>}
    </div>
  );
};


export default Timer;
