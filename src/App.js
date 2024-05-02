import "./App.css";
import Cont from "./comps/Cont";
import Navbar from "./comps/Navbar";
import React, { Component, useEffect, useState } from "react";
import Details from "./comps/Details";
import Men from "./comps/Men";
import Women from "./comps/Women";
import Purse from "./comps/Purse";
import Toys from "./comps/Toys";
import Kids from "./comps/Kids";
import Shoes from "./comps/Shoes";
import St from "./comps/St";
import{
  HashRouter as Router,
  Link,
  Routes,
  Route,
  useParams,
  useLocation
} from "react-router-dom";
import Cart from "./comps/Cart";
import Item from "./comps/Item";

var fg = "";
var fgg="";
var xf = 0;
var cemi = "cart";
var hml = "price";
var vg = [];
export default function App() {

  const [prc, setprc] = useState(0);

  const [dp, setdp] = useState(0)
  const [dop, setdop] = useState()

const Pp = (val) =>
{
let x = (val[2])
setprc(prc+x)
fg = val[0]
fgg= val[1]
xf=val[2]
}

const dai = (data) =>
{




let f1=dp;
let f2 = Number(data[1])

 
   setdp(f1+f2);
   
 

  vg.push(data);

}

  const daim = (dat) =>{

setdop(dat)


  }
  

  return (
    <>

    <Router>
       <St/>
       <Navbar title="ShopKart"/>       
       <Routes>
       <Route  default element = {<Cont stp={Pp} />} />
       <Route exact path="/" element = {<Cont stp={Pp} />} />
       <Route exact path="/mens" element = {<Men  stp={Pp} />} />
       <Route exact path="/women" element = {<Women stp={Pp} />} />
       <Route exact path="/kids" element = {<Kids stp={Pp}/>} />
       <Route exact path="/toys" element = {<Toys stp={Pp}/>} />
       <Route exact path="/purse" element = {<Purse stp={Pp}/>} />
       <Route exact path="/shoes" element = {<Shoes stp={Pp}/>} />
       <Route exact path="/details" element = {<Details kg={dai} kig={daim} price = {xf}  name = {fg} lk={fgg} />} />
       <Route exact path="/cart" element = {<Cart detao = {vg} demp={dop} price={dp} />} />
    </Routes> 
    </Router>

    </>
  )
}
