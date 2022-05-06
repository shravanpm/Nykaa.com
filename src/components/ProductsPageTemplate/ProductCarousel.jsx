

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export const ProductCarousel = (props) => {
    const data = props.data;
    return (
        <div style={{width:"100%",
                    margin:"auto"}}>

            <Carousel autoPlay={true} showThumbs={false} showIndicators={true}>
                
                {data.map( (el) => (
                     <div>
                     <img src={el} />
                     
                 </div>
                ))}
               
            </Carousel>
        </div>
    )
}
/*
<div>
<img src="https://images-static.nykaa.com/uploads/66ce6cfa-9ce4-4198-b9d7-571732d5a374.jpg?tr=w-1200,cm-pad_resize" />

</div>

*/