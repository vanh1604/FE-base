import React from 'react'
import { products } from '../data/data';
const BestSeller = () => {
  return (
    <div>
      <div className="flex items-center justify-center my-8">
  <h2 className="text-3xl md:text-4xl font-light text-gray-500 text-center">
    BEST
    <span className="font-bold text-gray-700 ml-1">SELLER</span>
  </h2>
  <span className="flex-1 border-t border-gray-400 ml-4 max-w-[100px]"></span>
</div>
<p className="text-center text-lg text-gray-600 max-w-4xl mx-auto">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi assumenda iste laboriosam architecto numquam odio minus rem unde omnis deleniti fuga dolorum, accusamus ipsum! Quod suscipit ducimus eveniet voluptatem ipsa.
</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {products
          .filter((item) => item.rating >= 4.5 && item.inStock)
          .slice(0, 4)
          .map((item) => (
            <div key={item.id} className='border p-4 rounded-lg'>
              <img src={item.image} alt={item.name} className='w-full h-48 object-cover mb-4 rounded' />
              <h3 className='text-lg font-semibold'>{item.name}</h3>
              <p className='text-gray-600'>${item.price}</p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default BestSeller
