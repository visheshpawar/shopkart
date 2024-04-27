import React from "react";
import "../style.css";
import {  useEffect } from 'react';

var carr=[];

var t = 0;

export default function Details(props) {
  useEffect(() => {
    for(var i=0; i < carr.length; i++)
    {
      if (props.name === carr[i])
      {
        document.getElementById('gg').innerText="Remove from cart";
        t=1;
        break;
  
      }
   
     
      document.getElementById('gg').innerText="Add to cart";
      t=0;
    }
  
    
 
  });


const jj = () => {
 if (t===0)
 {
  document.getElementById('gg').innerText="Remove from cart";
  carr.push(props.name)
  t=1;
 }
 else if (t===1){

  


const index = carr.indexOf(props.name);

const z = carr.splice(index, 1);
carr = z;
document.getElementById('gg').innerText="Add to cart";

t=0;

 }
 
}





  return (

 

    <>
   
    <div className="container" >
       <div className="box">
           <div className="images">
               <div className="img-holder active">
                   <img src={props.lk} alt="er"/>
               </div>
             
           </div>
           <div className="basic-info">
               <h1 className="gh-1">{props.name}</h1>
               <div className="rate">
                   <i className="filled fas fa-star"></i>
                   <i className="filled fas fa-star"></i>
                   <i className="filled fas fa-star"></i>
                   <i className="filled fas fa-star"></i>
                   <i className="filled fas fa-star"></i>
               </div>
               <span className="gh-2">₹{props.price}</span>
               <div className="options">
                  
                   <button id="gg"  onClick={jj}>Add to Cart</button>
                  
               </div>
           </div>
           <div className="description">
               <p>A very good product which is made of very nice materials and is of the highest quality available. good product which is made of very nice materials and is of the highest quality available
               A very good product which is made of very nice materials and is of the highest quality available
               A very good product which is made of very nice materials and is of the highest quality available
               A very good product which is made of very nice materials and is of the highest quality.
               </p>
             
               <ul className="social">
                   <li><a href="/"><i className="fa-brands fa-facebook-f"></i></a></li>
                   <li><a href="/"><i className="fa-brands fa-instagram"></i></a></li>
                   <li><a href="/"><i className="fa-brands fa-twitter"></i></a></li>
               </ul>
           </div>
       </div>
   </div>
     </>
  )
}

