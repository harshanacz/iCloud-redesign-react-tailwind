import React from 'react'
import MainLayout from '../layout/MainLayout'
import headingPic from "../assets/signInPage/signinLogo.svg";
import SignInPageButton from '../components/SignInPageButton';

const SignInPage = () => {
  return (
    <MainLayout>
        <div className='mp-8 pt-2 mp-12 px-32 flex flex-col justify-center items-center'>
            <img src={headingPic} alt='iCloud' className='w-64 mt-8 mb-6' />
            <h1 className='text-4xl font-semibold mb-4'>Sign in with Apple ID</h1>
            <SignInPageButton />
        </div>
    </MainLayout>
  )
}

export default SignInPage
