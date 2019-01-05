import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../app.scss';
import data from '../db.json';


export default class Aside extends Component {// eslint-disable-line react/prefer-stateless-function

  render() {
    console.log(data.aside[1].items);
    return (
      <div className="aside-container">
        <h2 className="aside-title">{data.aside[0].title}</h2>
        <ul className="aside-list">
          <li className="aside-item">{data.aside[0].items[0]}</li>
          <li className="aside-item">{data.aside[0].items[1]}</li>
          <li className="aside-item">{data.aside[0].items[2]}</li>
          <li className="aside-item">{data.aside[0].items[3]}</li>
        </ul>
        {/* {data.aside.map((item, i) => (
          <React.fragment key={i}>
            <h2 className="aside-title">{item.title}</h2>
            <ul className="aside-list">
            {data.aside[i].items.map((itemChild, j) => <li className="aside-item" key={j}>{itemChild}</li>)
              }
            </ul>
          </React.fragment>
        ))
        } */}
      </div>
    );
  }
}
