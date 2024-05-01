import React from "react";
import Item from "./Item";
import Banner from "./Banner";
import Categor from "./Categor";
import Slder from "./Slder";
import lit from "./alit.json";
import { useState } from "react";



export default function Cont(props) {
  const defe = (word) =>
  {
   let da = word;
    
    props.stp(da)
  }
  

const [sdf, setsdf] = useState(1);

  return (
    <>
    <div id="cont">
    
     <Banner />
      <div className="hdr">Categories</div>
      <Categor />
      <Slder />
      <div className="hdr" >Bestsellers</div>



      <div className="main">
        
        <ul className="cards">
      

{lit.filter((item) => item.gender =="male" || "female").map(item => (     
  <Item key={item.id} title={item.title} iurl={item.iurl} price={item.price}  cw={defe}/> 
     ))}



        </ul>
      </div>
    </div>
    
</>
  )
}
