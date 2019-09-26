import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteMovie, changeMovie } from "./store/actions";

function MovieRow(props) {
  const movie = props.movie;
  return (
    <div className="containers">
      <tr>
        <td>{movie.name}</td>
        <td></td>
        <td>
          <td
            onClick={() => props.changeMovie(movie)}
            className="btn btn-success"
          >
            {movie.watched ? "unwatch" : "watch"}
          </td>
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => props.deleteMovie(movie)}
          >
            Delete
          </button>
        </td>
      </tr>
    </div>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    deleteMovie: movieID => dispatch(deleteMovie(movieID)),
    changeMovie: movieID => dispatch(changeMovie(movieID))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(MovieRow);
