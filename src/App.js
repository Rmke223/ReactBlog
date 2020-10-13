import React, { Component } from 'react';
import Header from './Header';
import MeSection from './MeSection';
import About from './About'
import Portfolio from "./Portfolio"



class App extends Component {
  constructor() {
    super();
    this.pages = ["Home", "About", "Portfolio", "Blog", "Contact"]
  }

  render() {
    return (
      <div className="App container-fluid">
        <Header pages={this.pages} />
        <MeSection />
        <About />
        <Portfolio />
      </div>
    );
  }
}


export default App;
