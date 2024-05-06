import React, { useState } from 'react';

const Day4 = () => {
  const [initialResult, setInitialResult] = useState(0);
  const [values, setValues] = useState({ start: null, end: null });
  const [error, setError] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const generate = () => {
    const { start, end } = values;
    const startingNumber = parseInt(start, 10);
    const endingNumber = parseInt(end, 10);

    if (start > end || isNaN(start) || isNaN(end)) {
      setError("Invalid Input or Null");
      setValues({ start: null, end: null });
      setIsDisabled(true);
      return;

    } else if (values.start === null || values.end === null) {
      setInitialResult("Null");
      setError("Both Fields are Null");
      setIsDisabled(true);
      return;
    }

    const calculatedResult = Math.floor(Math.random() * (endingNumber - startingNumber + 1)) + startingNumber;

    setInitialResult(calculatedResult);
  }

  return (
    <>
      <div className='flex flex-col items-center gap-4'>
        <h1 className='text-white text-4xl font-sans font-bold'>Random Number Generator</h1>

        <div className='w-[300px] bg-white rounded-xl p-5'>
          <div className='w-full h-[100px] rounded-xl bg-red-400 flex justify-center items-center text-5xl font-bold'>{initialResult}</div>

          <div className='flex flex-col'>
            <input
              value={values.start}
              onChange={(e) => {
                setValues({ ...values, start: e.target.value })
                setIsDisabled(false);
                setError("");
              }}
              className='py-2 px-4 bg-zinc-200 rounded-lg mt-4'
              type="text"
              placeholder='Starting Number'
            />

            <input
              value={values.end}
              onChange={(e) => {
                setValues({ ...values, end: e.target.value })
                setIsDisabled(false);
                setError("");
              }}
              className='py-2 px-4 bg-zinc-200 rounded-lg mt-4 mb-1'
              type="text"
              placeholder='Ending Number'
            />

            <p className='font-sans text-red-600 font-bold ml-1'>{error}</p>
          </div>

          <button
            onClick={generate}
            className={`mt-10 py-2 px-8 rounded-lg text-white ${values.start == null ? "bg-zinc-200" : "bg-zinc-600"} font-sans font-bold`}
            disabled={isDisabled}
          >
            Generate
          </button>
        </div>
      </div>
    </>
  );
}

export default Day4;
