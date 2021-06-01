import React, { useState } from 'react';
import { Carousel, CarouselItem, Card } from 'react-bootstrap';

function PortfolioCarousel() {
  // I don't do anything with these props but taking them in causes the findDOMNode error to go away, so I'm leaving it.
  const [index, setIndex] = useState(0);

  function handleSelect(selectedIndex, e) {
    console.log(e);
    setIndex(selectedIndex);
  }

  return (
    <div>
      <div>{index}</div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <CarouselItem className="carouselitem">
          <Card className="carouselcard">Hi</Card>
        </CarouselItem>
        <CarouselItem className="carouselitem">
          <Card className="carouselcard">RoutineList</Card>
        </CarouselItem>
      </Carousel>
    </div>
  );
}

export default PortfolioCarousel;
