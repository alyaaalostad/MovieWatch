const ADD_MOVIE = "ADD_MOVIE";
const DELETE_MOVIE = "DELETE_MOVIE";
const TOGGLE = "TOGGLE";
export const addMovie = movieName => {
  return {
    type: ADD_MOVIE,
    payload: movieName
  };
};

export const deleteMovie = movieID => {
  return {
    type: DELETE_MOVIE,
    payload: movieID
  };
};

export const toggleMovie = movieID => {
  return {
    type: TOGGLE,
    payload: movieID
  };
};
