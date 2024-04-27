import Item from "./Item";
import { useNavigate } from "react-router-dom";
import React, { Component, useState } from "react";
import "../App.css";
import { get } from "react-hook-form";

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
        <Item 
          price="3999"
          title="Adidas Trailmark Jeans"
          iurl="https://assets.ajio.com/medias/sys_master/root/20220429/P9RU/626bf0dbaeb26921af4b904a/-473Wx593H-441142419-black-MODEL.jpg"
          
          cw={defe}    />
        <Item
          price="2499"
          title="Mufti Checks Shirt"
          iurl="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F0a%2F0b%2F0a0badc54e57b7b408e22fcd924ee25c0ecc428b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]"
          cw={defe}   />
        <Item
          price="1899"
          title="Bata Formal Shoes"
          iurl="https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/c/3/e/-original-imaghvba9wjbzrwe.jpeg?q=90&crop=false"
          cw={defe}    />

        <Item
          price="3999"
          title="levi's Jeans"
          iurl="https://www.tistabene.com/cdn/shop/products/MJS-0018A.jpg?v=1694077964"
          cw={defe}  />
        <Item
          price="2499"
          title="Summercool Shirt"
          iurl="https://m.media-amazon.com/images/I/81ZUL5rCfmL._AC_UY1100_.jpg"
          cw={defe}   />
    
      
        <Item
          price="1299"
          title="Fila white Shoes"
          iurl="https://assets.ajio.com/medias/sys_master/root/20220927/Q6jB/63333229aeb269dbb3ab05cb/-473Wx593H-469163724-white-MODEL.jpg"
          cw={defe}  />
      </ul>
    </div>
 

   
  </>
  )
}




