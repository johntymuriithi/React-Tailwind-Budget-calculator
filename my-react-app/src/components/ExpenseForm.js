import React from 'react'

export default function ExpenseForm({
    handleCharge, 
    handleAmount, 
    handleSubmit, 
    charge, 
    amount, 
    edit
}) 
{
  return (
    <>
    <section>
        <main className='block'>
            <form className='flex justify-around items-center' onSubmit={handleSubmit}>
                <label >
                    <span className='block' htmlFor='charge'>Charge</span>
                    <input 
                    type='text'
                    id='charge'
                    name='charge'
                    value={charge}
                    onChange={handleCharge}
                    required 
                    placeholder='e.g rent' 
                    className='rounded border-t-0 outline-none'/>
                </label>
                <label>
                    <span className='block' htmlFor='amount'>Amount</span>
                    <input 
                    type='number'
                    id='amount'
                    name='amount'
                    value={amount}
                    onChange={handleAmount}
                    required 
                    placeholder='e.g 100'
                    className='rounded border-t-0 outline-none'/>
                </label>

                <div className='flex justify-center mb-9'>
            <button type='submit' className='bg-red-400 rounded p-1 italic text-xs mt-9 px-14'>{edit ? 'EDIT' : 'SUBMIT'}</button>
            </div>
            </form>

            
        </main>
    </section>
    </>
  )
}
