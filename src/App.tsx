import React from 'react';
import styled from 'styled-components';
import './App.css'

const width = window.innerWidth
const height = window.innerHeight

const Hi = styled.div`
  width: 100%;
  text-align: center;
  font-size: ${width / 10}px;
`

const Im = styled.div`
  font-size: ${width / 20}px;
`

const TopLevel = styled.div`
  width: 100%;
`

function App() {
  return (
    <TopLevel>
      <Hi>Hello there.</Hi>
      <Im>My name's Nick Green. Thanks for dropping by.</Im>
    </TopLevel>
  );
}

export default App;
