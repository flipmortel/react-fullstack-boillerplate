import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './app.scss';
import ReactImage from './img/react.png';
import HeroHeader from './components/HeroHeader';


export default class App extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <HeroHeader />
    );
  }
}
