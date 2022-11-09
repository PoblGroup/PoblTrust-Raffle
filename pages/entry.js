import React from 'react'
import Form from '../components/Form'

const entry = () => {
    return (
        <div className='bg-image text-white flex flex-col items-center'>

            <div className='w-full lg:w-4/5'>

                {/* Heading */}
                <div className='flex justify-between items-center w-full flex-col-reverse sm:flex-row sm:px-16'>
                    <h1 className='text-4xl font-bold flex flex-col sm:flex-row sm:items-baseline'>
                        Raffle Giveaway
                    </h1>
                    <div className='w-[200px] p-4'>
                        <img src='/trustlogo.png' alt='pobl trust logo' />
                    </div>
                </div>

                {/* Entry */}
                <div className='px-8 w-full sm:px-16'>
                    <div className='bg-slate-800 shadow-xl my-8 rounded-lg w-full flex flex-col-reverse sm:flex-col'> 
                        <div className='flex flex-col w-full flex-1 justify-center py-3 px-4 sm:px-8 sm:border-r-2 sm:border-slate-900/50'>
                            <Form />
                        </div>
                        <div className='flex flex-col px-8 py-8'>
                            <h3 className='text-xl text-emerald-500 mb-2'>About the raffle</h3>
                            <p className='mb-2.5 text-slate-300'>
                                For Christmas 2022, the Pobl Trust is running a luxury raffle for our Pobl Colleagues. Every penny raised from the sale of raffle tickets will go straight back into our annual grant awards, and to supporting more community groups and projects than ever before.
                            </p>
                            <p className='mb-2.5 text-slate-300'>
                                We have 5 amazing prizes available to 5 lucky winners:
                            </p>
                            <ul className='mb-2.5 text-slate-300 list-disc ml-8'>
                                <li>a top of the range air fryer</li>
                                <li>a delicious hamper of M&S goodies</li>
                                <li>a generous Smyths Toys voucher </li>
                                <li>a luxurious night out </li>
                                <li>a sumptuous Christmas dinner hamper</li>
                            </ul>
                            <p className='mb-2.5 text-slate-300'>
                                Tickets are only £2!
                            </p>
                            <p className='mb-2.5 text-slate-300'>
                                Tickets are available to purchase between Thursday 18 November and Thursday 15 December. Winners will be chosen by a randomiser and notified on Friday 16 December.
                            </p>
                            
                            <h3 className='text-md text-emerald-500 mb-2'>How to sign up?</h3>
                            <p className='mb-2.5 text-slate-300'>
                                You’d like to sign up? Amazing! Please fill in the form on the left providing your full name and Pobl email address. Dont forget to enter an amount of tickets you wish to buy - the more tickets you buy the better your chances!
                            </p>
                            <p  className='mb-2.5 text-slate-300'>
                                Once you have signed up, please ensure you make payment for your tickets, without payment we will be unable to enter you into the raffle draw. Youll receive an email from us with your ticket number/s in due course.
                            </p>
                            
                            <h3 className='text-md text-emerald-500 mb-2'>How to pay?</h3>
                            <p className='mb-2.5 text-slate-300'>We will be accepting payments through the Pobl Trust Just Giving page. In order to pay, please click this link <a href='https://www.justgiving.com/campaign/luxuryraffle' className='text-pink-600 hover:underline'>Pay Here</a>.</p>
                            
                            <p className='mt-2.5 mb-2.5 text-slate-300'>Best of luck and thanks for your support <br/><span className='font-bold'>Pobl Trust Team</span></p>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default entry
