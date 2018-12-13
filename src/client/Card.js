import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './app.scss';
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
      <div className="card-container">
        <h2 className="card-title">{data.cours.title}</h2>
        <img className="card-image" src={ReactImage} alt="" />
        <p className="card-description">{data.cours.description}</p>
        <div className="card-time-cost-container">
          <span className="card-time">{data.cours.time}/heures</span>
          <span className="card-cost">{data.cours.cost}$</span>
        </div>
      </div>
    );
  }
}
