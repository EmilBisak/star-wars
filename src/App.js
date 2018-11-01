import React, { Component } from 'react';
import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
const axios = require('axios');

class App extends Component {

  state = {
    people: []
  }

  componentDidMount() {
    axios.get('https://swapi.co/api/people/')
      .then(response => response)
      .then(json => {
        this.setState({
          people: json.data.results
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Header />
        <Main people={this.state.people}/>
        <Footer people={this.state.people}/>
      </div>
    );
  }
}

export default App;
