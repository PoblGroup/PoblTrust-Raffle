import React from 'react'
import Form from '../components/Form'

const entry = () => {
    return (
        <div className='bg-image bg-slate-900 text-white h-auto sm:h-screen w-screen flex flex-col items-center p-4 sm:p-8'>
            <h1 className='text-4xl font-bold flex flex-col sm:flex-row sm:items-baseline'>
            Raffle Giveaway{' '}
            <span className='text-sm text-gray-500'>by Pobl Trust</span>
            </h1>
            <div className='bg-slate-800 shadow-xl flex flex-col sm:flex-row justify-center items-start pt-4 pb-8 mt-8 rounded-lg w-full lg:w-2/3 gap-4'> 
            {/* lg:w-1/3 sm:w-1/2 */}
                <div className='flex flex-col w-full flex-1 justify-center py-3 px-4 sm:px-8 sm:border-r-2 sm:border-slate-900/50'>
                    {/* <p className=''>Please use this form to sign up for the raffle!</p> */}
                    <Form />
                </div>
                <div className='flex flex-col flex-1 justify-center py-3 px-4 sm:px-8'>
                    <h3 className='text-xl text-emerald-500 mb-2'>About the raffle</h3>
                    <p className='mb-2.5 text-slate-300'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    
                    <h3 className='text-md text-emerald-500 mb-2'>How to sign up?</h3>
                    <p className='mb-2.5 text-slate-300'>Youd like to sign up? Amazing! Please fill in the form on the left providing your Fullname and Pobl email address. Dont forget to enter an amount, more tickets you buy the better your chance!</p>
                    
                    <h3 className='text-md text-emerald-500 mb-2'>How to pay?</h3>
                    <p className='mb-2.5 text-slate-300'>We will be accepting payments through our just giving page. Select this link to pay today <a href='#' className='text-pink-600 hover:underline'>Pay Here</a>.</p>
                    
                    <p className='mt-2.5 mb-2.5 text-slate-300'>Best of luck! - <span className='italic'>Pobl Trust Team</span></p>
                </div>
            </div>
            
        </div>
    )
}

export default entry
