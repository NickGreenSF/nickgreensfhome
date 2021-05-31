import React from 'react';
import me from '../me.jpg';
import logo from '../ng.png';

function TopPart() {
  return (
    <div>
      <h1 id="title">
        <span>NickGreenSF</span>
        <img id="logo" src={logo} alt="Site logo" />
      </h1>
      <span>Hi! I'm Nick Green, a web developer from Pleasanton, CA.</span>
      <img id="me" src={me} alt="Me." />
    </div>
  );
}

export default TopPart;
