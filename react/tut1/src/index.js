import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Netflix from './Netflix';
import {add,sub} from "./Calc"
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Netflix />
    <h1 className="clac"> Calculator </h1>
    <li>Sum of two no is : { add (2,4)}</li>
    <li>Sum of two no is : { sub (2,4)}</li>
      </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
