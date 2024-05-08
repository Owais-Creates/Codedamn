import React, { useRef, useState, useEffect } from 'react';

const Day7 = () => {

    const [num, setNum] = useState("");
    const [count, setCount] = useState(0);
    let inputRef = useRef(null);

    const handleStart = () => {
        if (num < 0 || isNaN(num)) {
            alert("Please enter a valid number")
            return;
        }

        inputRef.current = setInterval(() => {

            setCount((prevCount) => {
                if (prevCount < num) {
                    return prevCount + 1;
                } else {
                    clearInterval(inputRef.current)
                    return prevCount;
                }
            })

        }, 1000)
    };

    const handleStop = () => {
        clearInterval(inputRef.current);
    }

    useEffect(() => {
        return () => clearInterval(inputRef.current);
    })


    return (
        <div className='flex flex-col items-center gap-6'>
            <h1 className='text-3xl text-white font-bold font-sans'>Counter App by using user input</h1>
            <div className='py-2 px-6 bg-zinc-600 rounded-xl text-white font-bold text-2xl'>{count}</div>
            <input
                onChange={(e) => setNum(parseInt(e.target.value, 10))}
                value={num}
                className='py-2 px-4 rounded-xl font-bold'
                type="number"
                placeholder='enter number'
            />
            <div>
                <button onClick={handleStart} className='py-3 px-10 bg-green-600 rounded-xl text-white font-bold font-sans'>Start</button>
                <button onClick={handleStop} className='py-3 px-10 bg-red-600 rounded-xl text-white font-bold font-sans ml-3'>Stop</button>
            </div>
        </div>
    );
};

export default Day7;
