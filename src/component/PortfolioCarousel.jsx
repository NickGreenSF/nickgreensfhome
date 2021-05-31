import React, { useState } from 'react';
import { Carousel, CarouselItem, Card } from 'react-bootstrap';

function PortfolioCarousel() {
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
