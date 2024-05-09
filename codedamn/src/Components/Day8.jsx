import React from 'react'
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext'
import { MdNightlightRound } from "react-icons/md";
import { FaSun } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";




const Day8 = () => {

    const { handleToggle, toggle } = useContext(ThemeContext);

    return (
        <div className={`bg-white w-[500px] flex flex-col items-center rounded-xl p-5 ${toggle ? 'dark' : null}`} >
            <h1 className='mb-3  font-sans font-bold text-3xl' >Dark Theme Toggle</h1>
            <p className='text-center font-sans' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, non quos? Voluptas ea aliquid praesentium quisquam expedita facilis, nisi beatae ullam provident sint fuga veniam.</p>
            <button onClick={handleToggle} className={` mt-5 px-6 py-2 bg-zinc-200 rounded-xl font-bold ${toggle ? "darkBtn" : null} `} >{toggle ? <FaSun /> : <MdNightlightRound />}</button>
        </div>
    )
}

export default Day8