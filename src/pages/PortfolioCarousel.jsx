import React, { useState } from 'react';
import { Carousel, CarouselItem, Card } from 'react-bootstrap';
import SelfCard from '../component/SelfCard';
import banner0 from '../images/banner-0.PNG';
import banner1 from '../images/banner-1.PNG';

// This won't change for weeks at a time, so I'm just gonna add elements to it manually.
// The banner images are all 1400x560px, the default resolution for the Chrome extension banners, to make for consistent cards.

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
      <Carousel id="carousel" activeIndex={index} onSelect={handleSelect}>
        <CarouselItem className="carouselitem">
          <Card className="carouselcard">
            <img src={banner0} alt="RoutineList banner" />
            <a href="../nickgreensfhome/project?p=0">RoutineList</a>
          </Card>
        </CarouselItem>
        <CarouselItem className="carouselitem">
          <Card className="carouselcard">
            <img src={banner1} alt="nickgreensf.com banner" />
            <a href="../nickgreensfhome/project?p=1">nickgreensf.com</a>
          </Card>
        </CarouselItem>
      </Carousel>
    </div>
  );
}

export default PortfolioCarousel;
