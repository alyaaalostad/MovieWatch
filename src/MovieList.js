import React, { Component } from "react";
import { connect } from "react-redux";
import MovieRow from "./MovieRow";
import "./App.css";
import SearchBar from "./SearchBar";
import { deleteMovie } from "./store/actions";
class MovieList extends Component {
  state = {
    filteredMovies: this.props.movies
  };

  filterMovies = query => {
    query = query.toLowerCase();
    let filteredMovies = this.props.movies.filter(movie =>
      `${movie.name}`.toLowerCase().includes(query)
    );
    this.setState({ filteredMovies: filteredMovies });
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
  };
  render() {
    const name = this.props.movies.name;
    let movies = this.state.filteredMovies;
    if (name) {
      movies = movies.filter(movie => movie.name === name);
    }
    const movieRow = this.props.movies
      .filter(movie => this.props.watched === movie.watched)
      .map(movie => <MovieRow movie={movie} />);
    return (
      <div className="background">
        <h3></h3>
        <SearchBar onChange={this.filterMovies} />
        <br></br>
        <table className="mt-3 table">
          <thead>
            <tr>
              <th className="design2">movie name</th>
              <th className="design2">status</th>
              <th className="design2">delete</th>
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
