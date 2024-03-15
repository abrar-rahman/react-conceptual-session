import { useEffect, useState } from 'react'

import './App.css'
import SingleProduct from './SingleProduct'

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setcart] = useState([]);


  useEffect(() => {
    fetch("./fakeData.json")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      });
  }, []);


  const handleCart = (p) => {
    const isExist = cart.find((pd) => pd.id == p.id);
    if (!isExist) {
      setcart([...cart, p]);
    }
    else {
      alert("already in cart");
    }
  };

  const handleDelete = (id)=>{
    const newCart = cart.filter(item => item.id != id);
    setcart(newCart);
  }





  // console.log(cart);

  
  return (
    <>
      
     
      <div className='main-container flex justify-around  my-10'>
        
        
        
        <div className="cards-container space-y-5">
          {
            products.map(pd =>
              <SingleProduct product={pd} handleCart={handleCart}></SingleProduct>)

          }
          
          
          
        </div>





         
        <div className="cart-container w-[400px] shadow-xl">
          <h1 className='text-4xl text-center font-bold p-6'>This is cart</h1>
          <div className="cart-title">
          <h5 className='font-bold text-xl'>Name:</h5>
          <h5 className='font-bold text-xl'>price:</h5>
          </div>

             <div className="">
              {
                 cart.map((item,index) => (
                   <div className="div cart-info flex justify-around items-center">
                     <p>{index+1}</p>
                     <h5>{item.title.slice(0,11)}</h5>
                     <h5>{item.price}</h5>
                     <button onClick={()=>handleDelete(item.id)} className='bg-slate-900 text-white p-1 m-2'>Delete</button>
                   </div>
                   
              ))
             }
            </div>
        </div>
      

      </div>

    </>
  )
}

export default App
