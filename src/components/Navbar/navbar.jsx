import "./navbar.css";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [offerTitle, setOfferTitle] = useState(true);
  const [value, setValue] = React.useState(null);

  const filter = createFilterOptions();
  const bag = useSelector((store) => store.bag);
  const cartProducts=useSelector((store)=>store.cartProducts)
  useEffect(() => {
    const changeTitle = setInterval(() => {
      setOfferTitle((prev) => {
        setOfferTitle(!prev);
      });
    }, 1000);
    return () => clearInterval(changeTitle);
  }, []);

  const topSearches = [
    { title: "Nykaa Cosmetics" },
    { title: "Face Masks" },
    { title: "Nykaa Naturals" },
    { title: "Lipstick" },
    { title: "Hand Sanitizers" },
  ];

  return (
    <div id='navbar'>
      <div className='offer_banner'>
        <div className='offer_title'>
          {offerTitle === true
            ? "BEAUTY BONANZA Get Your Daily Dose Of Amazing Deals"
            : ""}
        </div>
        <div className='offer_banner_tabs'>
          <div className='br'>
            <a href=''>
              <div>
                <SmartphoneIcon />
              </div>
              <div className='banner_links'>Get App</div>
            </a>
          </div>
          <div className='br'>
            <a href=''>
              <div>
                <PlaceOutlinedIcon />
              </div>
              <div className='banner_links'>Store & Events</div>
            </a>
          </div>
          <div className='br'>
            <a href=''>
              <div>
                <CardGiftcardIcon />
              </div>
              <div className='banner_links'>Gift Card</div>
            </a>
          </div>
          <div className='help'>
            <a href=''>
              <div>
                <HelpOutlineOutlinedIcon />
              </div>
              <div className='banner_links'>Help</div>
            </a>
          </div>
        </div>
      </div>
      <div id='searchBar'>
        <div className='searchbar'>
          <div className='lsb'>
            <div>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 250'>
                <path
                  xmlns='http://www.w3.org/2000/svg'
                  d='M157.9 57.2c5-9.6-11.2-6.9-11.2-6.9-5.8 0-8.4 7-9.6 9l-17.5 34.5c-3.3 5.7-14.2 30.1-17.8 35.5-.3-5.5.1-16.5.2-19.1.7-10.4 1.4-18.3 2.5-27.8.8-7.4 2.4-15.7.9-23.1-1-4.6-2.5-4.9-9.1-5.6-6.9-.7-11.6 9.3-13.9 14-8.4 17.4-17.8 34.4-25.3 52.2-2.2 5.2-4.9 10.4-7.2 15.5-2.7 6.2-5.2 12.3-8.1 18.4-3.1 6.4-12.8 27.4-15.5 34-3 7.2-3.6 13 8.4 12.7 1.9 0 6.1.4 11.3-5.2 4.1-4.4 4.9-8.5 7.3-14.6 8.6-21.6 14.7-35.9 24.1-57.3.9-2.1 3-8.2 5.1-12.9-.1 6.7-1.2 14.7-1.7 20-1.6 19.4-2.7 38.1-4.4 57.3-.2 2.6-.9 5.7.3 8.1 1.2 2.4 4.2 3 6.6 3.3 9.6 1.2 10.6-3.6 13.6-10.2 2.7-5.9 4.3-10.7 6.7-16.7 7.4-18.5 15.2-36.8 23.8-54.8 2.2-4.6 4.4-9.1 6.8-13.6 4.4-8.3 8-16.1 12.8-25.3 3.6-6.6 7.1-14.1 10.9-21.4zm329.5 52.1c-1.1-11.1-16.3-5.5-25.4-3.8-3.4.6-13.9 2.6-26 4.9-.5-12.5-.3-10-.4-17.6-.3-11-.9-19.6-1.5-29.3-.4-6.1-1.3-14.6-12.3-13-12.8 1.8-14.9 8.2-18.3 15.9-8.9 20.1-8.6 20.2-18.7 42.6-.8 1.7-4.5 10.7-5.1 12.5-.4.1-1.2.3-2.2.6-4.1.9-9.1 2-14.6 3.2l.1-.5c1.3-10.2 2.9-20.4 4.3-30.6 1.3-9.3 2.7-24.5 3.8-33.8 1.2-10-10.4-9.8-10.4-9.8-7.1-.4-9.8 1.7-14.3 7.5-7.7 10-17 20.8-25.2 31.8-14.9 19.9-25.8 34.9-39.3 54.9-3.9 5.8-9.9 14.6-15.1 21.5-3.5-6.9-6.5-14.5-9.4-21.5-4.2-10-7.3-16.2-9.3-22.8-1.8-5.8.4-6.6 4.7-9.9 12.4-9.4 26.4-15.9 39.1-24.9 9-6.4 19.8-13.5 28.6-20.1 0 0 5.1-3 7.9-6.8 3.5-4.8-6.4-9.8-6.4-9.8-5.6-.9-8.7.4-12.6 2.2-4 1.8-9.2 5.9-12.6 8.6-7.5 5.8-17 12.7-24.4 18.5-9.1 7.1-15.3 11.5-25.3 17.4l25.4-38c8.3-10.7-13.7-13.7-22.1-2.4-7.8 10.1-13.1 19-19.2 28.2-14.7 21.9-26.8 44.9-38.9 69-4.6 9.2-9.1 18.8-13.3 28.3-2 4.6-7.9 15.2.2 16.3 17.3 2.2 20.1-6 24-15.9 6.4-16.3 8.5-19.3 12.6-29.4 4-9.8 6.9-15.4 11.4-23.8.1-.1 1.4-2.2 1.4-2.2.8 1.7 6.1 19.3 6.8 21.3 3.6 9.5 9.9 31.7 13.5 41.8 2.6 8.4 3.3 10.8 14.6 10.5 5.6-.1 8-2.3 11.7-9.3s19.7-36.8 19.7-36.8c4.8-.8 11.7-2 16.2-2.8.8-.1 2.6-.5 5.1-1 1.7-.2 3.1-.5 4.2-.8.1 0 .1 0 .2-.1 4.4-.9 10-2 16.1-3.2-1.1 5.5-4.5 17.6-5.2 20.7 0 0-7.4 28.8 2.2 30.3 6 .9 9.1-.1 9.1-.1 11.2-1.3 11.4-16.4 11.4-16.4l6.1-39.1c4.4-.9 8.8-1.8 13.1-2.6l-13.2 44.6c-1.9 6.3-3.3 14.4 8 14.4 9.2.5 9.8-5.3 9.8-5.3.2-.9 7.5-24.4 9.3-32.8 1.2-5.4 5.5-19.3 7.2-24.9 4.8-.9 8.4-1.6 10.1-1.9 2-.3 5.9-1 11-1.8-.1 5.2 0 12.4.1 13.4 1.1 15.8-.1 32.2 3.2 47.7.5 2.5 1.5 5.7 4.7 5.7 3.8 0 5-.4 9-.7 11.6-1 9.5-12.7 8.8-20.1-.8-8.2-1.6-15.1-2.7-23.3-.9-6.7-1.5-15.5-1.6-26.1v-.2c19-3.2 39.5-6.7 42.5-7.2 4.8-1.3 8.8-.9 7.8-11.9zm-148.5 21c0 .1-.1.1-.1.2-13.3 2.9-25.8 5.7-32.8 7.3 7-11.7 37.8-54.3 42.5-59.3-2.6 13.2-6.8 37.7-9.6 51.8zm76.8-16.8v.7c-6.4 1.2-12.4 2.4-17.2 3.3 6.1-15.8 12.5-35.2 16.3-45-.3 7.3 1.2 33.8.9 41zM229.2 66.4c2-3.7 6.5-11 .9-13.8-3.3-1.6-7.7-2.6-11.1-.9-2.8 1.5-4.9 4.4-6.3 7.1l-21.4 33.7c-3.5 4.8-6.8 10.8-13.9 11.6-4.7.5-8.1-1.5-8-5.7.1-4.3 2.6-10 4.5-13.7 5.6-10.6 6.3-14.2 11.7-24.7 5.2-10.1-11.8-12.4-16-5.1-3 5.2-8.8 15-10.1 18.3-2.4 6-20.4 34.6-12.6 45.9 10 12.8 36.6-7.4 23 15.9-11 18.7-17.9 29.4-27.5 46.7-2.1 3.7-4.7 7.4-5.4 11.8-1 6.2 7.5 6.1 11.2 5.9 6.5-.5 9.6-3.5 12.2-9.4 1.4-3.1 3.3-6.9 4.7-10 12.6-27.5 26-51.4 42.6-78 7.9-12.6 14.9-23.4 21.5-35.6z'
                  fill='#fc2779'
                ></path>
              </svg>
            </div>
            <div className='get_by'>
              <div>
                <p>Categories</p>
              </div>
              <div>
                <p>Brands</p>
              </div>
              <div>
                <p>Nykaa Fashion</p>
              </div>
              <div>
                <p>Beauty Advice</p>
              </div>
              <div>
                <p>Nykaa.Network</p>
              </div>
            </div>
          </div>
          <div className='rsb'>
            <div className='search_input '>
              {" "}
              <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                  if (typeof newValue === "string") {
                    setValue({
                      title: newValue,
                    });
                  } else if (newValue && newValue.inputValue) {
                    // Create a new value from the user input
                    setValue({
                      title: newValue.inputValue,
                    });
                  } else {
                    setValue(newValue);
                  }
                }}
                filterOptions={(options, params) => {
                  const filtered = filter(options, params);

                  const { inputValue } = params;
                  // Suggest the creation of a new value
                  const isExisting = options.some(
                    (option) => inputValue === option.title
                  );
                  if (inputValue !== "" && !isExisting) {
                    filtered.push({
                      inputValue,
                      title: `Add "${inputValue}"`,
                    });
                  }

                  return filtered;
                }}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                id='free-solo-with-text-demo'
                options={topSearches}
                getOptionLabel={(option) => {
                  // Value selected with enter, right from the input
                  if (typeof option === "string") {
                    return option;
                  }
                  // Add "xxx" option created dynamically
                  if (option.inputValue) {
                    return option.inputValue;
                  }
                  // Regular option
                  return option.title;
                }}
                renderOption={(props, option) => (
                  <li {...props}>{option.title}</li>
                )}
                sx={{ width: 250 }}
                freeSolo
                renderInput={(params) => (
                  <TextField {...params} label='Search on Nykaa' size='small' />
                )}
              />
            </div>
            <div className='account_gifts'>
              <Link to={"/signin"}>
                <div
                  className='account' style={{textDecoration:"none" , color:"black"}}>
                  <div>
                    <AccountCircleOutlinedIcon />
                  </div>
                  <div style={{textDecoration:"none" , color:"black"}}>Account</div>
                </div>
              </Link>
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                >
                  <g fill='none' fill-rule='evenodd'>
                    <path fill='#FFF' fill-opacity='0' d='M0 0h24v24H0z'></path>
                    <path
                      fill='#fc2779'
                      fill-rule='nonzero'
                      d='M6.783 2.837c1.286-1.015 3.155-.871 4.21.306.548.509.959 1.228 1.271 2.114.45-.892.983-1.591 1.633-2.041l.137-.096a3.192 3.192 0 014.196.626c1.088 1.302.967 3.227-.25 4.36-.128.127-.27.248-.424.361h2.362c.95.043 1.727.807 1.772 1.815l-.003 1.703c-.08.993-.927 1.747-1.887 1.71h-.074v6.039a1.723 1.723 0 01-1.49 1.634l-.147.013H6.539a1.72 1.72 0 01-1.649-1.796v-5.89c-.985.025-1.82-.733-1.89-1.785v-1.66c.017-.494.231-.96.595-1.295a1.816 1.816 0 011.295-.489h2.755c-.546-.316-.961-.674-1.252-1.069a3.134 3.134 0 01.233-4.427zm11.064 10.868H6.78v5.786h11.067v-5.786zm-12.958-3.35l-.002 1.451 14.912-.001.001-1.449-14.911-.001zM16.78 4.957A1.303 1.303 0 0015 4.75l-.146.11c-.392.327-.78.927-1.123 1.721-.111.258-.214.527-.308.802l-.13.403.26-.02c1.523-.132 2.497-.475 3.026-.938l.089-.083a1.302 1.302 0 00.112-1.788zm-7.229-.585a1.243 1.243 0 00-1.661.003c-.511.46-.552 1.247-.036 1.826l.081.102c.438.504 1.317.957 2.758 1.28l.219.046-.056-.32a11.227 11.227 0 00-.125-.575l-.11-.417c-.243-.834-.56-1.46-.973-1.85z'
                    ></path>
                  </g>
                </svg>
              </div>
              <div>
                <div
                  style={{
                    margin: "0px 0px -15px 10px",
                    paddingLeft: "6px",
                    border: "1px solid #fc2779 ",
                    textAlign: "centre",
                    backgroundColor: "#fc2779",
                    color: "white",
                    width: "12px",
                    height: "20px",
                    borderRadius: "50%",
                  }}
                >
                  {cartProducts.length}
                </div>
                <Link to={"/checkout"}>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M20.5 7.2H16.2V6.9C16.3 4.5 14.4 2.5 12 2.5C9.6 2.6 7.8 4.5 7.8 6.9V7.2H3.5C2.9 7.2 2.5 7.6 2.5 8.2V16.4C2.5 19.2 4.7 21.4 7.5 21.4H16.5C19.3 21.4 21.5 19.2 21.5 16.4V8.2C21.5 7.7 21.1 7.2 20.5 7.2ZM9.3 6.9C9.3 5.4 10.5 4.1 12 4C13.5 4.1 14.7 5.4 14.7 6.9V7.2H9.3V6.9ZM20 16.5C20 18.4 18.4 20 16.5 20H7.5C5.6 20 4 18.4 4 16.5V8.7H7.8V10.7C7.6 10.9 7.5 11.2 7.5 11.4C7.5 12 8 12.4 8.5 12.4C9 12.4 9.5 11.9 9.5 11.4C9.5 11.1 9.4 10.9 9.2 10.7V8.7H14.6V10.6C14.4 10.8 14.3 11.1 14.3 11.4C14.3 12 14.7 12.5 15.3 12.5C15.9 12.5 16.4 12.1 16.4 11.5C16.4 11.2 16.3 11 16.1 10.8V8.8H20V16.5Z'
                      fill='black'
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
