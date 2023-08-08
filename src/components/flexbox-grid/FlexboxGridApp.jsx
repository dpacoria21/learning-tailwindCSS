import React from 'react'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import { Flexbox } from './Flexbox'
import { Grid } from './Grid'

export const FlexboxGridApp = () => {
  return (
    <>
    
        <section className='flex flex-wrap w-full bg-cyan-600/70 gap-3 p-2'>
            <Link to={'/flexbox'} className='px-5 py-3 text-3xl text-gray-100 cursor-pointer transition-all hover:bg-cyan-800 rounded-lg'>Flexbox</Link>
            <Link to={'/grid'} className='px-5 py-3 text-3xl text-gray-100 cursor-pointer transition-all hover:bg-cyan-800 rounded-lg'>Grid</Link>
        </section>

        <Routes>
            <Route path='/*' element={<Navigate to={'/flexbox'}/>} />
            <Route path='/flexbox' element={<Flexbox />} />
            <Route path='/grid' element={<Grid />} />
        </Routes>

    </>
  )
}
