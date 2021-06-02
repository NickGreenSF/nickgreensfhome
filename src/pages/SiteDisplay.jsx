import React from 'react';

// This will take a param from the URL and display that project.

const data = [
  [
    'RoutineList is a Chrome Extension.',
    'May 2021',
    'Chrome Extension,HTML/CSS/JS',
    'https://github.com/NickGreenSF/RoutineList',
  ],
  [
    "Oh hey, it's the site you're on!",
    'June 2021',
    'React,Sass,JS',
    'https://github.com/NickGreenSF/nickgreensfhome',
  ],
];

const url = String(document.URL);
const idStr = url.split('=');
let id;
if (!idStr[1]) {
  id = 0;
} else {
  id = parseInt(idStr[1]);
}

function SiteDisplay() {
  return <div>{data[id][0]}</div>;
}

export default SiteDisplay;
