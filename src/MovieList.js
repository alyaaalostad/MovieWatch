import React, { Component } from "react";
import { connect } from "react-redux";
import MovieRow from "./MovieRow";
import "./App.css";
import SearchBar from "./SearchBar";
import { deleteMovie } from "./store/actions";
class MovieList extends Component {
  state = {
    query: ""
  };

  filterMovies = query => {
    query = query.toLowerCase();
    this.setState({ query: query });
    // this.setState({ filteredMovies: filteredMovies });
  };

  render() {
    const movieRow = this.props.movies
      .filter(movie => this.props.watched === movie.watched)
      .filter(movie => `${movie.name}`.toLowerCase().includes(this.state.query))
      .map(movie => <MovieRow movie={movie} />);

    return (
      <div className="background">
        <h3></h3>
        <SearchBar onChange={this.filterMovies} />
        <br></br>
        <table className="mt-3 table">
          <thead>
            <tr className="design4">
              <th className="tablecolor1">movie name</th>
            </tr>
          </thead>
          <tbody className="design2">{movieRow}</tbody>
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
