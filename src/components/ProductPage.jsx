

import * as React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';

import {Card} from "./card"
import {Card2} from "./Card2"
import {Add2Cart} from "./add2cartButton";
import {ProductCarousel} from "./ProductCarousel";


function ProductPage() {
  
  return (
    <div className="App">
     {/* <Button variant="contained">Hello World</Button> */}
     {/* <div>
       <Card></Card>
     </div> */}
     <div>
     <ProductCarousel></ProductCarousel>
     </div>
     
     <div>
       <Card2></Card2>
     </div>
    </div>
  );
}

export  {ProductPage};

