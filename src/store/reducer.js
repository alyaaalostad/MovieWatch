const initialState = {
  movies: [
    {
      name: "test",
      newMovieId: 0,
      watched: false
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      const newMovie = {
        name: action.payload,
        watched: false,
        id: state.movies.length + 1
      };
      return {
        ...state,
        movies: state.movies.concat(newMovie)
      };
    case "DELETE_MOVIE":
      const movieID = action.payload;
      return {
        ...state,
        authors: state.authors.filter(movie => movie.id != movieID)
      };
    case "TOGGLE":
      let movie = state.movies.find(movie => movie.id === action.payload);
      movie.watched = !movie.watched;
      return {
        ...state,
        movies: [...state.movies]
      };
    default:
      return state;
  }
};
