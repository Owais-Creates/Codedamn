import React, { useState } from 'react'

function Day2() {

    const [toggle, isToggle] = useState(true);
    const handleToggle = () => {
        isToggle(prev => !prev);
    }

    return (
        <>
            <div >
                {toggle && <p className='text-3xl text-white font-bold uppercase' >Toggle this paragraph</p>}
                <button onClick={handleToggle} className='mt-5 py-2 rounded-xl px-9 bg-zinc-700 text-white font-sans font-bold uppercase'>Toggle</button>
            </div>
        </>
    )
}

export default Day2
