import React from "react";
import "../style.css";
import {  useEffect ,useState} from 'react';
import fs from './fs.png';
import cod from './cod.png';
import ret from './ret.png';
import qd from './qd.png';
var carr=[];

var t = 0;
let x = "name";
let y = "price";
let z = "lik";
export default function Details(props) {
  const [name, setname] = useState()
  const [price, setprice] = useState()
  const [lik, setlik] = useState()
  const [ca ,setca] = useState("Add to cart")
  useEffect(() => {


  
    let fm = (localStorage.getItem(x));
    setname(fm)
    let fmm = (localStorage.getItem(y));
    setprice(fmm)
    let fmmmm = (localStorage.getItem(z));
    setlik(fmmmm)

   
    for(var i=0; i < carr.length; i++)
    {
      if (props.name === carr[i])
      {
        setca("Remove from cart")
     
        break;
  
      }
    
      setca("Add to cart")
      t=0;
    }
  
    
 
  }, [props.name]);


const jj = () => {
 if (t===0)
 {
  setca("Remove from cart")
  carr.push(props.name)
  localStorage.setItem(props.name, ca)
  t=1;
 }
 else if (t===1){

  


const index = carr.indexOf(props.name);

const z = carr.splice(index, 1);
carr = z;
setca("Add to cart")

t=0;

 }
 
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
               <span className="gh-2">₹{price}</span>
            
           </div>
           <div className="description">
         
               <p>
              
                A very good product which is made of very nice materials and is of the highest quality available. good product which is made of very nice materials and is of the highest quality available
               A very good product which is made of very nice materials and is of the highest quality available
               A very good product which is made of very nice materials and is of the highest quality available
               A very good product which is made of very nice materials and is of the highest quality.
            
               </p>
               <div className="options">
               <div className="cub">
          <div className="ido">
     <div className="ouch">  <img className="d-io1" src={fs}/></div>
    <div className="ouch">   <img className="d-io1" src={cod}/></div>
       </div>
       <div className="ido">
     <div className="ouch">  <img className="d-io" src={ret}/></div>
     <div className="ouch">  <img className="d-io1" src={qd}/></div>
       </div>
       </div>
                  <button id="gg"  onClick={jj}>{ca}</button>
            
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