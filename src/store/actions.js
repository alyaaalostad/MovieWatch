const ADD_MOVIE = "ADD_MOVIE";
const DELETE_MOVIE = "DELETE_MOVIE";
const CHANGE_MOVIE = "CHANGE_MOVIE";
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

export const changeMovie = movieID => {
  return {
    type: CHANGE_MOVIE,
    payload: movieID
  };
};
