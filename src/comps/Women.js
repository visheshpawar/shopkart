import Item from "./Item";

import React, { Component } from "react";
import "../App.css";



export default function Women(props) {
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
          price="9999"
          title="Miya party dress"
          iurl="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/productimage/2019/12/3/d696c0aa-1607-453d-88a3-549edf0ccb2c1575325176261-1.jpg"
          cw={defe}          />
        <Item
          price="12499"
          title="Ziva blue dress"
          iurl="https://lh3.googleusercontent.com/gTxGA0DHo8rhRhkClEjXWr2v0aCO6DScUDUoQgxgfZSGlKakAWCrmByfX73A2BvFJW5wneTxT0vsQY_zaoTox2hKx0E=w1200-rw"
          cw={defe}           />
        <Item
          price="15899"
          title="zeesha grey dress"
          iurl="https://i.pinimg.com/564x/ea/e8/a9/eae8a9c67979545e585c04a3c3fb2965.jpg"
          cw={defe}        />

        <Item
          price="30999"
          title="Arido floral green dress"
          iurl="https://image.made-in-china.com/44f3j00AVIqilyrMmcH/Customize-Summer-Casual-Chiffon-Women-Dress-Plus-Size-Ladies-Dress.webp"
          cw={defe}        />
        <Item
          price="22499"
          title="Zima full top"
          iurl="https://rukminim2.flixcart.com/image/850/1000/xif0q/dress/w/u/m/xxl-g-189-dress-ladies-dress-women-dresses-western-dress-dresses-original-imagabbyngq6rj5p-bb.jpeg?q=20&crop=false"
          cw={defe}        />
        <Item
          price="1899"
          title="Zaiora red kurta"
          iurl="https://gunjfashion.com/cdn/shop/products/Red-Color-Art-Silk-Embroidered-Party-Wear-Ladies-Dress.jpg?v=1660804528"
          cw={defe}        />

       
      </ul>
    </div>
 


  </>
  )
}




