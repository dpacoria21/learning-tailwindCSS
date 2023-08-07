import React from 'react'

export const BorderRadius = () => {
  return (
    <>
    
        <section className='flex flex-col flex-wrap gap-5 w-full bg-purple-500 p-7'>

            <div className='flex gap-5'>
                <div className='w-20 h-20 bg-slate-800 rounded-sm'></div>
                <div className='w-20 h-20 bg-slate-800 rounded-md'></div>
                <div className='w-20 h-20 bg-slate-800 rounded-lg'></div>
                <div className='w-20 h-20 bg-slate-800 rounded-full'></div>
            </div>
            <div className='flex gap-5'>
                <div className='w-20 h-20 bg-slate-800 rounded-t-sm'></div>
                <div className='w-20 h-20 bg-slate-800 rounded-b-md'></div>
                <div className='w-20 h-20 bg-slate-800 rounded-l-lg'></div>
                <div className='w-20 h-20 bg-slate-800 rounded-r-full'></div>
            </div>
            <div className='flex gap-5'>
                <div className='w-20 h-20 bg-slate-800 rounded-tl-sm'></div>
                <div className='w-20 h-20 bg-slate-800 rounded-tr-md'></div>
                <div className='w-20 h-20 bg-slate-800 rounded-bl-lg'></div>
                <div className='w-20 h-20 bg-slate-800 rounded-br-full'></div>
            </div>

        </section>
    
    </>
  )
}
