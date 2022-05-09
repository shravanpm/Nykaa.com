// import Button from '@mui/material/Button';

import "../../stylesheets/ProductPage.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Add2Cart } from "./add2cartButton";
import { SingleCard } from "./SingleCard";
import { ProductCarousel } from "./ProductCarousel";
import { Sidebar } from "./Sidebar";
import { store } from "../../Redux/store";

import Navbar from "../Navbar/navbar";
import { Footer } from "../Footer/footer";

export const ProductPage = (props) => {
  const [data, setData] = useState([]);

  const carouselData = props.data.carouselData;

  async function getData() {
    let url = props.data.url;
    axios.get(url).then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  }

  const setDataSideBar = (d) => {
    setData([...d]);
    console.log(data);
  };

  useEffect(() => {
    getData();
    console.log("ssss", data);
  }, []);
  return (
    <div style={{ border: "1px solid white" }}>
      <Navbar></Navbar>
      <div className='productPage' style={{ paddingTop: "7%" }}>
        <div>
          <ProductCarousel data={carouselData} />
        </div>

        <div>
          <h1 style={{ textAlign: "center" }}>All Products</h1>
        </div>

        <div className='flex'>
          <div
            style={{
              width: "20%",
              marginRight: "-50px",
            }}
          >
            <Sidebar data={{ setDataSideBar: setDataSideBar, data: data }} />
          </div>
          <div className='productCardList'>
            {data.map((e) => (
              <div key={e.id}>
                <SingleCard data={e} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

/**
 * 
 const Home = ({ data }) => {
  return (
    <div className="kat">
      {data.map(({ id, title, img, link }) => (
        <li key={id}>
          <span>{title}</span>
          <div className="img-container">
            <img src={img} alt={title}></img>
          </div>
        </li>
      ))}
    </div>
  );
};
 */
/*

*/
