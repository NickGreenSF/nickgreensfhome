import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeInDownBig, fadeIn } from 'react-animations';
import './App.css'

const width = window.innerWidth
const height = window.innerHeight

const fadeDownAni = keyframes`${fadeInDownBig}`
const fadeInAni = keyframes`${fadeIn}`

const Hi = styled.div`
  width: 100%;
  text-align: center;
  font-size: ${height / 10}px;
  padding-top: ${height / 3}px;
  animation: 2s ${fadeDownAni};
  color: #e6f1ff;
  top: ${height / 10}px;
`

const Im = styled.div`
  font-size: ${height / 20}px;
  color: #a8b2d1;
  text-align: center;
`

const FadeInText = styled.span`
  animation: 2s ${fadeInAni};
`

const TopLevel = styled.div`
  width: 100%;
  height: ${height * 5}px;
`

const Screen = styled.div`
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  @media screen and (max-width: 1000px){
    width: 100%;
    margin: 0;
  }
  height: ${height}px;
`

const Navbar = styled.div`
  position: absolute;
  animation: 2s ${fadeInAni};
  color: white;
`

const initBool : boolean = false;

export default function App() {

  const [myNameDisp, setMyNameDisp] = useState(initBool);
  const [navbarDisp, setNavbarDisp] = useState(initBool);

  useEffect(() => {
    setTimeout(() => {
      setMyNameDisp(true);
    }, 2000)
    setTimeout(() => {
      setNavbarDisp(true);
    }, 4000)
  }, [])

  return (
    <TopLevel>
      <Navbar style={navbarDisp ? {} : {display: "none"}}>some words</Navbar>
      <Screen>
        <Hi>
          Hello there.
        </Hi>
        <Im>
          <FadeInText style={myNameDisp ? {} : {display: "none"}}>My name's <span style={{color: "#64ffda"}}>Nick Green</span>. Thanks for dropping by.</FadeInText>
        </Im>
      </Screen>
      <Screen><FadeInText style={{fontSize: 40, color: 'white'}}>test lol</FadeInText></Screen>
    </TopLevel>
  );
}
