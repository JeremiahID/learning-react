import React from 'react';
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
        tel = {celebrityImages[0].tel}
        email = {celebrityImages[0].email}
      />
      {/* bauer card */}
      <Card 
        name = {celebrityImages[1].name}
        img = {celebrityImages[1].imgUrl}
        tel = {celebrityImages[1].tel}
        email = {celebrityImages[1].email}
      />
      {/* wixkid card */}
      <Card 
        name = {celebrityImages[2].name}
        img = {celebrityImages[2].imgUrl}
        tel = {celebrityImages[2].tel}
        email = {celebrityImages[2].email}
      />
    </div>
  );
}

export default App;
