import React, { useState } from 'react'
import { products } from '../data/data'

const Collection = () => {
  const [searchTerm, setSearchTerm] = useState('')


  const filteredProducts = products.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesSearch 
  })

  return (
    <div className="px-6 py-8">
      <div className="text-2xl font-bold text-center mb-8">ALL COLLECTION</div>

    
      <div className="text-center mb-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 mb-8 w-full max-w-md mx-auto"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        
        <aside className="md:w-1/4 w-full border rounded-lg p-5 shadow-md bg-white sticky top-20 h-fit">
   
      <div className="mb-6">
        <h2 className="font-semibold text-lg mb-3">Categories</h2>
        <div className="space-y-2">
          {['SmartPhone', 'Laptop', 'SAMSUNG', 'APPLE','LOGITECH'].map((cat) => (
            <div key={cat} className="flex items-center gap-2">
              <input type="checkbox" id={cat} className="accent-pink-500" />
              <label htmlFor={cat} className="text-sm text-gray-700">{cat}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="font-semibold text-lg mb-3">Price</h2>
        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="Min"
            className="w-full border rounded px-2 py-1 text-sm"
          />
          <span>-</span>
          <input
            type="number"
            placeholder="Max"
            className="w-full border rounded px-2 py-1 text-sm"
          />
        </div>
      </div>
    </aside>


        <main className="md:w-3/4 w-full">
          
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((item) => (
                <div
                  key={item.id}
                  className="border p-2 rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover mb-4 rounded"
                  />
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price}</p>
                </div>
              ))}
            </div>

        </main>
      </div>
    </div>
  )
}

export default Collection
