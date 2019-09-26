import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteMovie, changeMovie } from "./store/actions";
import "./App.css";

function MovieRow(props) {
  const movie = props.movie;
  return (
    <div className=" center">
      <table className="mt-13 table">
        <tr>
          <td className="tablecolor"> {movie.name}</td>

          <td className="tablecolor">
            <td
              onClick={() => props.changeMovie(movie)}
              className=" move btn btn-success "
            >
              {movie.watched ? "unwatch" : "watch"}
            </td>
          </td>
          <td className="tablecolor">
            <button
              className="move btn btn-danger "
              onClick={() => props.deleteMovie(movie)}
            >
              Delete
            </button>
          </td>
        </tr>
      </table>
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
