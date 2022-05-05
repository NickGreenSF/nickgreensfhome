import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeInDownBig, fadeIn, bounce } from 'react-animations';
import './App.css'
import me from './images/me.jpg'

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
  height: ${height * 5}px;
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

const AboutTitle = styled.div`
  text-align: center;
  font-size: ${height / 25}px;
  color: #e6f1ff;
`

const AboutText = styled.div`
  font-size: ${height / 50}px;
  color: ${slate};
  margin-bottom: ${height / 75}px;
`

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-left: ${width / 10}px;
  margin-right: ${width / 10}px;
  @media screen and (max-width: 1000px){
    grid-template-columns: 1fr;
  }
`

const MeImageHolder = styled.div`
  display: flex;
  justify-content: center;
`

const MeImage = styled.img`
  width: ${Math.max(width / 5, height / 3)}px;
  margin: auto;
`

const Green = styled.span`
  color: ${green};
`

const initBool : boolean = false;

export default function App() {

  const [myNameDisp, setMyNameDisp] = useState(initBool);
  const [navbarDisp, setNavbarDisp] = useState(initBool);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      // gonna do some stuff with the bools here.
    })
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
        <NavbarLink style={{left: width * .65}} href="#about">STARDLE</NavbarLink>
        <NavbarLink style={{left: width * .75}} href="#about">PROJECTS</NavbarLink>
        <NavbarLink style={{left: width * .85}} href="#about">CONTACT</NavbarLink>
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
      <Screen style={{height: height * (14/15)}}>
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
      <Screen>
        <AboutGrid>
          <div>
            <AboutTitle>
              About Me
            </AboutTitle>
            <AboutText>
              I started coding in high school and was immediately drawn to it.
              I liked watching myself get better at it - it struck me as a skill worth learning, and worth making into a trade. 
              After graduating from San Francisco State in February 2022, majoring in computer science, I've been looking for work while making 
              myself the best coder I can possibly be through both personal projects and comprehensive algorithm practice. 
            </AboutText>
            <AboutText> 
              What I like about coding and development is the many problems it presents through the same overall lens; various coding 
              projects and problems I have worked on have felt like anything from math homework to making a short film, and I appreciate how much diversity 
              the field can bring out.
            </AboutText>
            <AboutText>
              I work mostly in <Green>Python</Green> and <Green>Typescript,</Green> and have experience in many other tools and languages, such as <Green>Java,</Green> <Green>C,</Green> <Green>C++,</Green> <Green>MySQL,</Green> <Green>Sass,</Green> and <Green>Docker.</Green>
            </AboutText>
            <AboutText>
              I ambitiously look forward to my time spent as a professional software developer and the many challenges it will bring. Thanks for reading!
            </AboutText>
          </div>
          <MeImageHolder>
            <MeImage src={me}></MeImage>
          </MeImageHolder>
        </AboutGrid>
      </Screen>
      <Screen>
        next
      </Screen>
    </TopLevel>
  );
}
