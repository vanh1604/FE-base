import React, { use } from 'react'
import { Image } from 'antd';
import FashionBanner from '../components/FashionBanner';
import { products } from '../data/data';
import BestSeller from '../components/BestSeller';
import Service from '../components/Service';
const Home = () => {
  
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <div className='w-full max-w-7xl mx-auto px-5 py-8'>
        <FashionBanner />
      </div>
     <div className="flex items-center justify-center my-8">
  <span className="hidden sm:block flex-1 border-t border-gray-400 mr-4"></span>
  <h2 className="text-3xl md:text-4xl font-light text-gray-500 text-center">
    LATEST
    <span className="font-bold text-gray-700 ml-1">COLLECTION</span>
    <span className="flex-1 border-t border-gray-400 ml-4 max-w-[100px]"></span>
  </h2>
  <span className="hidden sm:block flex-1 border-t border-gray-400 ml-4"></span>
</div>
<p className="text-center text-lg text-gray-600 max-w-3xl mx-auto">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum non, beatae, ipsam fugiat ut aliquam doloribus laudantium ducimus voluptates doloremque qui nulla, facilis quia velit ipsum minus omnis laborum quasi.
</p>
      <div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-18'>
       {products.map((item) => (
  <div key={item.id} className='flex flex-col items-center mb-8'>
    <img
  width={200}
  height={200}
  src={item.image}
  alt={item.name}
  className='rounded-lg shadow-lg'
/>
    <h3 className='text-lg font-semibold mt-2'>{item.name}</h3>
    <p className='text-gray-600'>${item.price}</p>
  </div>
))}

        </div>
        <div>
          <BestSeller />
          <Service />
        </div>
      </div>
    </div>
  )
}

export default Home
