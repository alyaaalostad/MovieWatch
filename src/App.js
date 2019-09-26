import React, { Component } from "react";
import "./App.css";
// Components
// import Sidebar from "./Sidebar";
import AddMovie from "./AddMovie";
import MovieList from "./MovieList";
class App extends Component {
  render() {
    return (
      <div className="background">
        <div className="row ">
          <div className="content col-10">
            <h1 className="design">MovieWatch</h1>
            <AddMovie />
            <p className="design3">Watch</p>
            <MovieList watched={true} />
            <br></br>
            <br></br>
            <br></br>
            <p className="design3">WatchList </p>
            <MovieList watched={false} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
