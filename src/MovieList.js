import React, { Component } from "react";
import { connect } from "react-redux";
import MovieRow from "./MovieRow";
import { deleteMovie } from "./store/actions";
class MovieList extends Component {
  handleChange = event => {
    this.setState({ name: event.target.value });
  };
  render() {
    const movieRow = this.props.movies
      .filter(movie => this.props.watched === movie.watched)
      .map(movie => <MovieRow movie={movie} />);
    return (
      <div className="movies">
        <h3></h3>
        <table className="mt-3 table">
          <thead>
            <tr>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>{movieRow}</tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};
const mapDispatchToProps = dispatch => {
  return {
    deleteMovie: movieID => dispatch(deleteMovie(movieID))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);
