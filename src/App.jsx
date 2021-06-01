import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import TopPart from './component/TopPart';
import PortfolioCarousel from './component/PortfolioCarousel';
import SelfCard from './component/SelfCard';

function App() {
  return (
    <BrowserRouter>
      <div>
        <TopPart />
        <SelfCard />
        <Switch>
          <Route path="/" exact component={PortfolioCarousel} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
