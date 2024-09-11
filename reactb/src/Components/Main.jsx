import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import laptop from '../assets/laptop.png'

function Carrusel() {
  return (
    <>
    <div id='text'>
        <h4>Computer and Laptop</h4>
        <h1>Accesories</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut facere amet laboriosam illo, <br />animi aperiam pariatur quasi dolore optio facilis hic quae, <br />voluptatibus rerum dolorum sit maxime? Consequuntur, a voluptas!</p>
    </div>
        <div id='carrusel'>
        <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={laptop}
          style={{width:200,height:250}}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={laptop}
          style={{width:200,height:250}}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={laptop}
          style={{width:200,height:250}}
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
        </div>
    </>
  )
}
export default Carrusel