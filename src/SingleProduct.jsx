
const SingleProduct = ({ product, handleCart}) => {
  
  return (
    <div className="">
      <div className='card p-3 rounded-xl shadow-lg space-y-1'>
            <img className='card-img' src={product.image} alt="" />
        <h1 className='text-xl font-bold'> {product.title} </h1>
        <p> {product.description.slice(0,105)} </p>
            <div className="card-footer flex justify-between p-4 items-center">
          <h1 className='text-2xl font-bold'>{product.price} $</h1>
              <button onClick={(e)=>handleCart(product)} className='add-btn bg-slate-500 p-3 rounded-xl'>Add to cart</button>
            </div>
          </div>
    </div>
  );
};

export default SingleProduct;