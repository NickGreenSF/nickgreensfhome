import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import styled, { StyledComponent } from 'styled-components';
import ReactGA from "react-ga4";
import './App.css';
import me from './images/me.jpg';
import stardle from './images/stardle.png';
import stardle2 from './images/stardle-2.png';
import rlbanner from './images/banner-1.png';
import rluse from './images/app1-1.png';
import ilts from './images/banner-0.png';
import sep from './images/sep.png';
import otl1 from './images/otl-1.png';
import otl2 from './images/otl-2.png';
import {
  AdaptedGrid,
  AniScreen,
  ColorTransition,
  DescText,
  FadeInText,
  Green,
  Hi,
  Im,
  ImageHolder,
  LeftSidebar,
  LeftSidebarSpacer,
  LeftText,
  Navbar,
  NavbarLink,
  NavbarSpacer,
  NavbarText,
  RestrictedImage,
  RightSidebar,
  RightSidebarSpacer,
  RightText,
  Screen,
  ScrollDown,
  SidebarSub,
  SiteLink,
  StardleLogo,
  Title,
  TopLevel
} from './styles/styledcomponents';
import StardleScreen from './components/StardleScreen';

ReactGA.initialize("G-4QW3CYMCXW");
ReactGA.send({ hitType: "pageview", page: window.location.pathname });

// need width and height for styling
const width: number = window.innerWidth;
const height: number = window.innerHeight;

// helps with initializing react states to false in typescript
const initBool : boolean = false;

// we don't make the intersection observer yet because we need access to our states to define the callback.
let io: IntersectionObserver;

export default function App() {
  // these are the only states in the site, they set visibility and nothing else.
  const [myNameDisp, setMyNameDisp] : [boolean, Dispatch<SetStateAction<boolean>>] = useState(initBool);
  const [navbarDisp, setNavbarDisp] : [boolean, Dispatch<SetStateAction<boolean>>] = useState(initBool);
  const [screen1Disp, setScreen1Disp] : [boolean, Dispatch<SetStateAction<boolean>>] = useState(initBool);
  const [screen2Disp, setScreen2Disp] : [boolean, Dispatch<SetStateAction<boolean>>] = useState(initBool);
  const [screen3Disp, setScreen3Disp] : [boolean, Dispatch<SetStateAction<boolean>>] = useState(initBool);
  const [screen4Disp, setScreen4Disp] : [boolean, Dispatch<SetStateAction<boolean>>] = useState(initBool);
  const [screen5Disp, setScreen5Disp] : [boolean, Dispatch<SetStateAction<boolean>>] = useState(initBool);

  // what we do on launch
  useEffect(() => {
    // our IO function checks four elements to see if they're in window, and displays them if they are.
    const callback: (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => void = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id === 'hiddenscreen1' && screen1Disp === false) {
            setScreen1Disp(true);
          }
          if (entry.target.id === 'hiddenscreen2' && screen2Disp === false) {
            setScreen2Disp(true);
          }
          if (entry.target.id === 'hiddenscreen3' && screen3Disp === false) {
            setScreen3Disp(true);
          }
          if (entry.target.id === 'hiddenscreen4' && screen4Disp === false) {
            setScreen4Disp(true);
          }
          if (entry.target.id === 'hiddenscreen5' && screen5Disp === false) {
            setScreen5Disp(true);
          }
        }
      });
    };
    // observing the elements needed
    io = new IntersectionObserver(callback, {});
    const screen1: Element | null = document.querySelector('#hiddenscreen1');
    if (screen1 !== null) {
      io.observe(screen1);
    }
    const screen2: Element | null = document.querySelector('#hiddenscreen2');
    if (screen2 !== null) {
      io.observe(screen2);
    }
    const screen3: Element | null = document.querySelector('#hiddenscreen3');
    if (screen3 !== null) {
      io.observe(screen3);
    }
    const screen4: Element | null = document.querySelector('#hiddenscreen4');
    if (screen4 !== null) {
      io.observe(screen4);
    }
    const screen5: Element | null = document.querySelector('#hiddenscreen5');
    if (screen5 !== null) {
      io.observe(screen5);
    }
    // waiting to display name and navbars until the Hello there animation has finished
    setTimeout(() => {
      setMyNameDisp(true);
    }, 2000);
    setTimeout(() => {
      setNavbarDisp(true);
    }, 4000);
  }, [screen1Disp, screen2Disp, screen3Disp, screen4Disp, screen5Disp]);

  return (
    <TopLevel>
      <NavbarSpacer style={navbarDisp ? { display: 'none' } : {}} />
      <Navbar style={navbarDisp ? {} : { display: 'none' }}>
        <NavbarText style={{ left: width * 0.05 }}>NICKGREENSF</NavbarText>
        <NavbarLink style={{ left: width * 0.55 }} href="#onthelanes">
          ON THE LANES
        </NavbarLink>
        <NavbarLink style={{ left: width * 0.67 }} href="#stardle">
          STARDLE
        </NavbarLink>
        <NavbarLink style={{ left: width * 0.75 }} href="#rtl">
          ROUTINELIST
        </NavbarLink>
        <NavbarLink style={{ left: width * 0.85 }} href="#projects">
          PROJECTS
        </NavbarLink>
      </Navbar>
      <LeftSidebarSpacer style={navbarDisp ? { display: 'none' } : {}} />
      <LeftSidebar style={navbarDisp ? {} : { display: 'none' }}>
        <LeftText
          href="https://github.com/NickGreenSF"
          target="_blank"
          style={{ right: height * 0.7 }}
        >
          GitHub
        </LeftText>
        <LeftText
          href="https://www.linkedin.com/in/nicholas-green-7475a920a/"
          target="_blank"
          style={{ right: height * 0.5 }}
        >
          LinkedIn
        </LeftText>
        <LeftText
          href="https://drive.google.com/file/d/1KWzkqPvspUXD7olK8cfC88-L6VbKyYvE/view?usp=sharing"
          target="_blank"
          style={{ right: height * 0.3 }}
        >
          Resume
        </LeftText>
      </LeftSidebar>
      <RightSidebar style={navbarDisp ? {} : { display: 'none' }}>
        <RightText style={{ right: height * 0.4 }}>
          nicholasgreensf@gmail.com
        </RightText>
      </RightSidebar>
      <RightSidebarSpacer style={navbarDisp ? { display: 'none' } : {}} />
      <Screen
        style={{ minHeight: height * (12 / 15), marginBottom: height / 15 }}
      >
        <Hi>Hello there.</Hi>
        <Im>
          <FadeInText style={myNameDisp ? {} : { display: 'none' }}>
            My name's <span style={{ color: '#64ffda' }}>Nick Green</span>. I'm
            a programmer. Welcome to my portfolio.
          </FadeInText>
        </Im>
        <ColorTransition style={navbarDisp ? {} : { display: 'none' }}>
          <ScrollDown>Please scroll down</ScrollDown>
        </ColorTransition>
        <a id="about" />
      </Screen>
      <Screen
        id="hiddenscreen1"
        style={screen1Disp ? { display: 'none' } : { visibility: 'hidden' }}
      >
        <AdaptedGrid>
          <ImageHolder>
            <RestrictedImage src={me} />
          </ImageHolder>
          <div>
            <Title>About Me</Title>
            <DescText>
              I started coding in high school and was immediately drawn to it. I
              liked watching myself get better at it - it struck me as a skill
              worth learning, and worth making into a trade. After graduating
              from San Francisco State in February 2022, majoring in computer
              science, I've been looking for work while making myself the best
              coder I can possibly be through both personal projects and
              comprehensive algorithm practice.
            </DescText>
            <DescText>
              What I like about coding and development is the many problems it
              presents through the same overall lens; various coding projects
              and problems I have worked on have felt like anything from math
              homework to making a short film, and I appreciate how much
              diversity the field can bring out.
            </DescText>
            <DescText>
              I work mostly in <Green>Python</Green> and{' '}
              <Green>Typescript,</Green> and have experience in many other tools
              and languages, such as <Green>Java,</Green> <Green>C,</Green>{' '}
              <Green>C++,</Green> <Green>MySQL,</Green> <Green>Sass,</Green> and{' '}
              <Green>Docker.</Green>
            </DescText>
            <DescText>
              I ambitiously look forward to my time spent as a
              professional software developer and the many challenges it will
              bring. Thanks for reading!
            </DescText>
          </div>
        </AdaptedGrid>
      </Screen>
      <AniScreen style={screen1Disp ? {} : { display: 'none' }}>
        <AdaptedGrid>
          <ImageHolder>
            <RestrictedImage src={me} />
          </ImageHolder>
          <div>
            <Title>About Me</Title>
            <DescText>
              I started coding in high school and was immediately drawn to it. I
              liked watching myself get better at it - it struck me as a skill
              worth learning, and worth making into a trade. After graduating
              from San Francisco State in February 2022, majoring in computer
              science, I've been looking for work while making myself the best
              coder I can possibly be through both personal projects and
              comprehensive algorithm practice.
            </DescText>
            <DescText>
              What I like about coding and development is the many problems it
              presents through the same overall lens; various coding projects
              and problems I have worked on have felt like anything from math
              homework to making a short film, and I appreciate how much
              diversity the field can bring out.
            </DescText>
            <DescText>
              I work mostly in <Green>Python</Green> and{' '}
              <Green>Typescript,</Green> and have experience in many other tools
              and languages, such as <Green>Java,</Green> <Green>C,</Green>{' '}
              <Green>C++,</Green> <Green>MySQL,</Green> <Green>Sass,</Green> and{' '}
              <Green>Docker.</Green>
            </DescText>
            <a id="onthelanes" />
            <DescText>I ambitiously look forward to my time spent as a
              professional software developer and the many challenges it will
              bring. Thanks for reading!
            </DescText>
          </div>
        </AdaptedGrid>
      </AniScreen>
      <Screen
        id="hiddenscreen5"
        style={screen5Disp ? { display: 'none' } : { visibility: 'hidden' }}
      >
        <AdaptedGrid>
          <div>
            <Title>
              On the Lanes
            </Title>
            <DescText>
              As my skills as a programmer developed, I started wanting to build a website using two services I wasn't previously very familiar with, but which I knew would fit my skill set: Docker and AWS. I've loved bowling my whole life, and when I started to get back into it recently, the idea of a site where users could post and explain their own games struck me as a way to marry the two interests.
            </DescText>
            <DescText>
              Users of On the Lanes can create an account and submit their scores to the database. The site keeps track of the user's average, and the user can attach other details of their games to the submissions if they want to share information about them. It largely serves as a tech demo, but still serves a purpose I hope some will find useful.
            </DescText>
          </div>
          <ImageHolder>
            <RestrictedImage src={otl1} />
          </ImageHolder>
          <ImageHolder>
            <RestrictedImage src={otl2} />
          </ImageHolder>
          <div style={{ marginTop: height / 75 }}>
            <DescText>
              On the Lanes was built in July 2022. The front end is in Typescript and the backend is in Python, hosted with a Docker container. I had fun building this site, and it kept me tied to my work during periods where that proved difficult. It was also a great opportunity to get more comfortable with the aforementioned services.
            </DescText>
            <DescText>
              On the Lanes was uploaded in July, to{' '}
              <SiteLink href="http://onthelanes.xyz" target="_blank">
                onthelanes.xyz
              </SiteLink>
              . I've been using it as my personal bowling blog, and you can too!
            </DescText>
          </div>
        </AdaptedGrid>
      </Screen>
      <AniScreen style={screen5Disp ? {} : { display: 'none' }}>
      <AdaptedGrid>
          <div>
            <Title>
              On the Lanes
            </Title>
            <DescText>
              As my skills as a programmer developed, I started wanting to build a website using two services I wasn't previously very familiar with, but which I knew would fit my skill set: <Green>Docker</Green> and <Green>AWS</Green>. I've loved bowling my whole life, and when I started to get back into it recently, the idea of a site where users could post and explain their own games struck me as a way to marry the two interests.
            </DescText>
            <DescText>
              Users of On the Lanes can create an account and submit their scores to the database. The site keeps track of the user's average, and the user can attach other details of their games to the submissions if they want to share information about them. It largely serves as a tech demo, but still serves a purpose I hope some will find useful.
            </DescText>
          </div>
          <ImageHolder>
            <RestrictedImage src={otl1} />
          </ImageHolder>
          <ImageHolder>
            <RestrictedImage src={otl2} />
          </ImageHolder>
          <div style={{ marginTop: height / 75 }}>
            <DescText>
              On the Lanes was built in July 2022. The front end is in Typescript and the backend is in Python, hosted with a Docker container. I had fun building this site, and it kept me tied to my work during periods where that proved difficult. It was also a great opportunity to get more comfortable with the aforementioned services.
            </DescText>
            <DescText>
              On the Lanes was uploaded in July, to{' '}
              <SiteLink href="http://onthelanes.xyz" target="_blank">
                onthelanes.xyz
              </SiteLink>
              . I've been using it as my personal bowling blog, and you can too!
            </DescText>
          </div>
          <a id="stardle" />
        </AdaptedGrid>
      </AniScreen>
      <Screen
        id="hiddenscreen2"
        style={screen2Disp ? { display: 'none' } : { visibility: 'hidden' }}
      >
        <StardleScreen />
      </Screen>
      <AniScreen style={screen2Disp ? {} : { display: 'none' }}>
        <StardleScreen />
      </AniScreen>
      <Screen
        id="hiddenscreen3"
        style={screen3Disp ? { display: 'none' } : { visibility: 'hidden' }}
      >
        <AdaptedGrid>
          <div>
            <Title>RoutineList</Title>
            <DescText>
              While a student at SFSU, I took a class called Human Computer
              Interaction, during which we had to design a mobile app. After
              making my design, i realized two things, first that the design was
              very achievable, and second, that it would make more sense for me
              to make it as a Chrome extension. RoutineList was born!
            </DescText>
            <DescText>
              RoutineList is a to-do list app. Users can set tasks for
              themselves to a specific time of day and days of the week, and
              those tasks will uncheck themselves on those days of the week at
              those times of day. It ended up being very useful for me at a time
              where I needed a little help self-directing, and it's always great
              to get utility out of your own work.
            </DescText>
          </div>
          <ImageHolder>
            <RestrictedImage src={rlbanner} />
          </ImageHolder>
          <ImageHolder>
            <RestrictedImage src={rluse} />
          </ImageHolder>
          <div style={{ marginTop: height / 75 }}>
            <DescText>
              At a time where I was still getting my legs under me as a
              developer, I found the design process for RoutineList to be very
              satisfying, building it in standard HTML/CSS/JS and taking
              advantage of tools like Chrome's user storage. It was finished by
              May 2021, in time to present it for the final project of the
              class. I'd love to flesh out the design more in the future, and
              I'm comfortable with where it is for now.
            </DescText>
            <DescText>
              If, like me, you're feeling a little disorganized, you can check
              out the extension for yourself{' '}
              <SiteLink
                href="https://chrome.google.com/webstore/detail/routinelist/eckihielkdkafbhekdgpbjlloiddjdpd?hl=en"
                target="_blank"
              >
                here
              </SiteLink>
              .
            </DescText>
          </div>
        </AdaptedGrid>
      </Screen>
      <AniScreen style={screen3Disp ? {} : { display: 'none' }}>
        <AdaptedGrid>
          <div>
            <Title>RoutineList</Title>
            <DescText>
              While a student at SFSU, I took a class called Human Computer
              Interaction, during which we had to design a mobile app. After
              making my design, i realized two things, first that the design was
              very achievable, and second, that it would make more sense for me
              to make it as a Chrome extension. RoutineList was born!
            </DescText>
            <DescText>
              RoutineList is a to-do list app. Users can set tasks for
              themselves to a specific time of day and days of the week, and
              those tasks will uncheck themselves on those days of the week at
              those times of day. It ended up being very useful for me at a time
              where I needed a little help self-directing, and it's always great
              to get utility out of your own work.
            </DescText>
          </div>
          <ImageHolder>
            <RestrictedImage src={rlbanner} />
          </ImageHolder>
          <ImageHolder>
            <RestrictedImage src={rluse} />
          </ImageHolder>
          <div style={{ marginTop: height / 75 }}>
            <DescText>
              At a time where I was still getting my legs under me as a
              developer, I found the design process for RoutineList to be very
              satisfying, building it in standard HTML/CSS/JS and taking
              advantage of tools like Chrome's user storage. It was finished by
              May 2021, in time to present it for the final project of the
              class. I'd love to flesh out the design more in the future, and
              I'm comfortable with where it is for now.
            </DescText>
            <DescText>
              If, like me, you're feeling a little disorganized, you can check
              out the extension for yourself{' '}
              <SiteLink
                href="https://chrome.google.com/webstore/detail/routinelist/eckihielkdkafbhekdgpbjlloiddjdpd?hl=en"
                target="_blank"
              >
                here
              </SiteLink>
              .
            </DescText>
            <a id="projects" />
          </div>
        </AdaptedGrid>
      </AniScreen>
      <Screen
        id="hiddenscreen4"
        style={screen4Disp ? { display: 'none' } : { visibility: 'hidden' }}
      >
        <Title>Other Projects</Title>
        <AdaptedGrid>
          <div>
            <DescText>
              <Green>I Love This Song!</Green>, online forum dedicated to
              discussing one's favorite songs. Built in React and NodeJS. Makes
              use of the Spotify API. View the code{' '}
              <SiteLink
                href="https://github.com/NickGreenSF/ilovethissong"
                target="_blank"
              >
                here.
              </SiteLink>
            </DescText>
            <ImageHolder>
              <RestrictedImage src={ilts} />
            </ImageHolder>
          </div>
          <div>
            <DescText>
              <Green>SepSolutions.net</Green>, freelance WYSIWYG website build
              job for a prominent chemical supplier in the western US. Link
              pending release.
            </DescText>
            <ImageHolder>
              <RestrictedImage src={sep} />
            </ImageHolder>
          </div>
        </AdaptedGrid>
        <DescText style={{ textAlign: 'center' }}>
          Color and theming inspiration from{' '}
          <SiteLink href="https://brittanychiang.com/" target="_blank">
            Brittany Chiang
          </SiteLink>
        </DescText>
        <DescText style={{ textAlign: 'center', marginBottom: height / 10 }}>
          Find me at <Green>nicholasgreensf@gmail.com</Green>
        </DescText>
      </Screen>
      <AniScreen style={screen4Disp ? {} : { display: 'none' }}>
        <Title>Other Projects</Title>
        <AdaptedGrid>
          <div>
            <DescText>
              <Green>I Love This Song!</Green>, online forum dedicated to
              discussing one's favorite songs. Built in React and NodeJS. Makes
              use of the Spotify API. View the code{' '}
              <SiteLink
                href="https://github.com/NickGreenSF/ilovethissong"
                target="_blank"
              >
                here.
              </SiteLink>
            </DescText>
            <ImageHolder>
              <RestrictedImage src={ilts} />
            </ImageHolder>
          </div>
          <div>
            <DescText>
              <Green>SepSolutions.net</Green>, freelance WYSIWYG website build
              job for a prominent chemical supplier in the western US. Link
              pending release.
            </DescText>
            <ImageHolder>
              <RestrictedImage src={sep} />
            </ImageHolder>
          </div>
        </AdaptedGrid>
        <SidebarSub>
          <SiteLink href="https://github.com/NickGreenSF" target="_blank">
            GitHub{' '}
          </SiteLink>
          <SiteLink
            href="https://www.linkedin.com/in/nicholas-green-7475a920a/"
            target="_blank"
          >
            LinkedIn{' '}
          </SiteLink>
          <SiteLink
            href="https://drive.google.com/file/d/1KWzkqPvspUXD7olK8cfC88-L6VbKyYvE/view?usp=sharing"
            target="_blank"
          >
            Resume
          </SiteLink>
        </SidebarSub>
        <DescText style={{ textAlign: 'center' }}>
          Color and theming inspiration from{' '}
          <SiteLink href="https://brittanychiang.com/" target="_blank">
            Brittany Chiang
          </SiteLink>
        </DescText>
        <DescText style={{ textAlign: 'center', marginBottom: height / 10 }}>
          Find me at <Green>nicholasgreensf@gmail.com</Green>
        </DescText>
      </AniScreen>
    </TopLevel>
  );
}
