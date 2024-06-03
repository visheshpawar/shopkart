import Item from "./Item";
import { useNavigate } from "react-router-dom";
import React, { Component, useState } from "react";
import "../App.css";
import { get } from "react-hook-form";
import lit from "./alit.json";
export default function Men(props) {

 
  

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
  <Item key={item.id} title={item.title} iurl={item.iurl}  price={item.price}  cw={defe}/> 
     ))}




      </ul>
    </div>
 

   
  </>
  )
}




