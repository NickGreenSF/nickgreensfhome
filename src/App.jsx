import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import TopPart from './component/TopPart';
import PortfolioCarousel from './component/PortfolioCarousel';

function App() {
  return (
    <BrowserRouter>
      <div>
        <TopPart />
        <Switch>
          <Route path="/" exact component={PortfolioCarousel} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
