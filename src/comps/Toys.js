import Item from "./Item";

import React, { Component } from "react";
import "../App.css";
import lit from "./alit.json";


export default function Toys(props) {
  const defe = (word) =>
{
 let da = word;
  
  props.stp(da)
}

  return (
    <>

    <div className="main" >
      <ul className="cards">
            
      {lit.filter((item) => item.gender =="male").map(item => (     
  <Item key={item.id} title={item.title} iurl={item.iurl} price={item.price}  cw={defe}/> 
     ))}

      </ul>
    </div>
 


  </>
  )
}



  