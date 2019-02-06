import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './app.scss';
import ReactImage from './img/react.png';
import HeroHeader from './components/HeroHeader';
import Header from './modules/Header';


export default class App extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Header />
        <HeroHeader />
      </div>
    );
  }
}
