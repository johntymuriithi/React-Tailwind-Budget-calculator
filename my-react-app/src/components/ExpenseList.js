import React from 'react'
import Item from './ExpenseItem'

export default function ExpenseList({
  expenses, 
  handleDel, 
  delItem, 
  editItem
}) 
{
  return (
    <>
    <section className='bg-indigo-400 w-96 m-auto px-1'>
        <main>
        {expenses.map((expense) => {
            return <Item 
            key={expense.id} 
            item={expense} 
            del={delItem} 
            edit={editItem}/>
        })}
        </main>
        {expenses.length > 0 && 
        <div className='flex justify-center'>
        <button className='bg-red-400 rounded p-1 italic text-xs mt-9 mb-1' onClick={handleDel}>Clear Expenses</button>
        </div>} 
    </section>
    </>
  )
}
