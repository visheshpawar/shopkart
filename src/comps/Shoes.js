import Item from "./Item";

import React, { Component } from "react";
import "../App.css";



export default function Shoes(props) {
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
          price="1899"
          title="Bata Formal Shoes"
          iurl="https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/c/3/e/-original-imaghvba9wjbzrwe.jpeg?q=90&crop=false"
          cw={defe}        />
<Item
          price="2499"
          title="Fila white shoes"
          iurl="https://assets.ajio.com/medias/sys_master/root/20220927/Q6jB/63333229aeb269dbb3ab05cb/-473Wx593H-469163724-white-MODEL.jpg"
          cw={defe}          />
        <Item
          price="93999"
          title="Nike air jordans"
          iurl="https://cdn-images.farfetch-contents.com/13/15/75/38/13157538_14718351_600.jpg"
          cw={defe}         />
        <Item
          price="23499"
          title="Adidas sneakers black "
          iurl="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/11353564/2020/2/28/82d5feea-32d6-49b8-aa6f-89e23322fd0e1582866766254-ADIDAS-Originals-Men-Casual-Shoes-4131582866765309-1.jpg"
          cw={defe}         />
        <Item
          price="899"
          title="Campus running Shoes"
          iurl="https://www.campusshoes.com/cdn/shop/files/FIRST-11G-787-L.GRY-BLK_2.jpg?v=1705644698"
          cw={defe}         />

        <Item
          price="3999"
          title="Blackberry brown formal shoes"
          iurl="https://img0.junaroad.com/uiproducts/19926317/zoom_0-1685550778.jpg"
          cw={defe}       />
       
      </ul>
    </div>
 


  </>
  )
}


