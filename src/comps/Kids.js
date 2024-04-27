import Item from "./Item";

import React, { Component } from "react";
import "../App.css";


export default function Kids(props) {
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
             
              price="3299"
              title="Boys dress combo"
              iurl="https://m.media-amazon.com/images/I/81wDadCpnfL.jpg"
        
              cw={defe}      />
            <Item
              price="2499"
              title="Yellow frock"
              iurl="https://images.meesho.com/images/products/209435695/56avp_512.jpg"
       
              cw={defe}       />
            <Item
              price="1899"
              title="Grils lehenga"
              iurl="https://rukminim2.flixcart.com/image/550/650/xif0q/kids-lehenga-choli/i/9/f/5-6-years-5298-satyamfab-original-imagtq6bbyjymt6y.jpeg?q=90&crop=true"
       
              cw={defe}       />

            <Item
              price="13999"
              title="Blue boys 2 peice"
              iurl="https://n3.sdlcdn.com/imgs/k/i/b/480X640_sharpened_2fg1/Fourfolds-Pink-Cotton-Blend-Boy-SDL722134233-1-d8e7d.webp"
         
              cw={defe}     />
            <Item
              price="6499"
              title="Mufti boys Shirt"
              iurl="https://img.tatacliq.com/images/i16//437Wx649H/MP000000021486051_437Wx649H_202403231227031.jpeg"
         
              cw={defe}     />
            <Item
              price="899"
              title="Combo set wear for boys"
              iurl="https://rukminim2.flixcart.com/image/450/500/xif0q/kids-apparel-combo/z/u/4/1-2-years-fc8530-navy-1-2-years-fastcolors-original-imagq2sksyyqg4kv.jpeg?q=90&crop=false"
        
              cw={defe}      />

       
          </ul>
        </div>
     


      </>
  )
}





  


      


    