import React from 'react';
<<<<<<< HEAD
import './Card.css';

export default function Card ({min, max, name, img, onClose, id}) {
    return (
      <div className="card">
        <div id="closeIcon" className="row">
            <button onClick={onClose} className="btn btn-sm btn-danger">X</button>
        </div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p>Min</p>
              <p>{min}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p>Max</p>
              <p>{max}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};
=======

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
>>>>>>> ccc3b8ff27a3978819945e6fe01f86441d008595
