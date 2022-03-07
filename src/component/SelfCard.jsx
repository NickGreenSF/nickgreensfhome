import React from 'react';
import me from '../me.jpg';

function SelfCard() {
  return (
    <div id="selfcard">
      <div id="carddesc">
        <h2 id="aboutme">About Me</h2>
        <h3 id="selftext">
          Hi, I'm Nick Green! I'm a computer science graduate from SFSU, working
          in React JS/Sass CSS, Python, and others.
        </h3>
      </div>
      <div>
        <img id="me" src={me} alt="Me." />
      </div>
    </div>
  );
}

export default SelfCard;
