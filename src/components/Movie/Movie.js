import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

    //ni bien se monta el componente se ejecuta la siguiente funcion

    componentDidMount(){
        this.props.getMovieDetail(this.props.match.params.id) 
    }

    render() {
        return (
            <div className="movie-detail">
                Detalle de la pelicula  
                <h2>{this.props.state.Title}</h2>
                <p>{this.props.state.Plot}</p>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        state: state.movieDetail
    }
}



export default connect(
    mapStateToProps,
   {getMovieDetail}
  )(Movie);
