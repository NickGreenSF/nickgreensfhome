import React, { useState, useEffect } from 'react';
import styled, { keyframes, StyledComponent } from 'styled-components';
import { fadeInDownBig, fadeIn, fadeInUp } from 'react-animations';
import './App.css'
import me from './images/me.jpg'
import stardle from './images/stardle.png'
import stardle2 from './images/stardle-2.png'
import rlbanner from './images/banner-1.png'
import rluse from './images/app1-1.png'
import ilts from './images/banner-0.png'
import sep from './images/sep.png'

const width = window.innerWidth
const height = window.innerHeight

// bchiang's colors
const white = '#e6f1ff'
const green = '#64ffda'
const lightestSlate = '#ccd6f6'
const lightSlate = '#a8b2d1'
const slate = '#8892b0'
const lightestNavy = '#233554'
const lightNavy = '#112240'
const navy = '#0a192f'

const fadeDownAni = keyframes`${fadeInDownBig}`
const fadeInAni = keyframes`${fadeIn}`
const fadeUpAni = keyframes`${fadeInUp}`

const Hi = styled.div`
  width: 100%;
  text-align: center;
  font-size: ${height / 10}px;
  padding-top: ${height / 5}px;
  animation: 2s ${fadeDownAni};
  color: #e6f1ff;
  top: ${height / 10}px;
`

const Im = styled.div`
  font-size: ${height / 20}px;
  color: #a8b2d1;
  text-align: center;
  padding-bottom: ${height / 5}px;
`

const FadeInText = styled.span`
  animation: 2s ${fadeInAni};
`

const TopLevel = styled.div`
  width: 100%;
  position: absolute;
`

const Screen = styled.div`
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  @media screen and (max-width: 1000px){
    width: 100%;
    margin: 0;
  }
`

const AniScreen = styled.div`
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  animation: 1s ${fadeUpAni};
  @media screen and (max-width: 1000px){
    width: 100%;
    margin: 0;
  }
`

const Navbar = styled.div`
  position: sticky;
  top: 0;
  z-index: 2;
  animation: 2s ${fadeInAni};
  color: ${white};
  height: ${height / 15}px;
  background-color: ${navy};
  box-shadow: 1px 1px 1px 1px black;
  @media screen and (max-width: 1000px){
    visibility: hidden;
  }
`

const LeftSidebar = styled.div`
  position: sticky;
  top: ${height}px;
  transform: rotate(-0.25turn);
  transform-origin: 0 0;
  left: 0;
  color: ${slate};
  height: ${height / 15}px;
  width: ${height}px;
  background-color: ${navy};
  animation: 2s ${fadeInAni};
  box-shadow: 1px 1px 1px 1px black;
  @media screen and (max-width: 1000px){
    transform: rotate(0turn);
  }
`

const RightSidebar = styled.div`
  position: sticky;
  top: ${height}px;
  transform: rotate(-0.25turn) translate(0, ${width}px) translate(0, -${(height / 15) + (height / 30)}px);
  transform-origin: 0 0;
  left: 0;
  color: ${slate};
  height: ${height / 15}px;
  width: ${height}px;
  background-color: ${navy};
  animation: 2s ${fadeInAni};
  box-shadow: -1px -1px 1px 1px black;
  @media screen and (max-width: 1000px){
    display: none;
  }
`

const RightSidebarSpacer = styled.div`
  position: sticky;
  top: ${height}px;
  transform: rotate(-0.25turn) translate(0, ${width}px) translate(0, -${(height / 15) + (height / 30)}px);
  transform-origin: 0 0;
  left: 0;
  color: ${white};
  height: ${height / 15}px;
  width: ${height}px;
  background-color: ${navy};
  @media screen and (max-width: 1000px){
    display: none;
  }
`

const LeftSidebarSpacer = styled.div`
  position: sticky;
  top: ${height}px;
  transform: rotate(-0.25turn);
  transform-origin: 0 0;
  left: 0;
  color: ${white};
  height: ${height / 15}px;
  width: ${height}px;
  background-color: ${navy};
  @media screen and (max-width: 1000px){
    transform: rotate(0turn);
  }
`

const LeftText = styled.a`
  color: ${slate};
  position: absolute;
  top: ${height / 75}px;
  :hover{
    color: ${lightSlate};
    cursor: pointer;
  }
`

const RightText = styled.span`
  position: absolute;
  top: ${height / 75}px;
  transform: scale(-1, -1);
`

const NavbarSpacer = styled.div`
  height: ${height / 15}px;
  background-color: ${navy};
`

const NavbarLink = styled.a`
  display: inline-block;
  position: absolute;
  margin-top: ${height / 60}px;
  color: ${lightSlate};
  :hover{
    color: ${green};
    text-decoration: none;
  }
`

const NavbarText = styled.span`
  display: inline-block;
  position: absolute;
  margin-top: ${height / 60}px;
  color: ${green};
`

const ScrollDown = styled.div`
  animation: 1s upNDown 1s infinite;
  text-align: center;
  position: relative;
  z-index: -1;

  @keyframes upNDown{
    0% {
      transform: translate(0, ${-height / 30}px);
    }
    100% {
      transform: translate(0, ${height / 30}px);
    }
  }
`

const ColorTransition = styled.div`
  animation: 1s colorTrans;
  color: #e6f1ff;
  zIndex: 10;
  @keyframes colorTrans{
    0%{
      color: #0a192f;
      transform: translate(0, ${-height / 30}px);
    }
    100%{
      color: #e6f1ff;
      transform: translate(0, ${height / 30}px);
    }
  }
`

const Title = styled.div`
  text-align: center;
  font-size: ${height / 25}px;
  color: #e6f1ff;
`

const DescText = styled.div`
  font-size: ${height / 50}px;
  color: ${slate};
  margin-bottom: ${height / 75}px;
`

const AdaptedGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 0;
  margin-left: ${width / 10}px;
  margin-right: ${width / 10}px;
  margin-bottom: ${height / 10}px;
  @media screen and (max-width: 1000px){
    grid-template-columns: 1fr;
  }
`

const ImageHolder = styled.div`
  display: flex;
  justify-content: center;
`

const RestrictedImage = styled.img`
  width: ${Math.max(width / 5, height / 3)}px;
  margin: auto;
`

const StardleLogo : StyledComponent<'span', any, {}, never> = styled.span`
  color: rgba(127, 127, 127, 0.9);
`;

const Green = styled.span`
  color: ${green};
`

const SiteLink = styled.a`
  color: ${green};
  :hover{
    color: ${green};
  }
`

const initBool : boolean = false;

let io : IntersectionObserver;


export default function App() {

  const [myNameDisp, setMyNameDisp] = useState(initBool);
  const [navbarDisp, setNavbarDisp] = useState(initBool);
  const [screen1Disp, setScreen1Disp] = useState(initBool);
  const [screen2Disp, setScreen2Disp] = useState(initBool);
  const [screen3Disp, setScreen3Disp] = useState(initBool);
  const [screen4Disp, setScreen4Disp] = useState(initBool);

  useEffect(() => {
    let callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        // Each entry describes an intersection change for one observed
        // target element:
        //   entry.boundingClientRect
        //   entry.intersectionRatio
        //   entry.intersectionRect
        //   entry.isIntersecting
        //   entry.rootBounds
        //   entry.target
        //   entry.time
        //console.log(entry.target.id)
        if (entry.isIntersecting){
          if (entry.target.id === 'hiddenscreen1' && screen1Disp === false){
            setScreen1Disp(true)
          }
          if (entry.target.id === 'hiddenscreen2' && screen2Disp === false){
            setScreen2Disp(true)
          }
          if (entry.target.id === 'hiddenscreen3' && screen3Disp === false){
            setScreen3Disp(true)
          }
          if (entry.target.id === 'hiddenscreen4' && screen4Disp === false){
            setScreen4Disp(true)
          }
        }
      });
    };
    io = new IntersectionObserver(callback, {});
    let screen1 = document.querySelector('#hiddenscreen1');
    if (screen1 !== null){
      io.observe(screen1);
    }
    let screen2 = document.querySelector('#hiddenscreen2');
    if (screen2 !== null){
      io.observe(screen2);
    }
    let screen3 = document.querySelector('#hiddenscreen3');
    if (screen3 !== null){
      io.observe(screen3);
    }
    let screen4 = document.querySelector('#hiddenscreen4');
    if (screen4 !== null){
      io.observe(screen4);
    }
    setTimeout(() => {
      setMyNameDisp(true);
    }, 2000)
    setTimeout(() => {
      setNavbarDisp(true);
    }, 4000)
  }, [])

  return (
    <TopLevel>
      <NavbarSpacer style={navbarDisp ? {display: "none"} : {}}></NavbarSpacer>
      <Navbar style={navbarDisp ? {} : {display: "none"}}>
        <NavbarText style={{left: width * .05}}>NICKGREENSF</NavbarText>
        <NavbarLink style={{left: width * .55}} href="#about">ABOUT</NavbarLink>
        <NavbarLink style={{left: width * .65}} href="#stardle">STARDLE</NavbarLink>
        <NavbarLink style={{left: width * .75}} href="#rtl">ROUTINELIST</NavbarLink>
        <NavbarLink style={{left: width * .85}} href="#projects">PROJECTS</NavbarLink>
      </Navbar>
      <LeftSidebarSpacer style={navbarDisp ? {display: "none"} : {}}></LeftSidebarSpacer>
      <LeftSidebar style={navbarDisp ? {} : {display: "none"}}>
        <LeftText href='https://github.com/NickGreenSF' target="_blank" style={{right: height * .7}}>GitHub</LeftText>
        <LeftText href='https://www.linkedin.com/in/nicholas-green-7475a920a/' target="_blank" style={{right: height * .5}}>LinkedIn</LeftText>
        <LeftText style={{right: height * .3}}>Resume</LeftText>
      </LeftSidebar>
      <RightSidebar style={navbarDisp ? {} : {display: "none"}}>
        <RightText style={{right: height * .4}}>nicholasgreensf@gmail.com</RightText>
      </RightSidebar>
      <RightSidebarSpacer style={navbarDisp ? {display: "none"} : {}}></RightSidebarSpacer>
      <Screen style={{height: height * (12/15)}}>
        <Hi>
          Hello there.
        </Hi>
        <Im>
          <FadeInText style={myNameDisp ? {} : {display: "none"}}>
            My name's <span style={{color: "#64ffda"}}>Nick Green</span>. I'm a programmer. Welcome to my portfolio.
          </FadeInText>
        </Im>
        <ColorTransition style={navbarDisp ? {} : {display: "none"}}>
          <ScrollDown>Please scroll down</ScrollDown>
        </ColorTransition>
        <a id="about"></a>
      </Screen>
      <Screen id='hiddenscreen1' style={screen1Disp ? {display: "none"} : {visibility: "hidden"}}>
        <AdaptedGrid>
          <div>
            <Title>
              About Me
            </Title>
            <DescText>
              I started coding in high school and was immediately drawn to it.
              I liked watching myself get better at it - it struck me as a skill worth learning, and worth making into a trade. 
              After graduating from San Francisco State in February 2022, majoring in computer science, I've been looking for work while making 
              myself the best coder I can possibly be through both personal projects and comprehensive algorithm practice. 
            </DescText>
            <DescText> 
              What I like about coding and development is the many problems it presents through the same overall lens; various coding 
              projects and problems I have worked on have felt like anything from math homework to making a short film, and I appreciate how much diversity 
              the field can bring out.
            </DescText>
            <DescText>
              I work mostly in <Green>Python</Green> and <Green>Typescript,</Green> and have experience in many other tools and languages, such as <Green>Java,</Green> <Green>C,</Green> <Green>C++,</Green> <Green>MySQL,</Green> <Green>Sass,</Green> and <Green>Docker.</Green>
            </DescText>
            <DescText>
              <a id="stardle"></a>
              I ambitiously look forward to my time spent as a professional software developer and the many challenges it will bring. Thanks for reading!
            </DescText>
          </div>
          <ImageHolder>
            <RestrictedImage src={me}></RestrictedImage>
          </ImageHolder>
        </AdaptedGrid>
      </Screen>
      <AniScreen style={screen1Disp ? {} : {display: "none"}}>
        <AdaptedGrid>
          <div>
            <Title>
              About Me
            </Title>
            <DescText>
              I started coding in high school and was immediately drawn to it.
              I liked watching myself get better at it - it struck me as a skill worth learning, and worth making into a trade. 
              After graduating from San Francisco State in February 2022, majoring in computer science, I've been looking for work while making 
              myself the best coder I can possibly be through both personal projects and comprehensive algorithm practice. 
            </DescText>
            <DescText> 
              What I like about coding and development is the many problems it presents through the same overall lens; various coding 
              projects and problems I have worked on have felt like anything from math homework to making a short film, and I appreciate how much diversity 
              the field can bring out.
            </DescText>
            <DescText>
              I work mostly in <Green>Python</Green> and <Green>Typescript,</Green> and have experience in many other tools and languages, such as <Green>Java,</Green> <Green>C,</Green> <Green>C++,</Green> <Green>MySQL,</Green> <Green>Sass,</Green> and <Green>Docker.</Green>
            </DescText>
            <DescText>
              <a id="stardle"></a>
              I ambitiously look forward to my time spent as a professional software developer and the many challenges it will bring. Thanks for reading!
            </DescText>
          </div>
          <ImageHolder>
            <RestrictedImage src={me}></RestrictedImage>
          </ImageHolder>
        </AdaptedGrid>
      </AniScreen>
      <Screen id='hiddenscreen2' style={screen2Disp ? {display: "none"} : {visibility: "hidden"}}>
        <AdaptedGrid>
          <ImageHolder>
            <RestrictedImage src={stardle}></RestrictedImage>
          </ImageHolder>
          <div>
            <Title>
              <StardleLogo>S T A R D L E</StardleLogo>
            </Title>
            <DescText>
              I've always loved movie trivia, so much so that I often find it more satisfying to look up facts about a movie than watch the movie. When Wordle blew up, I thought the “daily quiz” format would blend perfectly with that interest, and out of that thought came the idea for STARDLE.
            </DescText>
            <DescText>
              STARDLE is a daily movie trivia game that challenges you to guess the name of a movie using only the names of actors in the movie. Like Wordle, you get six tries, and each wrong guess reveals more information about the solution. Unlike Wordle, the answer is a movie title, which means it's not restricted to word length. It's challenging, and it's a fun way to spend a couple minutes.
            </DescText>
          </div>
          <div style={{marginTop: height / 75}}>
            <DescText>I built STARDLE in April 2022 in React Typescript. The build process was very engaging. I seized a great opportunity to learn more about aesthetics, animations, and game design. Working on a project like this also afforded me the opportunity to continue to grow more comfortable with Typescript, a language I find very easy to use and capable of a lot more than people may give it credit for.</DescText>
            <DescText>I released STARDLE in May, on <SiteLink href="https://stardle.xyz" target="_blank">stardle.xyz</SiteLink>, and if you're curious, head on over and see how you fare against my daily onslaught of movie trivia!</DescText>
          </div>
          <ImageHolder>
            <RestrictedImage src={stardle2}></RestrictedImage>
          </ImageHolder>
          <a id="rtl"></a>
        </AdaptedGrid>
      </Screen>
      <AniScreen style={screen2Disp ? {} : {display: "none"}}>
        <AdaptedGrid>
          <ImageHolder>
            <RestrictedImage src={stardle}></RestrictedImage>
          </ImageHolder>
          <div>
            <Title>
              <StardleLogo>S T A R D L E</StardleLogo>
            </Title>
            <DescText>
              I've always loved movie trivia, so much so that I often find it more satisfying to look up facts about a movie than watch the movie. When Wordle blew up, I thought the “daily quiz” format would blend perfectly with that interest, and out of that thought came the idea for STARDLE.
            </DescText>
            <DescText>
              STARDLE is a daily movie trivia game that challenges you to guess the name of a movie using only the names of actors in the movie. Like Wordle, you get six tries, and each wrong guess reveals more information about the solution. Unlike Wordle, the answer is a movie title, which means it's not restricted to word length. It's challenging, and it's a fun way to spend a couple minutes.
            </DescText>
          </div>
          <div style={{marginTop: height / 75}}>
            <DescText>I built STARDLE in April 2022 in React Typescript. The build process was very engaging. I seized a great opportunity to learn more about aesthetics, animations, and game design. Working on a project like this also afforded me the opportunity to continue to grow more comfortable with Typescript, a language I find very easy to use and capable of a lot more than people may give it credit for.</DescText>
            <DescText>I released STARDLE in May, on <SiteLink href="https://stardle.xyz" target="_blank">stardle.xyz</SiteLink>, and if you're curious, head on over and see how you fare against my daily onslaught of movie trivia!</DescText>
          </div>
          <ImageHolder>
            <RestrictedImage src={stardle2}></RestrictedImage>
          </ImageHolder>
          <a id="rtl"></a>
        </AdaptedGrid>
      </AniScreen>
      <Screen id='hiddenscreen3' style={screen3Disp ? {display: "none"} : {visibility: "hidden"}}>
        <AdaptedGrid>
          <div>
            <Title>
              RoutineList
            </Title>
            <DescText>
              While a student at SFSU, I took a class called Human Computer Interaction, during which we had to design a mobile app. After making my design, i realized two things, first that the design was very achievable, and second, that it would make more sense for me to make it as a Chrome extension. RoutineList was born!
            </DescText>
            <DescText>
              RoutineList is a to-do list app. Users can set tasks for themselves to a specific time of day and days of the week, and those tasks will uncheck themselves on those days of the week at those times of day. It ended up being very useful for me at a time where I needed a little help self-directing, and it's always great to get utility out of your own work.
            </DescText>
          </div>
          <ImageHolder>
            <RestrictedImage src={rlbanner}></RestrictedImage>
          </ImageHolder>
          <ImageHolder>
            <RestrictedImage src={rluse}></RestrictedImage>
          </ImageHolder>
          <div style={{marginTop: height / 75}}>
            <DescText>At a time where I was still getting my legs under me as a developer, I found the design process for RoutineList to be very satisfying, building it in standard HTML/CSS/JS and taking advantage of tools like Chrome's user storage. It was finished by May 2021, in time to present it for the final project of the class. I'd love to flesh out the design more in the future, and I'm comfortable with where it is for now.</DescText>
            <DescText>If, like me, you're feeling a little disorganized, you can check out the extension for yourself <SiteLink href="https://chrome.google.com/webstore/detail/routinelist/eckihielkdkafbhekdgpbjlloiddjdpd?hl=en" target="_blank">here</SiteLink>.</DescText>
            <a id="projects"></a>
          </div>
        </AdaptedGrid>
      </Screen>
      <AniScreen style={screen3Disp ? {} : {display: "none"}}>
        <AdaptedGrid>
          <div>
            <Title>
              RoutineList
            </Title>
            <DescText>
              While a student at SFSU, I took a class called Human Computer Interaction, during which we had to design a mobile app. After making my design, i realized two things, first that the design was very achievable, and second, that it would make more sense for me to make it as a Chrome extension. RoutineList was born!
            </DescText>
            <DescText>
              RoutineList is a to-do list app. Users can set tasks for themselves to a specific time of day and days of the week, and those tasks will uncheck themselves on those days of the week at those times of day. It ended up being very useful for me at a time where I needed a little help self-directing, and it's always great to get utility out of your own work.
            </DescText>
          </div>
          <ImageHolder>
            <RestrictedImage src={rlbanner}></RestrictedImage>
          </ImageHolder>
          <ImageHolder>
            <RestrictedImage src={rluse}></RestrictedImage>
          </ImageHolder>
          <div style={{marginTop: height / 75}}>
            <DescText>At a time where I was still getting my legs under me as a developer, I found the design process for RoutineList to be very satisfying, building it in standard HTML/CSS/JS and taking advantage of tools like Chrome's user storage. It was finished by May 2021, in time to present it for the final project of the class. I'd love to flesh out the design more in the future, and I'm comfortable with where it is for now.</DescText>
            <DescText>If, like me, you're feeling a little disorganized, you can check out the extension for yourself <SiteLink href="https://chrome.google.com/webstore/detail/routinelist/eckihielkdkafbhekdgpbjlloiddjdpd?hl=en" target="_blank">here</SiteLink>.</DescText>
            <a id="projects"></a>
          </div>
        </AdaptedGrid>
      </AniScreen>
      <Screen id='hiddenscreen4' style={screen4Disp ? {display: "none"} : {visibility: "hidden"}}>
        <Title>Other Projects</Title>
        <AdaptedGrid>
          <div>
            <DescText>
              <Green>I Love This Song!</Green>, online forum dedicated to discussing one's favorite songs. Built in React and NodeJS. Makes use of the Spotify API. View the code <SiteLink href="https://github.com/NickGreenSF/ilovethissong" target="_blank">here.</SiteLink>
            </DescText>
            <ImageHolder>
              <RestrictedImage src={ilts}></RestrictedImage>
            </ImageHolder>
          </div>
          <div>
            <DescText>
              <Green>SepSolutions.net</Green>, freelance WYSIWYG website build job for a prominent chemical supplier in the western US. Link pending release.
            </DescText>
            <ImageHolder>
              <RestrictedImage src={sep}></RestrictedImage>
            </ImageHolder>
          </div>
        </AdaptedGrid>
        <DescText style={{textAlign: "center"}}>Color and theming inspiration from <SiteLink href='https://brittanychiang.com/' target='_blank'>Brittany Chiang</SiteLink></DescText>
        <DescText style={{textAlign: "center", marginBottom: height/10}}>Find me at <Green>nicholasgreensf@gmail.com</Green></DescText>
      </Screen>
      <AniScreen style={screen4Disp ? {} : {display: "none"}}>
        <Title>Other Projects</Title>
        <AdaptedGrid>
          <div>
            <DescText>
              <Green>I Love This Song!</Green>, online forum dedicated to discussing one's favorite songs. Built in React and NodeJS. Makes use of the Spotify API. View the code <SiteLink href="https://github.com/NickGreenSF/ilovethissong" target="_blank">here.</SiteLink>
            </DescText>
            <ImageHolder>
              <RestrictedImage src={ilts}></RestrictedImage>
            </ImageHolder>
          </div>
          <div>
            <DescText>
              <Green>SepSolutions.net</Green>, freelance WYSIWYG website build job for a prominent chemical supplier in the western US. Link pending release.
            </DescText>
            <ImageHolder>
              <RestrictedImage src={sep}></RestrictedImage>
            </ImageHolder>
          </div>
        </AdaptedGrid>
        <DescText style={{textAlign: "center"}}>Color and theming inspiration from <SiteLink href='https://brittanychiang.com/' target='_blank'>Brittany Chiang</SiteLink></DescText>
        <DescText style={{textAlign: "center", marginBottom: height/10}}>Find me at <Green>nicholasgreensf@gmail.com</Green></DescText>
      </AniScreen>
    </TopLevel>
  );
}
