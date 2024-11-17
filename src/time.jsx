import React, { useDeferredValue } from 'react';

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


function TimeCheck(){
    return (
        <h1 style={customStyle}>{welcome}</h1>
    )
};

export default TimeCheck;
