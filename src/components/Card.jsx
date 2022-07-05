import React from 'react';

export default function Card(props) {
  // acá va tu código
    function qwe(){
      props.onClose()
    }
  return (
  <div>

    <button onClick={qwe}>x</button>
    <h2>{props.name}</h2>
    <div>
          <h4>MIN</h4>
          <h5>{props.min}°</h5>
          <h4>MAX</h4>
          <h5>{props.max}°</h5>
    </div>
    
    <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="" />

  </div>
  )
};