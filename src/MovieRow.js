import React, { Component } from "react";
// import { connect } from "react-redux";

// import { fetchBook } from "./redux/actions";

class MovieRow extends Component {
  render() {
    return (
      <div className="containers">
        <tr>
          <td>{this.props.movie.name}</td>
          <td></td>
          <td>
            <button className="btn">
              {this.props.movie.watched ? "unwatch" : "watch"}
            </button>
          </td>
        </tr>
      </div>
    );
  }
}
// const mapStateToProps = state => {
//   return {
//     movies: state.movies
//   };
// };

export default MovieRow;
