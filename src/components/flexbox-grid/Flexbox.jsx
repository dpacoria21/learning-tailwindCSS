import React from 'react'

export const Flexbox = () => {

  return (
    <>
    
        <section className='flex flex-col gap-5 bg-gray-300 w-full p-5'>
            <div className='flex gap-5'>
                <div className='bg-fuchsia-500 basis-1/2 h-14 rounded-xl flex items-center justify-center text-gray-50 font-bold text-lg'>01</div>
                <div className='bg-fuchsia-500 basis-1/2 h-14 rounded-xl flex items-center justify-center text-gray-50 font-bold text-lg'>02</div>
            </div>
            <div className='flex flex-row-reverse gap-5'>
                <div className='bg-fuchsia-500 basis-1/4 h-14 rounded-xl flex items-center justify-center text-gray-50 font-bold text-lg'>01</div>
                <div className='bg-fuchsia-500 basis-1/4 h-14 rounded-xl flex items-center justify-center text-gray-50 font-bold text-lg'>02</div>
                <div className='bg-fuchsia-500 basis-2/4 h-14 rounded-xl flex items-center justify-center text-gray-50 font-bold text-lg'>03</div>
            </div>
            <div className='flex flex-col-reverse gap-5'>
                <div className='bg-fuchsia-500 basis-1/2 h-14 rounded-xl flex items-center justify-center text-gray-50 font-bold text-lg'>01</div>
                <div className='bg-fuchsia-500 basis-1/2 h-14 rounded-xl flex items-center justify-center text-gray-50 font-bold text-lg'>02</div>
            </div>
            <div className='flex flex-wrap flex-row-reverse gap-5'>
                <div className='bg-fuchsia-500 w-96  h-14 rounded-xl flex items-center justify-center text-gray-50 font-bold text-lg'>01</div>
                <div className='bg-fuchsia-500 w-96  h-14 rounded-xl flex items-center justify-center text-gray-50 font-bold text-lg'>01</div>
                <div className='bg-fuchsia-500 w-96  h-14 rounded-xl flex items-center justify-center text-gray-50 font-bold text-lg'>01</div>
            </div>
            <div className='flex flex-row gap-5'>
                <div className='bg-fuchsia-500 w-48 flex-auto  h-14 rounded-xl flex items-center justify-center text-gray-50 font-bold text-lg'>01</div>
                <div className='bg-fuchsia-500 w-96 flex-1  h-14 rounded-xl flex items-center justify-center text-gray-50 font-bold text-lg'>02</div>
                <div className='bg-fuchsia-500 w-24 flex-initial  h-14 rounded-xl flex items-center justify-center text-gray-50 font-bold text-lg'>03</div>
            </div>
            <div className='flex flex-row gap-5'>
                <div className='bg-fuchsia-500 w-48 grow  h-14 rounded-xl flex items-center justify-center text-gray-50 font-bold text-lg'>01</div>
                <div className='bg-fuchsia-500 w-48 grow-0  h-14 rounded-xl flex items-center justify-center text-gray-50 font-bold text-lg'>02</div>
                <div className='bg-fuchsia-500 w-48 grow h-14 rounded-xl flex items-center justify-center text-gray-50 font-bold text-lg'>03</div>
            </div>
            <div className='flex flex-row gap-5'>
                <div className='bg-fuchsia-500 shrink-0 w-24 h-14 rounded-xl flex items-center justify-center text-gray-50 font-bold text-lg'>01</div>
                <div className='bg-fuchsia-500 shrink w-72 h-14 rounded-xl flex items-center justify-center text-gray-50 font-bold text-lg'>02</div>
                <div className='bg-fuchsia-500 shrink-0 w-24 h-14 rounded-xl flex items-center justify-center text-gray-50 font-bold text-lg'>03</div>
            </div>
            <div className='flex gap-5 bg-slate-600 h-96 justify-center items-center'>
                <div className='bg-fuchsia-500 shrink-0 w-24 h-14 rounded-xl flex items-center justify-center text-gray-50 font-bold text-lg'>01</div>
                <div className='bg-fuchsia-500 shrink w-72 h-14 rounded-xl flex items-center justify-center text-gray-50 font-bold text-lg'>02</div>
                <div className='bg-fuchsia-500 shrink-0 w-24 h-14 rounded-xl flex items-center justify-center text-gray-50 font-bold text-lg'>03</div>
            </div>
        </section>
    
    </>
  )
}
