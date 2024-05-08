// All checkbox select in one click 
import React, { useState } from 'react'

const Day6 = () => {

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckbox = () => {
        setIsChecked(!isChecked);
    }

    const checkBoxes = document.querySelectorAll("input");

    for (const box of checkBoxes) {
        box.checked = isChecked
    }

    return (

        <>
            <div>
                <h1 className='text-3xl font-bold text-white font-sans' >Select all the checkboxes in one click</h1>

                <div className='flex flex-col gap-5 text-white text-2xl items-center justify-center bg-zinc-600 w-fit p-10 rounded-2xl mt-2 ' >
                    <div>
                        <label htmlFor="car">Car</label>
                        <input type="checkbox" name='car' id='car' />
                    </div>

                    <div>
                        <label htmlFor="bike">Bike</label>
                        <input type="checkbox" id='bike' />

                    </div>
                    <div>
                        <label htmlFor="truck">Truck</label>
                        <input type="checkbox" id='truck' />
                    </div>

                    <div>
                        <label htmlFor="cycle">Cycle</label>
                        <input type="checkbox" id='cycle' />
                    </div>
                </div>
                <button onClick={handleCheckbox} className='p-3 bg-red-400 rounded-lg' >{isChecked ? "Deselect all" : "Select All"}</button>
            </div>
        </>

    )
}

export default Day6