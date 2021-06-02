import React, { useState } from 'react';
import { Carousel, CarouselItem, Card } from 'react-bootstrap';
import SelfCard from '../component/SelfCard';

function PortfolioCarousel() {
  // I don't do anything with these props but taking them in causes the findDOMNode error to go away, so I'm leaving it.
  const [index, setIndex] = useState(0);

  function handleSelect(selectedIndex, e) {
    console.log(e);
    setIndex(selectedIndex);
  }

  return (
    <div>
      <SelfCard />
      <h2>My Projects</h2>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <CarouselItem className="carouselitem">
          <Card className="carouselcard">
            <a href="./project?p=0">RoutineList</a>
          </Card>
        </CarouselItem>
        <CarouselItem className="carouselitem">
          <Card className="carouselcard">
            <a href="./project?p=1">nickgreensf.com</a>
          </Card>
        </CarouselItem>
      </Carousel>
    </div>
  );
}

export default PortfolioCarousel;