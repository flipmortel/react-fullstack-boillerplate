import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './app.scss';
import Cards from './modules/Cards';
import Aside from './modules/Aside';
import Button from './elements/Button';
import Header from './modules/Header';
import ReactImage from './img/react.png';
import data from './db.json';


export default class App extends Component {
  state = { username: null };

  render() {
    const { username } = this.state;
    return (
      <div className="app-container">
        <Header />
        <Aside />
        <Cards />
        <Button />
        <Button primary />
      </div>
    );
  }
}
