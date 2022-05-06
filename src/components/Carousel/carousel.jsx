import React, { Component } from "react";
import "./carousal.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
  };

  const carousalData = [
    {
      title: "Makeup",
      image:
        "https://images-static.nykaa.com/uploads/7f12e789-83ce-4a44-8a0b-ac778582f2c1.png?tr=w-150,cm-pad_resize",
    },
    {
      title: "Skin",
      image:
        "https://images-static.nykaa.com/uploads/f116a424-27b3-4812-a9eb-2f198fb42d0a.png?tr=w-150,cm-pad_resize",
    },
    {
      title: "Hair",
      image:
        "https://images-static.nykaa.com/uploads/a2212275-11a6-4497-a56d-34c48f722cfd.png?tr=w-150,cm-pad_resize",
    },
    {
      title: "Luxe",
      image:
        "https://images-static.nykaa.com/uploads/d9a58c98-68bd-4a0f-be2e-17eaff318e94.png?tr=w-150,cm-pad_resize",
    },
    {
      title: "Personal Care",
      image:
        "https://images-static.nykaa.com/uploads/43414e29-b414-446c-b27b-3bd628da03cc.png?tr=w-150,cm-pad_resize",
    },
    {
      title: "Fragrances",
      image:
        "https://images-static.nykaa.com/uploads/eadccd61-3a75-41ad-bae2-efaa7c775520.png?tr=w-150,cm-pad_resize",
    },
    {
      title: "Appliances",
      image:
        "https://images-static.nykaa.com/uploads/22b8500a-8e23-4f8e-a0ee-14ca58b7a8a6.jpg?tr=w-150,cm-pad_resize",
    },
    {
      title: "Wellness",
      image:
        "https://images-static.nykaa.com/uploads/acdd4596-5b32-4d74-a92d-4235f75cbdc2.png?tr=w-150,cm-pad_resize",
    },
    {
      title: "Mom&Baby",
      image:
        "	https://images-static.nykaa.com/uploads/7127f739-5dcb-40a5-af80-30e879f066b0.jpg?tr=w-150,cm-pad_resize",
    },
    {
      title: "Men's",
      image:
        "https://images-static.nykaa.com/uploads/f3cd6008-8b36-411f-bb3c-2314128aafad.png?tr=w-150,cm-pad_resize",
    },
  ];
  return (
    <div>
      <div className='poster'>
        <img
          src='https://images-static.nykaa.com/uploads/d79ef179-462b-4774-b1c6-845855e2c487.gif?tr=w-1200,cm-pad_resize'
          alt='test'
          loading='eager'
          srcset='https://images-static.nykaa.com/uploads/d79ef179-462b-4774-b1c6-845855e2c487.gif?tr=w-2400,cm-pad_resize 2x'
        ></img>
      </div>
      <div id='carousel'>
        <Slider {...settings}>
          {carousalData.map((data, index) => {
            return (
              <div key={index}>
                <img style={{ margin: "auto" }} src={data.image} alt='' />
                <center style={{ fontSize: "10px", fontWeight: "600" }}>
                  {data.title}
                </center>
              </div>
            );
          })}
        </Slider>
        <div className='brand_offer_banner'>
          <img
            src='https://images-static.nykaa.com/uploads/4292a077-f0ab-4546-a3e2-8785ddf82cc4.jpg?tr=w-1200,cm-pad_resize'
            alt='test'
            loading='eager'
            srcset='https://images-static.nykaa.com/uploads/4292a077-f0ab-4546-a3e2-8785ddf82cc4.jpg?tr=w-2400,cm-pad_resize 2x'
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
