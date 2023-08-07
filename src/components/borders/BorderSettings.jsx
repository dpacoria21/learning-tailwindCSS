import React from 'react'

export const BorderSettings = () => {
  return (
    <section className='flex flex-col flex-wrap gap-5 w-full bg-purple-500 p-7'>
        <div className='flex gap-5'>
            <div className='w-20 h-20 bg-slate-800 rounded-sm border border-hidden'></div>
            <div className='w-20 h-20 bg-slate-800 rounded-sm border-2 border-emerald-600 border-dotted'></div>
            <div className='w-20 h-20 bg-slate-800 rounded-sm border-4 border-indigo-500/90 border-double'></div>
            <div className='w-20 h-20 bg-slate-800 rounded-sm border-8 border-cyan-500/80 border-dashed'></div>
        </div>
        <div className='flex gap-5'>
            <div className='w-20 h-20 bg-slate-800 rounded-sm border-t'></div>
            <div className='w-20 h-20 bg-slate-800 rounded-sm border-l-2'></div>
            <div className='w-20 h-20 bg-slate-800 rounded-sm border-r-4'></div>
            <div className='w-20 h-20 bg-slate-800 rounded-sm border-b-8'></div>
        </div>
        <div className='flex gap-5'>
            <div className='w-20 h-20 bg-slate-800 rounded-sm border-4 border-indigo-400 border-t-indigo-700'></div>
            <div className='w-20 h-20 bg-slate-800 rounded-sm border-4 border-indigo-400 border-b-indigo-700'></div>
            <div className='w-20 h-20 bg-slate-800 rounded-sm border-4 border-indigo-400 border-r-indigo-700'></div>
            <div className='w-20 h-20 bg-slate-800 rounded-sm border-4 border-indigo-400 border-l-indigo-700'></div>
        </div>
        <div className='flex justify-center items-center gap-5'>
            <div className='w-20 h-20 bg-slate-800 rounded-sm border-4 border-indigo-400 hover:border-indigo-800'></div>
        </div>
        <div className='flex gap-5'>
            <div className='w-20 h-20 bg-slate-800 rounded-sm border-4 border-indigo-400 border-x-indigo-700'></div>
            <div className='w-20 h-20 bg-slate-800 rounded-sm border-4 border-indigo-400 border-y-indigo-700'></div>
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
