import React from 'react';
import logo from '../ng.png';

function TopPart() {
  return (
    <div>
      <h1 id="title">
        <a id="sitelink" href="./">
          NickGreenSF
        </a>
        <img id="logo" src={logo} alt="Site logo" />
      </h1>
    </div>
  );
}

export default TopPart;
