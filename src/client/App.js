import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './app.scss';
import Cards from './modules/Cards.js'
import Aside from './modules/Aside.js'
import ReactImage from './img/react.png';
import data from './db.json';


export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    const { username } = this.state;
    return (
      <div className="app-container">
        <Aside />
        <Cards />
      </div>
    );
  }
}
