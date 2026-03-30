import React from 'react'

const Counter = () => {
  return (
    <section className='mb-10 flex flex-col'>
        <h2 className='text-2xl'>Count is</h2>
        <p className='text-xl'>0</p>
        <div className='flex gap-4 mb-4 justify-center'>
            <button> - Decrement</button>
            <button> + Increment</button>
        </div>
        <div className='flex justify-center'>
            <button>Reset</button>
        </div>
    </section>
  )
}

export default Counter;