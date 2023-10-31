import React from 'react'
import ProductsCard from './ProductsCard'

const Products = ({products}) => {
    console.log(products);
  return (
    <div>
        <div className="flex flex-col items-center gap-4">
      <h1 className="text-2x1 bg-black text-white py-2 w-80 text-center">
          Shopping Every Day</h1>
      <span className="w-20 h-[3px] color-black"></span>
          <p className="max-w-[700px] text-gray-600 text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium libero commodi,
               excepturi dolorem eveniet at earum et tenetur officiis ex magni, 
              ullam assumenda esse nobis ratione, voluptatibus debitis facilis architecto.
          </p>
          </div>
          <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        
                {products.map((item)=>(
                    <ProductsCard  key={item._id} product={item}/>
                ))}
        
            
          </div>
    </div>
  )
}

export default Products
