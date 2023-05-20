import React from 'react'

export default function ExpenseItem({item, del, edit}) {
  return (
    <>
    <section>
       <div className='flex justify-around'>
        <article>
            <h1 className='ml-2'>{item.charge}</h1>
        </article>
        <article>
            <i>{item.amount}</i>
        </article>
        <div className='flex'>
        <button className='bg-emerald-500 text-xm italic rounded-full overflow-hidden' onClick={() => edit(item.id)}>Edit</button>
        <button className='ml-1 bg-red-500 text-xm italic rounded-full overflow-hidden' onClick={() => del(item.id)}>Del</button>
        </div>
       </div>
    </section>
    </>
  )
}
