import React, { useState } from 'react'

const Day3 = () => {

    const [simpleInterest, setSimpleInterest] = useState(0);
    const [values, setValues] = useState({ principalAmount: "0", rateOfInterest: "0", time: "0" })

    const calculateInterest = () => {
        const { principalAmount, rateOfInterest, time } = values;

        const principal = parseFloat(principalAmount);
        const rate = parseFloat(rateOfInterest);
        const timee = parseFloat(time);

        const SI = (principal * rate * timee) / 100
        setSimpleInterest(SI.toFixed(2))

        setValues({ principalAmount: "0", rateOfInterest: "0", time: "0" })

    }

    return (
        <>
            <div className='w-[400px] bg-white flex flex-col rounded-2xl p-5 '>

                <h1 className='uppercase text-center text-2xl font-bold font-sans' >Simple Interest Calculator</h1>
                <p className='text-center font-sans'>Calculate your simple interest easily</p>

                <div className='w-full h-[100px] bg-gradient-to-r from-violet-200 to-pink-200 mt-5 flex justify-center items-center rounded-xl'>
                    <p className='text-5xl font-extrabold' >₹{simpleInterest}</p>
                </div>

                <div>
                    <label className='block font-sans mt-6' htmlFor="pricipal">
                        Principal Amount :
                    </label>
                    <input onChange={(e) => { setValues({ ...values, principalAmount: e.target.value }) }}
                       type="text" className='border-zinc-900 bg-zinc-200 py-2 px-4 rounded-xl' placeholder='0' />

                    <label className='block font-sans mt-4' htmlFor="pricipal">
                        Interest Rate :
                    </label>

                    <input onChange={(e) => { setValues({ ...values, rateOfInterest: e.target.value }) }} type="text"
                    className='border-zinc-900 bg-zinc-200 py-2 px-4 rounded-xl' placeholder='0' />

                    <label className='block font-sans mt-4' htmlFor="pricipal">
                        Time :
                    </label>
                    <input onChange={(e) => { setValues({ ...values, time: e.target.value }) }} type="text"  className='border-zinc-900 bg-zinc-200 py-2 px-4 rounded-xl' placeholder='0' />

                </div>

                <button onClick={calculateInterest} className='mt-6 bg-pink-500 py-2 px-10 uppercase font-sans font-bold text-white rounded-xl' >Calculate</button>


            </div>



        </>
    )
}

export default Day3