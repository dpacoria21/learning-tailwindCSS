import React from 'react'

export const TextBreaks = () => {
  return (
    <>
    
        <section className=' bg-gray-700 w-full p-5 space-y-10'>

            <div className='w-2/4 px-6 py-5 bg-slate-300 rounded-xl whitespace-normal'>Hey everyone!

It's almost 2022       and we still don't know if there       is aliens living among us, or do we? Maybe the person writing this is an alien.

You will never know.
                
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni aperiam expedita, voluptates illo libero quo assumenda, nostrum ad veritatis, eligendi voluptate. Veniam, vero dolor? Culpa sequi maiores adipisci dolorum eaque.
            </div>
            <div className='w-2/4 px-6 py-5 bg-slate-300 rounded-xl whitespace-pre overflow-auto'>{`Hey everyone!

It's almost 2022       and we still don't know if there       is aliens living among us, or do we? Maybe the person writing this is an alien.

You will never know.
                
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni aperiam expedita, voluptates illo libero quo assumenda, nostrum ad veritatis, eligendi voluptate. Veniam, vero dolor? Culpa sequi maiores adipisci dolorum eaque.`}
            </div>
            <div className='w-2/4 px-6 py-5 bg-slate-300 rounded-xl whitespace-pre-line'>
                {`Saludos Diego,
                
                Te hablamos desde la catedral de                   Chosica, estamos esperando por ver de lo que eres capaz
                
                Te esperamos`}
            </div>
            <div className='w-2/4 px-6 py-5 bg-slate-300 rounded-xl whitespace-pre-wrap'>
                {`Saludos Diego,
                
                Te            hablamos               desde la catedral de                   Chosica, estamos esperando por ver de lo que eres capaz.
                
                Te esperamos`}
            </div>
            <div className='w-2/4 px-6 py-5 bg-slate-300 rounded-xl whitespace-break-spaces'>
                {`Saludos Diego,
                
                Te hablamos                    desde la catedral de                   Chosica, estamos esperando por ver de lo que eres capaz.

                Te esperamos`}
            </div>

        </section>

    </>
  )
}
