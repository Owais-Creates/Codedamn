// Baisc Polling System
import React, { useState } from 'react'

const Day5 = () => {

    const pollingQuestions = [
        { option: "Manasu", count: 0 },
        { option: "Everest", count: 0 },
        { option: "Lhoste", count: 0 },
        { option: "Kanchenjunga", count: 0 }
    ]

    let [ques, setQues] = useState(pollingQuestions);

    const handlePolling = (id) => {

        const updatePollingCount = [...ques];
        updatePollingCount[id].count++;
        setQues(updatePollingCount);

    }

    return (
        <>
            <h1 className='text-3xl mr-10 font-extrabold text-white' >BASIC POLLING SYSTEM</h1>

            <div className='w-[400px] p-10 flex flex-col gap-5 bg-slate-200 rounded-xl '>
                <h1 className='font-bold text-2xl mb-5'>What is the highest mountain in the world.</h1>

                <div>

                    {ques.map((item, index) => (
                        <p onClick={() => handlePolling(index)} key={index} className='bg-zinc-700 text-white font-bold p-3 w-[190px] rounded-lg mb-2 flex justify-between select-none ' > {item.option} <span>{item.count}</span> </p>
                    ))}



                </div>

            </div>
        </>
    )
}

export default Day5