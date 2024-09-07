// 'use client'
// import React, { useState } from 'react'

// const page = () => {
//   const [number, setnumber] = useState('')
//   const [birthYear, setbirthYear] = useState('')
//   const [guessedAge, setguessedAge] = useState(null)

//   const guessAge = ()=>{
//     let result = (number * 4 + 10) * 25 + 1773 + 1;
//     let age1 = result - birthYear;
//     let age2 = age1.toString() 
//     let finalAge = age2.substring(1)
//     setguessedAge(finalAge)
//   }


//   return (
//     <div className='mt-10 flex flex-col gap-5 items-center'>
//       <h4 className='text-3xl font-bold'>Enter any number between 1-8</h4>
//       <input type='number' className='border-2 border-black p-2 text-2xl font-bold' value={number} onChange={(e)=>{
//         setnumber(parseInt(e.target.value))
//       }}/>
//       <h4 className='text-3xl font-bold'>Enter your birth year</h4>
//       <input type='number' className='border-2 border-black p-2 text-2xl font-bold' value={birthYear} onChange={(e)=>{
//         setbirthYear(parseInt(e.target.value))
//       }}/>
//       <button className='bg-black px-6 py-2 rounded-lg text-white font-bold text-2xl' onClick={guessAge}>Age</button>

//       <div className='mt-10 text-5xl font-bold'>{guessedAge}</div>

//     </div>
//   )
// }

// export default page


// ##############################IMPROVE##############################

'use client'
import React, { useState } from 'react'

const Page = () => {
  const [number, setNumber] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [guessedAge, setGuessedAge] = useState(null);
  const [error, setError] = useState('');

  const guessAge = () => {
    // Input validation
    if (isNaN(number) || number < 1 || number > 8) {
      setError('Please enter a number between 1 and 8.');
      setGuessedAge(null);
      return;
    }
    if (isNaN(birthYear) || birthYear.length !== 4) {
      setError('Please enter a valid birth year.');
      setGuessedAge(null);
      return;
    }

    // Guessing logic
    let result = (number * 4 + 10) * 25 + 1773 + 1;
    let age1 = result - birthYear;
    let finalAge = age1.toString().substring(1);
    setGuessedAge(finalAge);
    setError('');
  };

  return (
    <div className='mt-10 flex flex-col gap-5 items-center'>
      <h4 className='text-3xl font-bold'>Enter any number between 1-8</h4>
      <input
        type='number'
        className='border-2 border-black p-2 text-2xl font-bold'
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        placeholder='Enter a number between 1-8'
      />
      
      <h4 className='text-3xl font-bold'>Enter your birth year</h4>
      <input
        type='number'
        className='border-2 border-black p-2 text-2xl font-bold'
        value={birthYear}
        onChange={(e) => setBirthYear(e.target.value)}
        placeholder='Enter your birth year'
      />

      <button
        className='bg-black px-6 py-2 rounded-lg text-white font-bold text-2xl'
        onClick={guessAge}
      >
        Guess Age
      </button>

      {error && <div className='mt-4 text-red-600 text-2xl'>{error}</div>}

      <div className='mt-10 text-5xl font-bold'>{guessedAge}</div>
    </div>
  );
};

export default Page;
