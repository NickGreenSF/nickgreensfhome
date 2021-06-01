import React from 'react';
import me from '../me.jpg';

function SelfCard() {
  return (
    <div id="selfcard">
      <span>Hi, I'm Nick Green! I'm a computer science student at SFSU.</span>
      <img id="me" src={me} alt="Me." />
    </div>
  );
}

export default SelfCard;
