import React from 'react'

export default function Alert({text}) {
  return (
    <>
    <div className='w-full bg-sky-600'>
    <h1 className='text-slate-300 font-semibold italic text-2xl'>{text}</h1>
    </div>
    </>
  )
}
