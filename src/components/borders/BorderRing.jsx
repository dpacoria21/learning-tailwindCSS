import React from 'react'

export const BorderRing = () => {
  return (
    <>
    
        <section className='flex flex-col flex-wrap gap-5 w-full bg-gray-200 p-7'> 
                <div className='flex gap-5'>
                    <button className='w-20 h-20 bg-slate-800 ring-offset-2 ring-1'></button>
                    <button className='w-20 h-20 bg-slate-800 ring-offset-2 ring-2'></button>
                    <button className='w-20 h-20 bg-slate-800 ring-offset-2 ring-4'></button>
                    <button className='w-20 h-20 bg-slate-800 ring-offset-2 focus:ring-4'></button>
                </div>
                <div className='flex gap-5'>
                    <button className='w-20 h-20 bg-slate-800 ring-2 ring-pink-300 ring-inset'></button>
                </div>
        </section>
    
    </>
  )
}
