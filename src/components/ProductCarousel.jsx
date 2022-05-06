

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export const ProductCarousel = () => {
    return (
        <div style={{width:"100%",
                    margin:"auto"}}>

            <Carousel autoPlay={true} showThumbs={false} showIndicators={true}>
                <div>
                    <img src="https://images-static.nykaa.com/uploads/66ce6cfa-9ce4-4198-b9d7-571732d5a374.jpg?tr=w-1200,cm-pad_resize" />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src="https://images-static.nykaa.com/uploads/831b1fd8-6558-4588-bcdb-7271efadeacc.jpg?tr=w-1200,cm-pad_resize" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src="https://images-static.nykaa.com/uploads/fcf41727-3334-4373-890b-8417ec100563.jpg?tr=w-1200,cm-pad_resize" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
        </div>
    )
}