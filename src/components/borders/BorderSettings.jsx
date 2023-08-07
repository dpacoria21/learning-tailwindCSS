import React from 'react'

export const BorderSettings = () => {
  return (
    <section className='flex flex-col flex-wrap gap-5 w-full bg-purple-500 p-7'>
        <div className='flex gap-5'>
            <div className='w-20 h-20 bg-slate-800 rounded-sm border'></div>
            <div className='w-20 h-20 bg-slate-800 rounded-sm border-2 border-emerald-600'></div>
            <div className='w-20 h-20 bg-slate-800 rounded-sm border-4 border-indigo-500/90'></div>
            <div className='w-20 h-20 bg-slate-800 rounded-sm border-8 border-cyan-500/80'></div>
        </div>
        <div className='flex gap-5'>
            <div className='w-20 h-20 bg-slate-800 rounded-sm border-t'></div>
            <div className='w-20 h-20 bg-slate-800 rounded-sm border-l-2'></div>
            <div className='w-20 h-20 bg-slate-800 rounded-sm border-r-4'></div>
            <div className='w-20 h-20 bg-slate-800 rounded-sm border-b-8'></div>
        </div>
        <div className='flex gap-5'>
            <div className='w-20 h-20 bg-slate-800 rounded-sm border-x-2'></div>
            <div className='w-20 h-20 bg-slate-800 rounded-sm border-y-4'></div>
        </div>
        <div className='divide-y divide-cyan-700'>
            <div className='w-20 h-20 flex justify-center items-center rounded-sm bg-slate-400 p-3 '>01</div>
            <div className='w-20 h-20 flex justify-center items-center rounded-sm bg-slate-400 p-3 '>02</div>
            <div className='w-20 h-20 flex justify-center items-center rounded-sm bg-slate-400 p-3 '>03</div>
        </div>
        <div className="flex divide-x divide-cyan-700">
            <div className='w-20 h-20 flex justify-center items-center rounded-sm bg-slate-400 p-3 '>01</div>
            <div className='w-20 h-20 flex justify-center items-center rounded-sm bg-slate-400 p-3 '>02</div>
            <div className='w-20 h-20 flex justify-center items-center rounded-sm bg-slate-400 p-3 '>03</div>
        </div>
    </section>
  )
}
