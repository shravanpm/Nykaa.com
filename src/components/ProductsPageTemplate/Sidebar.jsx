import { ChevronDownIcon } from '@heroicons/react/solid';
import { Disclosure } from '@headlessui/react'
import { useState } from 'react';
import "../../stylesheets/Sidebar.css";
import { Slider } from "@mui/material"

export const Sidebar = (props) => {

    let arr = ["Discount", "Avg Customer Rating", "Preferance", "Concern", "Skin Type", "Formulation",
        "Gender", "Finish", "Color", "Skin Tone", "Conscious", "Pack Size", "Coverage"];


    const [sort, setSort] = useState("Popularity");
    const handleSort = (d, sortParam, asc) => {
        // console.log(props.data);
        let data = props.data.data;
        // console.log("before",data); 
        data = data.sort((a, b) => { return (asc === true ? a[[sortParam]] - b[[sortParam]] : b[[sortParam]] - a[[sortParam]]) });

        const setDataSideBar = props.data.setDataSideBar;


        setDataSideBar(data)
        setSort(d);
    }

    const handleSortPrice = (price) => {
        // console.log(props.data);
        let data = props.data.data;
        // console.log("before",data); 
        if (price === 250) {
            data = data.filter((el) => { return el.price <= 250 });
        }
        if (price === 251) {
            data = data.filter((el) => { return el.price > 250 });
            data = data.filter((el) => { return el.price <= 500 });
        }
        if (price === 500) {

            data = data.filter((el) => { return el.price > 500 });
        }

        const setDataSideBar = props.data.setDataSideBar;


        setDataSideBar(data)

    }

    return (
        <div className="sidebarDiv" >

            <Disclosure>

                <Disclosure.Button className="disclButton">
                    <div className='disclButtonDiv'>
                        <div style={{
                            paddingTop: "5px",
                            width: "500px"
                        }} >
                            <b>Sort By : {sort}  </b>
                        </div>
                        <div >
                            <ChevronDownIcon className='icon' />
                        </div></div>

                    < Disclosure.Panel>

                        <div className='disclPanel'
                            onClick={() => { handleSort("Popularity", "id", true) }}>

                            Popularity
                        </div>
                    </Disclosure.Panel>

                    < Disclosure.Panel>

                        <div className='disclPanel' onClick={() => { handleSort("Discount", "off", false) }}>
                            Discount
                        </div>
                    </Disclosure.Panel>


                    < Disclosure.Panel>

                        <div className='disclPanel' onClick={() => { handleSort("Name", "name", true) }}>
                            Name
                        </div>
                    </Disclosure.Panel>


                    < Disclosure.Panel>

                        <div className='disclPanel' onClick={() => { handleSort("Customer Top Rated", "rating", false) }}>
                            Customer Top Rated
                        </div>
                    </Disclosure.Panel>

                    < Disclosure.Panel>

                        <div className='disclPanel' onClick={() => { handleSort("New Arrivals", "_id", false) }}>
                            New Arrivals
                        </div>
                    </Disclosure.Panel>

                    < Disclosure.Panel>

                        <div className='disclPanel' onClick={() => { handleSort("Price : High to Low", "price", false) }}>
                            Price : High to Low
                        </div>
                    </Disclosure.Panel>


                    < Disclosure.Panel>

                        <div className='disclPanel' onClick={() => { handleSort("Price : Low to High", "price", true) }}>
                            Price : Low to High
                        </div>
                    </Disclosure.Panel>



                </Disclosure.Button>

            </Disclosure>





            <Disclosure key="brand">

                <Disclosure.Button className='disclButton2 '>

                    <div className='disclButtonDiv '>
                        <div style={{
                            paddingTop: "5px",
                            width: "500px"
                        }}>
                            <b>Brand</b>
                        </div>
                        <div >
                            <ChevronDownIcon className='icon' />
                        </div></div>

                    < Disclosure.Panel>

                        <div className='disclPanel'>

                            Lakme
                        </div>
                    </Disclosure.Panel>

                    < Disclosure.Panel>

                        <div className='disclPanel'>

                            Nykaa
                        </div>
                    </Disclosure.Panel>


                    < Disclosure.Panel>

                        <div className='disclPanel'>

                            MaybeLine
                        </div>
                    </Disclosure.Panel>


                </Disclosure.Button>

            </Disclosure>


            <Disclosure key="price">

                <Disclosure.Button className='disclButton2 '>

                    <div className='disclButtonDiv '>
                        <div style={{
                            paddingTop: "5px",
                            width: "500px"
                        }}>
                            <b>Price</b>
                        </div>
                        <div >
                            <ChevronDownIcon className='icon' />
                        </div></div>

                    < Disclosure.Panel>

                        <div className='disclPanel' onClick={() => { handleSortPrice(250) }}>

                            Price Less than 250
                        </div>
                    </Disclosure.Panel>

                    < Disclosure.Panel>

                        <div className='disclPanel' onClick={() => { handleSortPrice(251) }}>
                            Price 250 - 500

                        </div>
                    </Disclosure.Panel>


                    < Disclosure.Panel>

                        <div className='disclPanel' onClick={() => { handleSortPrice(500) }}>

                            Price More than 500
                        </div>
                    </Disclosure.Panel>


                </Disclosure.Button>

            </Disclosure>

            {arr.map((el, index) => (
                <Disclosure key={el}>

                    <Disclosure.Button className='disclButton2 '>

                        <div className='disclButtonDiv '>
                            <div style={{
                                paddingTop: "5px",
                                width: "500px"
                            }}>
                                <b>{el}</b>
                            </div>
                            <div >
                                <ChevronDownIcon className='icon' />
                            </div></div>

                        <Disclosure.Panel>

                        </Disclosure.Panel>
                    </Disclosure.Button>

                </Disclosure>
            ))}

        </div>
    )
}


/*
<div style={{
                    backgroundColor:"white",
                    margin : "10px",
                    padding : "5px",
                    // paddingTop:"-10px",
                    fontSize : "20px",
                    display:"flex",
                    
                }}>
                    <div style={{paddingTop : "5px",
                width:"500px"}}>
                    Sort By : Popularity    
                    </div>           
                <div > 
                    <ChevronDownIcon style={{
                    height : "35px",
                    width : "35px",
                    paddingTop: "0px"
                }}/>
                </div></div>

*/

/*
style={{
            // width : "20%",
            textAlign:"left",
            display : "flex",
            flexDirection : "column",
            border : "10px",
            marginRight : "-15px"
        }} 
*/