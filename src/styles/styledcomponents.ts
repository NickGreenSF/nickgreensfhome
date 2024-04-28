import styled, {
    Keyframes,
    keyframes,
    StyledComponent,
} from 'styled-components';
import { fadeInDownBig, fadeIn, fadeInUp } from 'react-animations';

// need width and height for styling
const width: number = window.innerWidth;
const height: number = window.innerHeight;

// bchiang's colors
const white : string = '#e6f1ff';
const green : string = '#64ffda';
// const lightestSlate = '#ccd6f6'
const lightSlate : string = '#a8b2d1';
const slate : string = '#8892b0';
// const lightestNavy = '#233554'
// const lightNavy = '#112240'
const navy : string = '#0a192f';

// animations with keyframes
const fadeDownAni: Keyframes = keyframes`${fadeInDownBig}`;
const fadeInAni: Keyframes = keyframes`${fadeIn}`;
const fadeUpAni: Keyframes = keyframes`${fadeInUp}`;

// Hello there. text
export const Hi: StyledComponent<'div', any, {}, never> = styled.div`
  width: 100%;
  text-align: center;
  font-size: ${height / 10}px;
  padding-top: ${height / 5}px;
  animation: 2s ${fadeDownAni};
  color: #e6f1ff;
  top: ${height / 10}px;
`;

// My name's Nick Green etc. text
export const Im: StyledComponent<'div', any, {}, never> = styled.div`
  font-size: ${height / 20}px;
  color: #a8b2d1;
  text-align: center;
  padding-bottom: ${height / 5}px;
`;

// text that fades in and does nothing else
export const FadeInText: StyledComponent<'span', any, {}, never> = styled.span`
  animation: 2s ${fadeInAni};
`;

// the holder for the rest of the site
export const TopLevel: StyledComponent<'div', any, {}, never> = styled.div`
  width: 100%;
  position: absolute;
`;

// a screen here refers to a section of the site, here it actually refers to a div the size of a section of a site that holds space for the 
// real screens, except for the first
export const Screen: StyledComponent<'div', any, {}, never> = styled.div`
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  @media screen and (max-width: 1000px) {
    width: 100%;
    margin: 0;
  }
`;

// these are the screens used for pages other than 1, they scroll up from the bottom
export const AniScreen: StyledComponent<'div', any, {}, never> = styled.div`
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  animation: 1s ${fadeUpAni};
  @media screen and (max-width: 1000px) {
    width: 100%;
    margin: 0;
  }
`;

// the navbar fades in like the rest of the top screen
export const Navbar: StyledComponent<'div', any, {}, never> = styled.div`
  position: sticky;
  top: 0;
  z-index: 2;
  animation: 2s ${fadeInAni};
  color: ${white};
  height: ${height / 15}px;
  background-color: ${navy};
  box-shadow: 1px 1px 1px 1px black;
  @media screen and (max-width: 1000px) {
    visibility: hidden;
  }
`;

// we use transform origin to make a normally horizontal navbar vertical
export const LeftSidebar: StyledComponent<'div', any, {}, never> = styled.div`
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
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

// holding space for the sidebars
export const SidebarSub: StyledComponent<'div', any, {}, never> = styled.div`
  @media screen and (min-width: 1000px) {
    display: none;
  }
  text-align: center;
`;

// in addition to transforming this sidebar, we have to translate it to the other side of the page, which is an inexact science
export const RightSidebar: StyledComponent<'div', any, {}, never> = styled.div`
  position: sticky;
  top: ${height}px;
  transform: rotate(-0.25turn) translate(0, ${width}px)
    translate(0, -${height / 15 + height / 30}px);
  transform-origin: 0 0;
  left: 0;
  color: ${slate};
  height: ${height / 15}px;
  width: ${height}px;
  background-color: ${navy};
  animation: 2s ${fadeInAni};
  box-shadow: -1px -1px 1px 1px black;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

// takes up space for the right sidebar until it's displayed
export const RightSidebarSpacer: StyledComponent<'div', any, {}, never> = styled.div`
  position: sticky;
  top: ${height}px;
  transform: rotate(-0.25turn) translate(0, ${width}px)
    translate(0, -${height / 15 + height / 30}px);
  transform-origin: 0 0;
  left: 0;
  color: ${white};
  height: ${height / 15}px;
  width: ${height}px;
  background-color: ${navy};
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

// takes up space for the left sidebar
export const LeftSidebarSpacer: StyledComponent<'div', any, {}, never> = styled.div`
  position: sticky;
  top: ${height}px;
  transform: rotate(-0.25turn);
  transform-origin: 0 0;
  left: 0;
  color: ${white};
  height: ${height / 15}px;
  width: ${height}px;
  background-color: ${navy};
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

// the links on the left sidebar
export const LeftText: StyledComponent<'a', any, {}, never> = styled.a`
  color: ${slate};
  position: absolute;
  top: ${height / 75}px;
  :hover {
    color: ${lightSlate};
    cursor: pointer;
  }
`;

// upside down text on the right text
export const RightText: StyledComponent<'span', any, {}, never> = styled.span`
  position: absolute;
  top: ${height / 75}px;
  transform: scale(-1, -1);
`;

// taking up space for navbar until it appears
export const NavbarSpacer: StyledComponent<'div', any, {}, never> = styled.div`
  height: ${height / 15}px;
  background-color: ${navy};
`;

// any of the four links to other spots on the page
export const NavbarLink: StyledComponent<'a', any, {}, never> = styled.a`
  display: inline-block;
  position: absolute;
  margin-top: ${height / 60}px;
  color: ${lightSlate};
  :hover {
    color: ${green};
    text-decoration: none;
  }
`;

// the title of the website
export const NavbarText: StyledComponent<'span', any, {}, never> = styled.span`
  display: inline-block;
  position: absolute;
  margin-top: ${height / 60}px;
  color: ${green};
`;

// Please scroll down
export const ScrollDown: StyledComponent<'div', any, {}, never> = styled.div`
  animation: 1s upNDown 1s infinite;
  text-align: center;
  position: relative;
  z-index: -1;

  @keyframes upNDown {
    0% {
      transform: translate(0, ${-height / 30}px);
    }
    100% {
      transform: translate(0, ${height / 30}px);
    }
  }
`;

// this is the first animation the Please scroll down component has so it looks like it's animating when it's hidden (it isn't)
export const ColorTransition: StyledComponent<'div', any, {}, never> = styled.div`
  animation: 1s colorTrans;
  color: #e6f1ff;
  zindex: 10;
  @keyframes colorTrans {
    0% {
      color: #0a192f;
      transform: translate(0, ${-height / 30}px);
    }
    100% {
      color: #e6f1ff;
      transform: translate(0, ${height / 30}px);
    }
  }
`;

// top titles of sections
export const Title: StyledComponent<'div', any, {}, never> = styled.div`
  text-align: center;
  font-size: ${height / 25}px;
  color: #e6f1ff;
`;

// description texts
export const DescText: StyledComponent<'div', any, {}, never> = styled.div`
  font-size: ${height / 50}px;
  color: ${slate};
  margin-bottom: ${height / 75}px;
`;

// a grid that is not a grid if we're on mobile
export const AdaptedGrid: StyledComponent<'div', any, {}, never> = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 0;
  margin-left: ${width / 10}px;
  margin-right: ${width / 10}px;
  margin-bottom: ${height / 10}px;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

// image props
export const ImageHolder: StyledComponent<'div', any, {}, never> = styled.div`
  display: flex;
  justify-content: center;
`;

// images that can only be so big
export const RestrictedImage: StyledComponent<'img', any, {}, never> = styled.img`
  width: ${Math.max(width / 5, height / 3)}px;
  margin: auto;
`;

// the stardle logo, ripped straight from the source
export const StardleLogo: StyledComponent<'span', any, {}, never> = styled.span`
  color: rgba(127, 127, 127, 0.9);
`;

// green text
export const Green: StyledComponent<'span', any, {}, never> = styled.span`
  color: ${green};
`;

// green links
export const SiteLink: StyledComponent<'a', any, {}, never> = styled.a`
  color: ${green};
  :hover {
    color: ${green};
  }
`;