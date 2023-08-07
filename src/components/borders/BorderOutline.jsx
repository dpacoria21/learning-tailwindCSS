import React from 'react'

export const BorderOutline = () => {
  return (
    <>
    
        <section className='flex flex-col flex-wrap gap-5 w-full bg-purple-300 p-7'> 
            <div className='flex gap-5'>
                <div className='w-20 h-20 bg-slate-800 outline outline-offset-2 outline-4 outline-cyan-400'></div>
                <div className='w-20 h-20 bg-slate-800 outline-dashed outline-offset-4 outline-4 outline-emerald-500'></div>
                <div className='w-20 h-20 bg-slate-800 outline-double outline-offset-1 outline-2 outline-sky-600'></div>
                <div className='w-20 h-20 bg-slate-800 outline-dotted outline-offset-4 outline-2 outline-green-400'></div>
            </div>
        </section>
    
    </>
  )
}
