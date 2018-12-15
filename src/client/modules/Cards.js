import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../app.scss';
import ReactImage from '../img/react.png';
import data from '../db.json';


export default class Cards extends Component {
  
  render() {
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
