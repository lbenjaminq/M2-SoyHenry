import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {removeMovieFavorite} from '../../actions/index.js'
// import { Link } from 'react-router-dom';
import './Favorites.css';

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {
            this.props.movieFavorite?.map((e)=> 
              <div key={e.id}>                            {/*se le pone id y no imdbID porque al momento de agregar la  pelicula a favoritos se le agrega un objeto con propiedades title y id */}
                <Link to={`/movie/${e.id}`}>
                <li>{e.title}</li>
                </Link>
                <button onClick={()=> this.props.delete(e.id) }>x</button>
              </div>
             )
          }
        </ul>
      </div>
    );
  }
}

 function mapStateToProps(state){
    return{
      movieFavorite: state.moviesFavourites
    }
 }
 function mapDispatchToProps(dispatch){
      return{
        delete: id => dispatch(removeMovieFavorite(id))
      }
 }

 
export default  connect(mapStateToProps,mapDispatchToProps)(ConnectedList) 

