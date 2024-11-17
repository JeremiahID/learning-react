import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Heading from './heading';
import List from './list';




const todayDate = new Date();
const currentHour  = todayDate.getHours();
console.log(currentHour);

var welcome;

const customStyle  =  {
  color: ""
}

if(currentHour < 12){
  welcome = "Good Morning";
  customStyle.color = "red";
} else if (currentHour < 18){
  welcome = "Good Afternoon";
  customStyle.color = "green";
} else {
  welcome = "Good Evening"
  customStyle.color = "blue";
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Heading />
      <List />
      <h1 style = {customStyle}>{welcome}</h1>

    </div>
    {/* <App/> */}
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
