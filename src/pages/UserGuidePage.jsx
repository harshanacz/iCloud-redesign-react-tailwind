import React from 'react'
import MainLayout from '../layout/MainLayout'
import logo from "../assets/userGuidePage/1.png";
import { ArrowUpRight } from 'lucide-react';


const UserGuidePage = () => {
  return (
    <MainLayout>

<div className='mp-8 pt-8 mp-12 px-32 flex flex-col justify-center items-center bg-white'>
  <h1 className='text-4xl font-semibold'>iCloud User Guide</h1>
  
  <img src={logo} alt='iCloud' className='w-1/2 mt-8'/>
  <h1 className='text-3xl font-semibold mt-8'>What is iCloud?</h1>
  <p className='mt-2 text-center font-light'>iCloud is the service from Apple that securely stores your personal information, keeps it up to date on all your devices, and makes it easy to share your photos, files, and more with friends and family.</p>
 <a href='' className="text-blue-800 text-sm font-light flex items-center mt-4">
 Get an introduction to iCloud
                <ArrowUpRight className="ml-1 w-4 h-4" />
              </a>
</div>


    </MainLayout>
  )
}

export default UserGuidePage



