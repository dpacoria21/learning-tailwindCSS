import React from 'react'

export const Grid = () => {
  return (
    <>
    
        <section className='flex flex-col gap-4 bg-slate-600 w-full p-4'>
            <div className='grid grid-cols-3 gap-4 bg-slate-900 p-4'>
                <div className='p-5 bg-fuchsia-500'></div>
                <div className='p-5 bg-fuchsia-500'></div>
                <div className='p-5 bg-fuchsia-500'></div>
                <div className='p-5 col-span-2 bg-fuchsia-500'></div>
                <div className='p-5 bg-fuchsia-500'></div>
                <div className='p-5 bg-fuchsia-500'></div>
                <div className='col-span-2 bg-fuchsia-500'></div>
            </div>

                {/* Tomar nota que en CSS grid las columnas empiezan desde el 0
                    por ende nuestra columna de inicio es el 1 y el end es el 7 */}

            <div className='grid grid-cols-6 bg-slate-300 p-4 gap-4'>
                <div className='p-4 bg-sky-500 col-start-2 col-span-4'></div>
                <div className='p-4 bg-sky-500 col-start-1 col-end-3'></div>
                <div className='p-4 bg-sky-500 col-start-5 col-end-7'></div>
                <div className='p-4 bg-sky-500 col-start-1 col-end-7'></div>
            </div>

            <div className='grid bg-slate-300 p-4 grid-flow-row-dense grid-cols-3 grid-rows-3 gap-4'>
                <div className='p-4 bg-cyan-600'></div>
                <div className='p-4 bg-cyan-600'></div>
                <div className='p-4 bg-cyan-600'></div>
                <div className='p-4 bg-cyan-600'></div>
                <div className='p-4 bg-cyan-600'></div>
                <div className='p-4 bg-cyan-600'></div>
                <div className='p-4 bg-cyan-600'></div>
                <div className='p-4 bg-cyan-600'></div>
                <div className='p-4 bg-cyan-600'></div>
                <div className='p-4 bg-cyan-600'></div>
                <div className='p-4 bg-cyan-600'></div>
            </div>
            <div className='grid grid-flow-col auto-cols-fr bg-slate-300 p-4  gap-4'>
                <div className='p-4 bg-cyan-600'></div>
                <div className='p-4 bg-cyan-600'></div>
                <div className='p-4 bg-cyan-600'></div>
                <div className='p-4 bg-cyan-600'></div>
                <div className='p-4 bg-cyan-600'></div>
                <div className='p-4 bg-cyan-600'></div>
                <div className='p-4 bg-cyan-600'></div>
                <div className='p-4 bg-cyan-600'></div>
                <div className='p-4 bg-cyan-600'></div>
                <div className='p-4 bg-cyan-600'></div>
                <div className='p-4 bg-cyan-600'></div>
            </div>
            <div className='grid grid-flow-row auto-cols-max bg-slate-300 p-4  gap-4'>
                <div className='p-4 bg-cyan-600'></div>
                <div className='p-4 bg-cyan-600'></div>
                <div className='p-4 bg-cyan-600'></div>
                <div className='p-4 bg-cyan-600'></div>
                <div className='p-4 bg-cyan-600'></div>
                <div className='p-4 bg-cyan-600'></div>
                <div className='p-4 bg-cyan-600'></div>
                <div className='p-4 bg-cyan-600'></div>
                <div className='p-4 bg-cyan-600'></div>
                <div className='p-4 bg-cyan-600'></div>
                <div className='p-4 bg-cyan-600'></div>
            </div>
            <div className='grid grid-flow-col auto-rows-max auto-cols-max place-content-center  h-96 bg-slate-300 p-4  gap-4'>
                <div className='p-4 bg-cyan-600'></div>
                <div className='p-4 bg-cyan-600'></div>
                <div className='p-4 bg-cyan-600'></div>
            </div>

        </section>
    
    </>
  )
}
