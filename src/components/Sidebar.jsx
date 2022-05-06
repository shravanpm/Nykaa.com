import { 	ChevronDownIcon } from '@heroicons/react/solid';
import { Disclosure } from '@headlessui/react'
import { useState } from 'react';

export const Sidebar = () => {

let arr = ["Brand","Price","Discount","Avg Customer Rating","Preferance","Concern","Skin Type","Formulation",
"Gender","Finish","Color","Skin Tone","Conscious","Pack Size","Coverage"];

let Sort = ["Popularity", "Discount" , "Name", "Customer Top Rated", "New Arrivals",
 "Price : High to Low", "Price : Low to High"]
const [sort,setSort] = useState("Popularity")
    return (
        <div style={{
            // width : "20%",
            textAlign:"left",
            display : "flex",
            flexDirection : "column",
            border : "10px",
            marginRight : "-15px"
        }}>
                
            <Disclosure>

                <Disclosure.Button style={{
                    border : "none",
                    cursor : "pointer",
                    
                    backgroundColor : "white",
                    margin : "5px",
                    // height : "50px",
                    padding : "0px"

                }}>
                <div style={{
                    backgroundColor:"white",
                    margin : "10px",
                    padding : "5px",
                    // paddingTop:"-10px",
                    fontSize : "14px",
                    display:"flex",
                    textAlign:"left",
                    
                }}>
                    <div style={{paddingTop : "5px",
                width:"500px"}} >
                    <b>Sort By : {sort}  </b>  
                    </div>           
                <div > 
                    <ChevronDownIcon style={{
                    height : "25px",
                    width : "25px",
                    paddingTop: "0px"
                }}/>
                </div></div>

                    < Disclosure.Panel>

                            <div style={{fontSize : "15px",
                        textAlign : "left",
                        padding : "5px",
                        fontSize : "12px",
                        marginLeft : "10px",
                        marginBottom : "10px",
                        color : "#003125"}} 
                        onClick = {() => {setSort("Popularity")}}>
                                Popularity
                            </div>
                    </Disclosure.Panel>

                    < Disclosure.Panel>

                            <div style={{fontSize : "15px",
                            textAlign : "left",
                            padding : "5px",
                            fontSize : "12px",
                            marginLeft : "10px",
                            marginBottom : "10px"}} onClick={()=>{setSort("Discount")}}>
                                Discount
                            </div>
                    </Disclosure.Panel>


                    < Disclosure.Panel>

                            <div style={{fontSize : "15px",
                            textAlign : "left",
                            padding : "5px",
                            fontSize : "12px",
                            marginLeft : "10px",
                            color : "#003125",
                            marginBottom : "10px"}} onClick={()=>{setSort("Name")}}>
                                Name
                            </div>
                    </Disclosure.Panel>


                    < Disclosure.Panel>

                            <div style={{fontSize : "15px",
                            textAlign : "left",
                            padding : "5px",
                            fontSize : "12px",
                            marginLeft : "10px",
                            color : "#003125",
                            marginBottom : "10px"}} onClick={()=>{setSort("Customer Top Rated")}}>
                                Customer Top Rated
                            </div>
                    </Disclosure.Panel>

                    < Disclosure.Panel>

                            <div style={{fontSize : "15px",
                            textAlign : "left",
                            padding : "5px",
                            fontSize : "12px",
                            marginLeft : "10px",
                            color : "#003125",
                            marginBottom : "10px"}} onClick={()=>{setSort("New Arrivals")}}>
                                New Arrivals
                            </div>
                    </Disclosure.Panel>

                    < Disclosure.Panel>

                            <div style={{fontSize : "15px",
                            textAlign : "left",
                            padding : "5px",
                            fontSize : "12px",
                            marginLeft : "10px",
                            color : "#003125",
                            marginBottom : "10px"}} onClick={()=>{setSort("Price : High to Low")}}>
                                Price : High to Low
                            </div>
                    </Disclosure.Panel>


                    < Disclosure.Panel>

                            <div style={{fontSize : "15px",
                            textAlign : "left",
                            padding : "5px",
                            fontSize : "12px",
                            marginLeft : "10px",
                            color : "#003125",
                            marginBottom : "10px"}} onClick={()=>{setSort("Price : Low to High")}}>
                                Price : Low to High
                            </div>
                    </Disclosure.Panel>


                                                          
                </Disclosure.Button>
            
            </Disclosure>





        {arr.map( (el,index) => (
            <Disclosure key={el}>

                <Disclosure.Button style={{
                    border : "none",
                    cursor : "pointer",
                    
                    backgroundColor : "white",
                    margin : "5px",
                    // height : "50px",
                    padding : "0px",
                    marginBottom:"0px"

                    }}>
                            
                            <div style={{
                    backgroundColor:"white",
                    margin : "10px",
                    padding : "5px",
                    // paddingTop:"-10px",
                    fontSize : "14px",
                    display:"flex",
                    textAlign:"left"
                    
                }}>
                    <div style={{paddingTop : "5px",
                width:"500px"}}>
                    <b>{el}</b> 
                    </div>           
                <div > 
                    <ChevronDownIcon style={{
                    height : "25px",
                    width : "25px",
                    paddingTop: "0px"
                }}/>
                </div></div>
                </Disclosure.Button>

            </Disclosure>    
        ))  }  

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