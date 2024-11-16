import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const fName  = 'Jeremiah';
const lName = 'Idahosa';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <p> my name is {fName + ' ' + lName }</p>
      <h1>List of Fruits</h1>
      <ul>
        <li> mangoes </li>
        <li> bananas </li>
        <li> oranges </li>
      </ul>

    </div>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
