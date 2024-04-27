import Item from "./Item";

import React, { Component } from "react";
import "../App.css";



export default function Purse(props) {
  const defe = (word) =>
{
 let da = word;
  
  props.stp(da)
}
  return (
    <>


    <div className="main" >
      <ul className="cards">
        <Item
          price="13999"
          title="Pink studded purse"
          iurl="https://www.needledust.com/cdn/shop/files/DSC0107_800x.jpg?v=1698000593"
          cw={defe}       />
        <Item
          price="2499"
          title="3 Piece purse set"
          iurl="https://m.theblockart.com/ImageStorage/BA2017112022010530695053.jpeg"
          cw={defe}         />
        <Item
          price="911,99"
          title="LV luxury purse"
          iurl="https://5.imimg.com/data5/ANDROID/Default/2022/5/SJ/YN/RD/32952872/product-jpeg-500x500.jpg"
          cw={defe}         />

        <Item
          price="133333"
          title="Gucci brand purse"
          iurl="https://5.imimg.com/data5/ANDROID/Default/2022/11/KC/FX/NR/33576657/product-jpeg-500x500.jpg"
          cw={defe}       />
        <Item
          price="999999"
          title="Celine purse"
          iurl="https://media.karousell.com/media/photos/products/2022/12/17/bn_celine_design_shoulder_bag__1671239518_ab05d6bb_progressive.jpg"
          cw={defe}        />
        <Item
          price="79899"
          title="pearl studded purse"
          iurl="https://thetopknott.in/wp-content/uploads/2023/03/Beaded-Bag-Pearl-Purse-White-Purse-Small-bag3.webp"
          cw={defe}      />

     
      </ul>
    </div>
 


  </>
  )
}


