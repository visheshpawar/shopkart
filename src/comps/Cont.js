import React, { Component } from "react";
import Item from "./Item";
import Banner from "./Banner";
import Categor from "./Categor";
import Slder from "./Slder";

import Info from "./Info";



export default function Cont(props) {
  const defe = (word) =>
  {
   let da = word;
    
    props.stp(da)
  }
  




  return (
    <>
    <div id="cont">
    
     <Banner />
      <div className="hdr">Categories</div>
      <Categor />
      <Slder />
      <div className="hdr" >Bestsellers</div>



      <div className="main">
        
        <ul className="cards">
          <Item
            price="3999"
            title="Adidas Trailmark Jeans"
            iurl="https://assets.ajio.com/medias/sys_master/root/20220429/P9RU/626bf0dbaeb26921af4b904a/-473Wx593H-441142419-black-MODEL.jpg"
            cw={defe}         />
          <Item
            price="2499"
            title="Mufti Checks Shirt"
            iurl="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F0a%2F0b%2F0a0badc54e57b7b408e22fcd924ee25c0ecc428b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]"
            cw={defe}         />
          <Item
            price="1899"
            title="Bata Formal Shoes"
            iurl="https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/c/3/e/-original-imaghvba9wjbzrwe.jpeg?q=90&crop=false"
            cw={defe}         />
          <Item
            price="6999"
            title="Zara Womens Top Black"
            iurl="https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/8935419/2019/3/25/0d30de90-cd9e-4c41-b2c9-dbe986997d3a1553506736644-Miss-Chase-Women-Black-Self-Design-Top-3901553506734501-1.jpg"
            cw={defe}           />
          <Item
            price="53999"
            title="Gucci Leather Purse"
            iurl="https://imgs7.luluandsky.com/catalog/product/8/9/8907884363547_1.jpg"
            cw={defe}             />
          <Item
            price="2999"
            title="Zudio Girls Dress"
            iurl="https://www.jiomart.com/images/product/original/rvxvms3udk/whaou-girls-dress-kids-dress-kids-frock-girls-frock-black-colour-3-years-to-14-years-party-wear-cotton-modern-dress-sleeveless-product-images-rvxvms3udk-1-202310132323.jpg?im=Resize=(500,630)"
            cw={defe}              />
          <Item
            price="999"
            title="Foxx Leather Wallet"
            iurl="https://www.jiomart.com/images/product/original/rvhfkknrvc/coyotx-rfid-wallet-for-men-genuine-leather-wallet-for-men-wallets-for-men-purse-for-men-card-holder-for-men-money-purse-for-men-wallet-for-men-leather-tri-fold-wallet-black-product-images-rvhfkknrvc-0-202212081454.jpg?im=Resize=(500,630)"
            cw={defe}            />
          <Item
            price="103999"
            title="Giogiani Party Dress"
            iurl="https://i.pinimg.com/736x/f9/c4/d7/f9c4d7150137e426d90dae8aa48b78e0.jpg"
            cw={defe}              />
          <Item
            price="13999"
            title="Lacoste black shirt"
            iurl="https://frenchcrown.in/cdn/shop/products/8524-WCC_6.jpg?v=1690802850&width=3600"
            cw={defe}              />

<Item
              price="2499"
              title="Fila white shoes"
              iurl="https://assets.ajio.com/medias/sys_master/root/20220927/Q6jB/63333229aeb269dbb3ab05cb/-473Wx593H-469163724-white-MODEL.jpg"
              cw={defe}            />
            <Item
              price="93,999"
              title="Nike air jordans"
              iurl="https://cdn-images.farfetch-contents.com/13/15/75/38/13157538_14718351_600.jpg"
              cw={defe}            />
            <Item
              price="23499"
              title="Adidas sneakers black "
              iurl="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/11353564/2020/2/28/82d5feea-32d6-49b8-aa6f-89e23322fd0e1582866766254-ADIDAS-Originals-Men-Casual-Shoes-4131582866765309-1.jpg"
              cw={defe}           />
            <Item
              price="899"
              title="Campus running Shoes"
              iurl="https://www.campusshoes.com/cdn/shop/files/FIRST-11G-787-L.GRY-BLK_2.jpg?v=1705644698"
              cw={defe}            />

            <Item
              price="3999"
              title="Blackberry brown formal shoes"
              iurl="https://img0.junaroad.com/uiproducts/19926317/zoom_0-1685550778.jpg"
              cw={defe}            />
           
        <Item
          price="3999"
          title="levi's Jeans"
          iurl="https://www.tistabene.com/cdn/shop/products/MJS-0018A.jpg?v=1694077964"
          cw={defe}          />
        <Item
          price="2499"
          title="Summercool Shirt"
          iurl="https://m.media-amazon.com/images/I/81ZUL5rCfmL._AC_UY1100_.jpg"
          cw={defe}            />
    
    <Item
              price="9999"
              title="Miya party dress"
              iurl="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/productimage/2019/12/3/d696c0aa-1607-453d-88a3-549edf0ccb2c1575325176261-1.jpg"
              cw={defe}            />
         
           

            <Item
              price="30999"
              title="Arido floral green dress"
              iurl="https://image.made-in-china.com/44f3j00AVIqilyrMmcH/Customize-Summer-Casual-Chiffon-Women-Dress-Plus-Size-Ladies-Dress.webp"
              cw={defe}            />
           


        </ul>
      </div>
    </div>
    
</>
  )
}
