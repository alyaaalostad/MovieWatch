const initialState = {
  movies: [
    {
      name: "",
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
      const taskToDelete = action.payload;
      return {
        ...state,
        movies: state.movies.filter(movie => movie !== taskToDelete)
      };
    case "CHANGE_MOVIE":
      const taskToChange = action.payload;

      return {
        ...state,
        movies: state.movies.map(movie =>
          movie !== taskToChange ? movie : { ...movie, watched: !movie.watched }
        )
      };
    default:
      return state;
  }
};
