import React from 'react'
import logo from "../assets/logo.png";
import headingPic from "../assets/userGuidePage/1.png";
import { ArrowUpRight } from 'lucide-react';
import UserGuideIntro from '../components/UserGuideIntro';
import UserGuideTableofContext from '../components/UserGuideTableofContext';
import { Link } from 'react-router-dom';

 
const UserGuidePage = () => {


  return (

    <div className='mp-8 pt-8 mp-12 px-32 flex flex-col justify-center items-center bg-white'>

      <Link to="/">
        <img className="h-10  mr-2" src={logo} alt="Logo" />
      </Link>
      <h1 className='text-4xl font-semibold'>User Guide</h1>
      <UserGuideTableofContext />
      <hr className='w-full border-gray-200 mt-8 mp-4' />
      <img src={headingPic} alt='iCloud' className='w-1/2 mt-16 mb-4' />

      {/*   iCloud basics */}
      <div id='icloud-basics' className='flex flex-col items-center'>
      <h1 className='text-3xl font-semibold mt-12'>What is iCloud?</h1>
      <p className='mt-4 text-center text-2xl font-light mb-2'>iCloud is the service from Apple that securely stores your personal information, keeps it up to date on all your devices, and makes it easy to share your photos, files, and more with friends and family.</p>
      <a href='' className="text-blue-800 text-2xl font-light flex items-center mt-2">
        Get an introduction to iCloud
        <ArrowUpRight className="ml-1 w-4 h-4" />
      </a>
      </div>


      {/*   What’s included in iCloud+ */}

      <hr className='w-full border-gray-200 mt-16 mp-4' />

      <UserGuideIntro />  <hr className='w-full border-gray-200 mt-16 mp-4 mb-12' />
      <h2 className='text-left mb-20'>
  To explore the iCloud User Guide, click Table of Contents at the top of the page, or enter a word or phrase in the search field.
  <br />
  If you need more help, visit the <a href="https://support.apple.com/icloud" className="text-blue-800">iCloud Support website</a>.
</h2>

    </div>



  )
}

export default UserGuidePage



