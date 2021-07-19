import React from 'react';

// This will take a param from the URL and display that project.

// Really cool import function I got off Stack Overflow edited down.
function importAll(r) {
  const i = {};
  r.keys().map((item) => {
    i[item.replace('./', '')] = r(item);
    return 0;
  });
  return i;
}

const images = importAll(require.context('../images/', false, /\.PNG/));

// Here is the data for this app. I'd use a database, but I am the only one that needs to submit data and there's not much of it.

const data = [
  [
    'I Love This Song!',
    'I Love This Song is a forum in which users can post about why they like a specific song and message other users. It was created as a way to express and share positivity about music.',
    'This was built in June and July 2021. The front end is built primarily in React JavaScript and Sass CSS (SCSS). The back end uses Typescript to run MySQL. It is hosted on a DigitalOcean droplet.',
    'View the code at the ',
    'Github page ',
    'https://github.com/NickGreenSF/ilovethissong',
    'and visit the site ',
    'here.',
    'http://ilovethissong.site',
  ],
  [
    'RoutineList',
    'RoutineList is a Chrome Extension. Users create tasks with checkboxes that uncheck at times set by the user, enabling them to keep a to-do list without writing it out on paper.',
    'This was built in May 2021 in HTML/CSS/JS, as an extension of a project I had completed in class.',
    'View the code at the ',
    'Github page ',
    'https://github.com/NickGreenSF/RoutineList',
    'and download the extension ',
    'here.',
    'https://chrome.google.com/webstore/detail/routinelist/eckihielkdkafbhekdgpbjlloiddjdpd?hl=en&authuser=1',
  ],
  [
    'nickgreensf.com',
    "Oh hey, it's the site you're on! I made this site to showcase my other projects.",
    'This was built in late May and early June, 2021, primarily in React JavaScript and Sass CSS (SCSS).',
    'View the code at the ',
    'Github page.',
    'https://github.com/NickGreenSF/nickgreensfhome',
    '',
    '',
    '',
  ],
];

// Get the project we're displaying from the URL and default to RoutineList, the earliest one.
const url = String(document.URL);
const idStr = url.split('=');
let id;
if (!idStr[1]) {
  id = 0;
} else {
  id = parseInt(idStr[1]);
}

// Set up a list of strings corresponding to keys in the image map to load the images from.
const strings = [];
strings.push(`banner-${id}.PNG`);
strings.push(`app${id}-1.PNG`);
strings.push(`app${id}-2.PNG`);
strings.push(`app${id}-3.PNG`);
console.log(strings);

function SiteDisplay() {
  return (
    <div>
      <h2>{data[id][0]}</h2>
      <img id="banner" src={images[strings[0]].default} alt="Site banner" />
      <div className="sitecard">
        <div className="siteinfo">{data[id][1]}</div>
        <div>
          <img
            className="siteimage"
            src={images[strings[1]].default}
            alt="multi import went wrong"
          />
        </div>
      </div>
      <div className="sitecard">
        <div>
          <img
            className="siteimage"
            src={images[strings[2]].default}
            alt="multi import went wrong"
          />
        </div>
        <div className="siteinfo">{data[id][2]}</div>
      </div>
      <div className="sitecard">
        <div className="siteinfo">
          {data[id][3]}
          <a href={data[id][5]}>{data[id][4]}</a>
          {data[id][6]}
          <a href={data[id][8]}>{data[id][7]}</a>
        </div>
        <div>
          <img
            className="siteimage"
            src={images[strings[3]].default}
            alt="multi import went wrong"
          />
        </div>
      </div>
    </div>
  );
}

export default SiteDisplay;
