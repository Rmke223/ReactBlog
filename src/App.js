import React, { Component } from 'react';
import Header from './Header';
import MeSection from './MeSection';
import About from './About'
import Portfolio from "./Portfolio"
import Blog from "./Blogs"
import Footer from "./Footer"
import TicTac from "./img/tictac.jpg"
import Weather from "./img/rain.jpg"
import Vote from "./img/vote.jpg"
import Git from "./img/github.jpeg"


class App extends Component {
  constructor() {
    super();
    this.pages = [{"name":"Home", "href":"#top" },
                  {"name":"About", "href":"#about"},
                  {"name":"Portfolio", "href":"#projects"},
                  {"name":"Blog", "href":"#blog"},
                  {"name":"Contacts", "href":"#contact"}]
    this.projectData =[{"source": TicTac, "title":"Tic Tac Toe", "subTitle": "This is a simple Tic Tac Toe Game built and rendered with JavaScript", "link":"https://rmke223.github.io/TicTac/"},
                       {"source": Weather, "title":"Weather App", "subTitle": "This is a simple weather app that uses an API to display current weather information by zipcode.", "link":"https://rmke223.github.io/Weather-App/"},
                       {"source": Vote, "title":"Campaign Sites", "subTitle": "This is a Campaign website for LLoyd Christmas built with Bootstrap", "link":"https://rmke223.github.io/Campaign/"},
                       {"source": Git, "title":"Github Repositories", "subTitle": "Check out all of my other projects on Github!", "link":"https://github.com/Rmke223?tab=repositories"}]
  }

  render() {
    return (
      <div className="App container-fluid">
        <Header pages={this.pages} />
        <MeSection />
        <About />
        <Portfolio sources={this.projectData}/>
        <Blog/>
        <Footer/>
      </div>
    );
  }
}



export default App;
