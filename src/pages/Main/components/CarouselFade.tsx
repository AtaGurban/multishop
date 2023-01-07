import Carousel from 'react-bootstrap/Carousel';
import React, { FC } from "react";


interface CarouselProps {
  data: any[]
}

const  CarouselFade:FC<CarouselProps> =  ({data})=> {
  console.log(data);
  
  return (
    <div className='h-100'>
      <Carousel fade>
        {
          data.map((i)=>
            <Carousel.Item>
            <img
              className="d-block w-100"
              src={i}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          )
        }


      </Carousel>

    </div>
  );
}

export default CarouselFade;