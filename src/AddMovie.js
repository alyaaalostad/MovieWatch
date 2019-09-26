import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
//Actions
import { addMovie } from "./store/actions";

class AddMovie extends Component {
  state = {
    name: ""
  };
  handleChange = event => {
    this.setState({ name: event.target.value });
  };
  handleSubmit = () => {
    this.props.addMovie(this.state.name);
  };
  render() {
    return (
      <div className="form-group col-lg-6 col-12 mx-auto">
        <div className="input-group my-3">
          <input
            className="form-control"
            type="text"
            onChange={event => this.handleChange(event)}
            value={this.state.name}
          />
          <div className="input-group-append">
            <span
              className="input-group-text"
              onClick={() => this.props.addMovie(this.state.name)}
            >
              +
            </span>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addMovie: movieName => dispatch(addMovie(movieName))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddMovie);
