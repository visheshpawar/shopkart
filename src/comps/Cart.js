import React , {useState, useEffect}from 'react'
import '../App.css'
import product from "./alit.json";
import Carm from './Carm';
export default function Cart(props) {
  const arr=props.demp;
const [cd, setcd] = useState("Your Cart")
const [cdo, setcdo] = useState(0)
  useEffect(() => {

    setcdo(props.price)
   
  }, []);







  const klq = (data) => {
    let mi = cdo-data
    setcdo(mi)
   
  }

const kaka = (data) => {


  
const index = arr.indexOf(data[0]);


  arr.splice(index); 
console.log(arr)
props.lr(data[1])

}

  const for_loop = []

  if (arr){
   
  for (let i=0;i<arr.length;i++) {
   
    for_loop.push(

     
      product.filter((item)=>item.id== arr[i] ).map((item)=>(
        <Carm key={item.id} id= {item.id} title={item.title} iurl={item.iurl}  price={item.price} jb={klq} lij={kaka} />
        
        ))
      
      
  
  
  );
}
  };








  return (
 
<>
<div id='cd'>{cd}</div>
    
    <div className='ehi'>

{for_loop}


</div>



<div className='couy'>
	<div> Total Amount : ₹{cdo}/-</div>
	<div><button className='bom'>Proceed To Pay</button></div>
</div>
  





	   
   

    </>

  )
}

      
