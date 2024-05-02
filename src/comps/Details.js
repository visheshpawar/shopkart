import React, { useContext } from "react";
import "../style.css";
import product from "./alit.json"
import {  useEffect ,useState} from 'react';
import { useDispatchCart } from "./Cart1";
import fs from './fs.png';
import cod from './cod.png';
import ret from './ret.png';
import qd from './qd.png';
import Cart from "./Cart";
var carr=[];
var ads=[];
var t = 0;
let x = "name";
let y = "price";
let z = "lik";
let g="id";
export default function Details(props) {
  const [name, setname] = useState()
  const [nae, setnae] = useState(0)
  const [price, setprice] = useState()
  const [lik, setlik] = useState()
  const [ca ,setca] = useState("Add to cart")
  useEffect(() => {


  
    let fm = (localStorage.getItem(x));
    setname(fm)
  
let ip = (localStorage.getItem(g));
setnae(ip)


    let fmm = (localStorage.getItem(y));
    setprice(fmm)
    let fmmmm = (localStorage.getItem(z));
    setlik(fmmmm)


    
 
  }, [props.name]);


const jj = () => {

  
  localStorage.setItem(props.name, ca)
 
props.kg([name, price, lik  ]);
 

 
}


const gg = () =>{



if  (!(ads.includes(nae)))
{
  ads.push(nae)
}



props.kig(ads);
}




  return (

 

    <>
   
    <div className="container" >
       <div className="box">
           <div className="images">
               <div className="img-holder active">
                   <img src={lik} alt="er"/>
               </div>
             
           </div>
           <div className="basic-info">
               <h1 className="gh-1">{name}</h1>
               <div className="rate">
                   <i className="filled fas fa-star"></i>
                   <i className="filled fas fa-star"></i>
                   <i className="filled fas fa-star"></i>
                   <i className="filled fas fa-star"></i>
                   <i className="filled fas fa-star"></i>
               </div>
               <span className="gh-2">₹{price}/-</span>
            
           </div>
           <div className="description">
         
               <p>
              
                A very good product which is made of very nice materials and is of the highest quality available. good product which is made of very nice materials and is of the highest quality available
               A very good product which is made of very nice materials and is of the highest quality available
               A very good product which is made of very nice materials and is of the highest quality available
               A very good product which is made of very nice materials and is of the highest quality.
            {props.price}
               </p>
               <div className="options">
               <div className="cub">
          <div className="ido">
     <div className="ouch">  <img className="d-io1" src={fs}  alt="ikj" / ></div>
    <div className="ouch">   <img className="d-io1" src={cod}  alt="ikj" / ></div>
       </div>
       <div className="ido">
     <div className="ouch">  <img className="d-io" src={ret}  alt="ikj" / ></div>
     <div className="ouch">  <img className="d-io1" src={qd}  alt="ikj" / ></div>
       </div>
       </div>
                  <button id="gg"  onClick={gg}>Add to cart</button>
            



   









              </div>
      
           </div>
    

       </div>




       
   </div>

  

     </>
  )
}

/*   <div className="op-b">
            <button>Variant 1</button>
            <button>Variant 2</button>
            <button>Variant 3</button>
            <button>Variant 4</button>
            </div> */