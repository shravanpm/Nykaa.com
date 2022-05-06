import { 	ChevronDownIcon } from '@heroicons/react/solid';
import { Disclosure } from '@headlessui/react'
import { useState } from 'react';
import "../stylesheets/Sidebar.css"

export const Sidebar = (props) => {

let arr = ["Brand","Price","Discount","Avg Customer Rating","Preferance","Concern","Skin Type","Formulation",
"Gender","Finish","Color","Skin Tone","Conscious","Pack Size","Coverage"];

let Sort = ["Popularity", "Discount" , "Name", "Customer Top Rated", "New Arrivals",
 "Price : High to Low", "Price : Low to High"]
const [sort,setSort] = useState("Popularity");
const handleSort = (d,sortParam,asc) =>{
    // console.log(props.data);
    let data = props.data.data;
    // console.log("before",data); 
    data = data.sort((a,b)=>{return (asc === true ? a[[sortParam]]-b[[sortParam]] : b[[sortParam]]- a[[sortParam]])});
    
    const setDataSideBar = props.data.setDataSideBar;
    
    
    setDataSideBar(data)
    setSort(d);
}

    return (
        <div className ="sidebarDiv" >
                
            <Disclosure>

                <Disclosure.Button className="disclButton">
                <div className='disclButtonDiv'>
                    <div style={{paddingTop : "5px",
                width:"500px"}} >
                    <b>Sort By : {sort}  </b>  
                    </div>           
                <div > 
                    <ChevronDownIcon className='icon'/>
                </div></div>

                    < Disclosure.Panel>

                            <div className='disclPanel'
                        onClick = {() => {handleSort("Popularity","id",true)}}>
                                
                                Popularity
                            </div>
                    </Disclosure.Panel>

                    < Disclosure.Panel>

                            <div className='disclPanel' onClick={()=>{handleSort("Discount","off",false)}}>
                                Discount
                            </div>
                    </Disclosure.Panel>


                    < Disclosure.Panel>

                            <div className='disclPanel' onClick={()=>{handleSort("Name","name",true)}}>
                                Name
                            </div>
                    </Disclosure.Panel>


                    < Disclosure.Panel>

                            <div className='disclPanel' onClick={()=>{handleSort("Customer Top Rated","rating",false)}}>
                                Customer Top Rated
                            </div>
                    </Disclosure.Panel>

                    < Disclosure.Panel>

                            <div className='disclPanel' onClick={()=>{handleSort("New Arrivals","_id",false)}}>
                                New Arrivals
                            </div>
                    </Disclosure.Panel>

                    < Disclosure.Panel>

                            <div className='disclPanel' onClick={()=>{handleSort("Price : High to Low","price",false)}}>
                                Price : High to Low
                            </div>
                    </Disclosure.Panel>


                    < Disclosure.Panel>

                            <div className='disclPanel' onClick={()=>{handleSort("Price : Low to High","price",true)}}>
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