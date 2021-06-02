import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import TopPart from './component/TopPart';
import PortfolioCarousel from './pages/PortfolioCarousel';
import SiteDisplay from './pages/SiteDisplay';

function App() {
  return (
    <BrowserRouter>
      <div>
        <TopPart />
        <Switch>
          <Route path="/" exact component={PortfolioCarousel} />
          <Route path="/project" exact component={SiteDisplay} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
