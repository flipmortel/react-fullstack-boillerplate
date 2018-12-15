import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../app.scss';
import data from '../db.json';


export default class Aside extends Component {
  
  render() {
    return (
      <div className="aside-container">
        <h2 className="aside-title">{data.menuItemList.title}</h2>
        <ul className="aside-list">
          <li className="aside-item">{data.menuItemList.items[0]}</li>
          <li className="aside-item">{data.menuItemList.items[1]}</li>
          <li className="aside-item">{data.menuItemList.items[2]}</li>
          <li className="aside-item">{data.menuItemList.items[3]}</li>
        </ul>
        <h2 className="aside-title">{data.menuItemList2.title}</h2>
        <ul className="aside-list">
          <li className="aside-item">{data.menuItemList2.items[0]}</li>
          <li className="aside-item">{data.menuItemList2.items[1]}</li>
          <li className="aside-item">{data.menuItemList2.items[2]}</li>
          <li className="aside-item">{data.menuItemList2.items[3]}</li>
        </ul>
        <h2 className="aside-title aside-title-last">{data.menuItemList3.title}</h2>
        <ul className="aside-list">
          <li className="aside-item">{data.menuItemList3.items[0]}</li>
          <li className="aside-item">{data.menuItemList3.items[1]}</li>
          <li className="aside-item">{data.menuItemList3.items[2]}</li>
          <li className="aside-item">{data.menuItemList3.items[3]}</li>
        </ul>
      </div>
      
    );
  }
}
