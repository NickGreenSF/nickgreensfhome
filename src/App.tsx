import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import ReactGA from "react-ga4";
import './App.css';
import ilts from './images/banner-0.png';
import sep from './images/sep.png';
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
import AboutScreen from './components/AboutScreen';
import RoutineListScreen from './components/RoutineListScreen';
import ThermoScreen from './components/ThermoScreen';

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
        <NavbarLink style={{ left: width * 0.52 }} href="#thermo">
          THERMO FISHER SCIENTIFIC
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
        <AboutScreen />
      </Screen>
      <AniScreen style={screen1Disp ? {} : { display: 'none' }}>
        <AboutScreen />
      </AniScreen>
      <a id="thermo" />
      <Screen
        id="hiddenscreen5"
        style={screen5Disp ? { display: 'none' } : { visibility: 'hidden' }}
      >
        <ThermoScreen></ThermoScreen>
      </Screen>
      <AniScreen style={screen5Disp ? {} : { display: 'none' }}>
        <ThermoScreen></ThermoScreen>
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
        <RoutineListScreen />
      </Screen>
      <AniScreen style={screen3Disp ? {} : { display: 'none' }}>
        <RoutineListScreen />
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
