import React, { Component } from "react";

// Components
// import Sidebar from "./Sidebar";
import AddMovie from "./AddMovie";
import MovieList from "./MovieList";
class App extends Component {
  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="content col-10">
            <AddMovie />
            <MovieList watched={true} />
            <MovieList watched={false} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
