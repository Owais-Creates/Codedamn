import React, { useState } from 'react'


// Ques1-  CREATE A COUNTER WHICH INCREMENT BY "3" WHEN CLICKED.
function Day1() {

    const [value, setValue] = useState(0);
    const handleIncrement = () => {
        setValue(prev => prev + 3);
    }

    return (
        <div className='flex flex-col items-center justify-center h-screen' >

            <h1 className='text-3xl font-sans uppercase font-bold' >Increment counter by 3 when clicked</h1>

            <div className='w-[200px] h-[200px] my-5 bg-white rounded-lg flex justify-center items-center' >
                <h2 className='text-8xl font-extrabold' >{value}</h2>
            </div >

            <button onClick={handleIncrement} className='bg-black text-white px-8 py-3 rounded-2xl font-bold' > INCREMENT</button >
        </div >
    )
}

export default Day1
