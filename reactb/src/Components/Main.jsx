import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import laptop from '../assets/laptop.png';

function Main() {
  return (
    <div className="main-container">
      <div id='text' className="text-section">
        <h3>Computer and Laptop</h3>
        <h1>Accessories</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut facere amet laboriosam illo, <br />
          animi aperiam pariatur quasi dolore optio facilis hic quae, <br />
          voluptatibus rerum dolorum sit maxime? Consequuntur, a voluptas!
        </p>
      </div>
      <div id='carrusel' className="carousel-section">
        <div className="carousel-container">
          <Carousel data-bs-theme="light">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={laptop}
                alt="First slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={laptop}
                alt="Second slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={laptop}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Main;
