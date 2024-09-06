import React from 'react'
import HeroVideo from './HeroVideo'
const HeroSec = () => {
    return (
        <div className='mt-4 '>
            <HeroVideo />
            <div className='flex flex-col items-center'>
  <h1 className="text-4xl font-bold ">Welcome to iCloud</h1>
    <p className="text-lg text-center mb-4 mx-12">Safely store and access your photos, videos, documents, notes, contacts, and more.</p>
  <button className="bg-black font-semibold text-white rounded-full px-10 py-2">
    Sign in
  </button>
</div>


        </div>
    )
}

export default HeroSec
