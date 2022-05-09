import { useSelector, useDispatch } from "react-redux";
import "./ProductDetails.css";
import { Icon } from "@iconify/react";
import starIcon from "@iconify/icons-carbon/star";
import starFilled from "@iconify/icons-carbon/star-filled";
import locationIcon from "@iconify/icons-bytesize/location";
import tickIcon from "@iconify/icons-charm/tick";
import crossMark from "@iconify/icons-emojione-monotone/cross-mark";
import infoCircleOutlined from "@iconify/icons-ant-design/info-circle-outlined";
import { useEffect, useState } from "react";
import { bag, addProduct } from "../../Redux/action"
import Navbar from "../Navbar/navbar";
import { Footer } from "../Footer/footer";

export const ProductDetails = () => {
  const
    [pin, setPin] = useState("");
  const [show, setShow] = useState("input");
  const [discount, setDiscount] = useState("");
  const [reviews, setReviews] = useState("");
  const [ratings, setRatings] = useState("");
  const [data, setData] = useState({});
  const [valid, setValid] = useState(true);
  const details = useSelector((store) => store.productDetails);
  const bag1 = useSelector((store) => store.cartProducts)
  
  const dispatch = useDispatch();
  const dis = Math.round(((+details.mrp - +details.price) / +details.mrp) * 100);
  const rev = Math.floor(Math.random() * 100000);
  const rat = Math.floor(Math.random() * 1000000);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var date = new Date();
  date.setDate(date.getDate() + 10);
  var day = date.getDate();
  var month = months[date.getMonth()];
  useEffect(() => {
    setDiscount(dis);
    setReviews(rev);
    setRatings(rat);
  }, []);
  const handleChange = (e) => {
    setPin(e.target.value);
    setValid(true);
  };

  const searchPin = () => {
    if
      (pin.length === 6) {
      setShow("fetch");
      async function getPin() {
        let res = await fetch(`https://api.postalpincode.in/pincode/${pin}`);
        let data = await res.json();
        console.log(data[0]);
        if (data[0].Message == "No records found") {
          setTimeout(() => {
            setShow("no");
          }, 1000);
        } else {
          setData(data[0].PostOffice[0]);
          setTimeout(() => {
            setShow("city");
          }, 1000);
        }
      }
      getPin();
    } else {
      setValid(false);
    }
  };

  const addToBag = () => {
    dispatch(addProduct(details))
  }
  return (
    <div id="main" style={{marginTop:"-20px"}}>
      <Navbar></Navbar>
      <div className="flex container1">
        <div id="imageDiv">
          <div id="mainImg">
            <img src={details.image} alt="" id="mainImage" />
          </div>
        </div>
        <div id="right">
          <div id="details">
            <div id="name">{details.name}</div>
            <div>
              <span>
                {details.rating >= 4 ? (
                  <span>
                    <Icon icon={starFilled} />
                    <Icon icon={starFilled} />
                    <Icon icon={starFilled} />
                    <Icon icon={starFilled} />
                    <Icon icon={starIcon} />
                  </span>
                ) : details.rating >= 3 ? (
                  <span>
                    <Icon icon={starFilled} />
                    <Icon icon={starFilled} />
                    <Icon icon={starFilled} />
                    <Icon icon={starIcon} />
                    <Icon icon={starIcon} />
                  </span>
                ) : details.rating >= 2 ? (
                  <span>
                    <Icon icon={starFilled} />
                    <Icon icon={starFilled} />
                    <Icon icon={starIcon} />
                    <Icon icon={starIcon} />
                    <Icon icon={starIcon} />
                  </span>
                ) : (
                  <span>
                    <Icon icon={starFilled} />
                    <Icon icon={starIcon} />
                    <Icon icon={starIcon} />
                    <Icon icon={starIcon} />
                    <Icon icon={starIcon} />
                  </span>
                )}
                <span>{details.rating}/5 </span>
              </span>
              <span> {ratings} ratings </span> & <span>{reviews} reviews</span>{" "}
              <span>Q&As</span>
            </div>
            <div>
              <span>
                MRP:
                <span style={{ textDecoration: "line-through" }}>
                  ₹{details.mrp}
                </span>
              </span>
              <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                ₹{details.price}
              </span>{" "}
              <span>{discount}% Off</span>
            </div>
            <div>inclusive of all taxes</div>
            <div className="flex pinDiv">
              <div id="AddToBag">
                <button onClick={addToBag}>Add to Bag</button>
              </div>
              <div id=
                "pin">
                {show == "input" ? (
                  <div>
                    <div className="delivery">
                      <Icon icon={locationIcon} className="location" />
                      Delivery Options
                    </div>
                    <div id="input">
                      <input type="number" onChange={handleChange} />
                      <span onClick={searchPin}>Check</span>
                    </div>
                    {!valid ? (
                      <div style={{ color: "red" }}>
                        Please enter valid pincode
                      </div>
                    ) : null}
                  </div>
                ) : show == "fetch" ? (
                  <div>Fetching delivery details...</div>
                ) : show == "city" ? (
                  <div>
                    <span className="delivery">
                      <Icon icon={locationIcon} className="location" />
                      Delivery Options for
                      <span style={{ color: "#fc2779" }}> {pin}</span>
                      <button onClick={() => (setShow("input"), setPin(""))} style={{ color: "#fc2779", border: "1px solid #fc2779", backgroundColor: "white", marginLeft: "10px", height: "25px" }}>Change</button>
                    </span>
                    <div>
                      Shipping to: {data.Block},{data.Country}
                    </div>
                    <div>
                      <Icon icon={tickIcon} style={{ color: "green" }} />
                      Delivered by {day}
                      {month}
                    </div>
                    <div>
                      <Icon icon={tickIcon} style={{ color: "green" }} />
                      Cash on Delivery available on orders above ₹499
                    </div>
                    <div>
                      <Icon icon={infoCircleOutlined} />
                      More info
                    </div>
                  </div>
                ) : (
                  <div>
                    <span className="delivery">
                      <Icon icon={locationIcon} className="location" />
                      Delivery Options for
                      <span style={{ color: "#fc2779" }}> {pin}</span>
                      <button onClick={() => (setShow("input"), setPin(""))} style={{ color: "#fc2779", border: "1px solid #fc2779", backgroundColor: "white", marginLeft: "10px", height: "25px" }}>Change</button>
                    </span>
                    <div>
                      <Icon icon={crossMark} style={{ color: "red" }} />
                      Information not found for entered pincode.
                    </div>
                    <div>
                      <Icon icon={infoCircleOutlined} />
                      More info
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div id="genuine">
            <img src="https://i.imgur.com/QwzVWFt.png" alt="" />
            <img src="https://i.imgur.com/GlgXkzr.png" alt="" />
            <img src="https://i.imgur.com/Zhy0dBc.png" alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
