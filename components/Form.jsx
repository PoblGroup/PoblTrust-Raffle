import { interpolateAs } from 'next/dist/shared/lib/router/router'
import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [amount, setAmount] = useState('')
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        if(name === '' || email === '' || amount === '') {
            setErrorMessage("You must fill in all fields.")
            return
        }

        if(!email.includes('@poblgroup.co.uk')) {
            setErrorMessage("You must provide your Pobl email address.")
            return
        }

        if (amount > 10) {
            setErrorMessage("Please enter a valid amount (1-10)")
            return
        }

        setIsSubmitting(true)
        const entry = { name, email, amount: parseInt(amount)}
        AddEntry(entry)
    }

    const AddEntry = async (entry) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(entry);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        const response = await fetch("https://prod-15.uksouth.logic.azure.com:443/workflows/80925d3510dd4d3abd3ee91e1fea70b4/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=JqQtIhCVKHQaiVe_uG51dvvn1cAc-S8a2tLiAxXZy7o", requestOptions)
        const result = await response.json()
        const { error, message } = result
        
        if(message) {
            setMessage(message)
            setErrorMessage('')
        }

        if(error)
            setErrorMessage(error)
        
        setName('')
        setEmail('')
        setAmount('')
        
        setIsSubmitting(false)
    }

    return (
        <>
        {errorMessage && (<p className='text-red-500 mb-6'>{errorMessage}</p>)}
        <form className='px-4 py-2 w-full'>
            <div className="relative z-0 mb-6 w-full group">
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-slate-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " required />
                <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name</label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-slate-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " required="" />
                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
                <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" name="amount" id="amount" min={1} max={10} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-slate-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " required="" />
                <label htmlFor="amount" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Amount</label>
            </div>
            <button onClick={(e) => handleSubmit(e)} type="submit" disabled={isSubmitting ? true : false} className={`text-white bg-emerald-500 hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-md text-sm w-full sm:w-full px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800 mt-6 ${isSubmitting && 'bg-slate-600 hover:bg-slate-600/50 hover:cursor-wait'}`}>
                {isSubmitting ? "Submitting" : "Submit"}
            </button>
            {message && (
                <p className='flex justify-center items-center text-white text-md mt-8'>{message}</p>
            )}
        </form>
        </>
    )
}

export default Form
