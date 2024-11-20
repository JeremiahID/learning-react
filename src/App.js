import React from 'react';
import Heading from './heading';
import List from './list';
import TimeCheck from './time';
import Card from './contact';
import { celebrityImages } from './img';




function App() {
  return (
    <div>
      <h1>MY CONTACT</h1>
      {/* beyonce card */}
      <Card 
        name = {celebrityImages[0].name}
        img = {celebrityImages[0].imgUrl}
        tel = "+12345"
        email = 'b@mail.com'
      />
      {/* bauer card */}
      <Card 
        name = {celebrityImages[1].name}
        img = {celebrityImages[1].imgUrl}
        tel = "+56345"
        email = 'jackb@mail.com'
      />
      {/* wixkid card */}
      <Card 
        name = {celebrityImages[2].name}
        img = {celebrityImages[2].imgUrl}
        tel = "+345"
        email = 'wiz-kid@gmail.com'
      />
    </div>
  );
}

export default App;
