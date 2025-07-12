import React from 'react'

const Service = () => {
  return (
    <div>
      <div className="max-w-5xl mx-auto py-16">
   <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">

    <div className="flex flex-col items-center text-center flex-1">
   <svg className="w-14 h-14 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" fill="none"/>
        <path d="M8 12l2.5 2.5L16 9" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <h3 className="font-bold text-lg mb-1">Easy Exchange Policy</h3>
      <p className="text-gray-400">We offer hassle free exchange policy</p>
    </div>

    <div className="flex flex-col items-center text-center flex-1">
      <svg className="w-14 h-14 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" fill="none"/>
        <path d="M8 12l2.5 2.5L16 9" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <h3 className="font-bold text-lg mb-1">7 Days Return Policy</h3>
      <p className="text-gray-400">We provide 7 days free return policy</p>
    </div>

    <div className="flex flex-col items-center text-center flex-1">
      <svg className="w-14 h-14 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" fill="none"/>
        <rect x="8" y="10" width="8" height="6" rx="2" stroke="black" strokeWidth="2"/>
        <path d="M9 10V8a3 3 0 0 1 6 0v2" stroke="black" strokeWidth="2"/>
      </svg>
      <h3 className="font-bold text-lg mb-1">Best customer support</h3>
      <p className="text-gray-400">We provide 24/7 customer support</p>
    </div>
  </div>


  <div className="text-center mt-16">
    <h2 className="text-2xl md:text-3xl font-bold mb-2">Subscribe now &amp; get 20% off</h2>
    <p className="text-gray-400 mb-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    <form className="flex max-w-2xl mx-auto">
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 px-6 py-4 border border-gray-200 rounded-l-md focus:outline-none text-lg"
      />
      <button
        type="submit"
        className="bg-black text-white px-10 py-4 rounded-r-md font-semibold text-lg hover:bg-gray-800 transition"
      >
        SUBSCRIBE
      </button>
    </form>
  </div>
</div>
    </div>
  )
}

export default Service
