const initialState = {
  moviesFavourites: [], // [{title:titulo de la pelicula, id: id de la}]
  moviesLoaded: [],
  movieDetail: {}
};

export default function rootReducer(state = initialState,action){
  switch (action.type) {
    case 'ADD_MOVIE_FAVORITE':
      return {
        ...state,
        moviesFavourites:[...state.moviesFavourites,action.payload]
         //action.payload va a ser {title:titulo de la pelicula y id: id de la pelicula que necesita para hacer el remove }
      }
    
    case "GET_MOVIES":
      return {
        ...state,
        moviesLoaded: action.payload.Search
      }
     
    case "GET_MOVIE_DETAIL":
      return{
        ...state,
        movieDetail: action.payload // me trae un objeto con los detalles
      }

    case  "REMOVE_MOVIE_FAVOURITE":
      return {
        ...state,
        moviesFavourites: state.moviesFavourites.filter((elem)=>elem.id !==action.payload )
                                                        // el id para remover se encuentra cuando se agrega una peli a FAV
      }
  
    default: 
    return state
     
  }


}