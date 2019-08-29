import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Projects from './components/Projects'
import BlogContainer from './containers/BlogContainer'
import Resume from './components/Resume'
// import AppRouter from './routers/AppRouter';

//Uses Node Sass

const MEDIUM_URL = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40tetragravity&api_key=xvr1x8gvbdbeyokrzcj0ehqy2gp41jmfekhqwndk&count=6'

class App extends Component {
  constructor(){
    super()
    this.state = {
      mediumPosts: []
    }
  }

  componentDidMount(){
    fetch(MEDIUM_URL)
    .then(response => response.json())
    .then(mediumObj => this.setState({
      mediumPosts: mediumObj
    })  
    )
  }
sfdfdsf
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
        <Projects />
        <BlogContainer 
        mediumPosts={this.state.mediumPosts}/>
        <Resume />
      </div>
    );
  }
}

export default App;
