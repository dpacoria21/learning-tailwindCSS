import React from 'react'

export const TextStyles = () => {
  return (
    <>
        <section className='flex flex-col items-center w-full space-y-10 bg-slate-400 py-5'>
            <div className='w-3/4 bg-gray-200 rounded-md py-8 px-4'>
                <p className='text-left  text-fuchsia-400 underline decoration-black decoration-wavy underline-offset-8 uppercase'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ab perferendis vitae voluptates dolores amet sed aliquid hic voluptatum assumenda? Ad mollitia perspiciatis saepe suscipit labore harum possimus sunt libero.</p>
            </div>

            <div className='w-3/4 bg-gray-200 rounded-md py-8 px-4 text-slate-400 no-underline'>
                <p className='text-center lowercase'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ab perferendis vitae voluptates dolores amet sed aliquid hic voluptatum assumenda? Ad mollitia perspiciatis saepe suscipit labore harum possimus sunt libero.</p>
            </div>

            <div className='w-3/4 bg-gray-200 rounded-md py-8 px-4 text-transparent'>
                <p className='text-right'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ab perferendis vitae voluptates dolores amet sed aliquid hic voluptatum assumenda? Ad mollitia perspiciatis saepe suscipit labore harum possimus sunt libero.</p>
            </div>

            <div className='w-3/4 bg-gray-200 rounded-md py-8 px-4 '>
                <p className='text-justify text-teal-400 underline decoration-double decoration-2 underline-offset-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ab perferendis vitae voluptates dolores amet sed aliquid hic voluptatum assumenda? Ad mollitia perspiciatis saepe suscipit labore harum possimus sunt libero.</p>
            </div>

            <div className='w-3/4 bg-gray-200 rounded-md py-8 px-4 '>
                <p className='text-start text-blue-500 indent-8 overline decoration-green-600/70 decoration-dashed decoration-4 normal-case'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ab perferendis vitae voluptates dolores amet sed aliquid hic voluptatum assumenda? Ad mollitia perspiciatis saepe suscipit labore harum possimus sunt libero.</p>
            </div>

            <div className='w-3/4 bg-gray-200 rounded-md py-8 px-4'>
                <p className='text-end text-amber-400 line-through decoration-red-500 decoration-dotted decoration-8 capitalize'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ab perferendis vitae voluptates dolores amet sed aliquid hic voluptatum assumenda? Ad mollitia perspiciatis saepe suscipit labore harum possimus sunt libero.</p>
            </div>

            <div className='w-3/4 bg-gray-200 rounded-md py-8 px-4 '>
                <p className='text-end text-emerald-400 hover:underline truncate'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ab perferendis vitae voluptates dolores amet sed aliquid hic voluptatum assumenda? Ad mollitia perspiciatis saepe suscipit labore harum possimus sunt libero.</p>
            </div>

            <div className='w-3/4 bg-gray-200 rounded-md py-8 px-4 '>
                <p className='text-end text-emerald-400 hover:underline text-ellipsis overflow-hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ab perferendis vitae voluptatesasdfasdfadsfasdfasdfsadfdasfasdfdsafadsradsafdasfasdffdfdsfasdfsadffadsfsadfasfsafasdfsadfdfadsfsadfsadfsafdasf dolores amet sed aliquid hic voluptatum assumenda? Ad mollitia perspiciatis saepe suscipit labore harum possimus sunt libero.</p>
            </div>

            <div className='w-3/4 bg-gray-200 rounded-md py-8 px-4 '>
                <p className='text-end text-emerald-400 hover:underline text-clip overflow-hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ab perferendis vitae voluptatesasdfasdfadsfasdfasdfsadfdasfasdfdsafadsradsafdasfasdffdfdsfasdfsadffadsfsadfasfsafasdfsadfdfadsfsadfsadfsafdasf dolores amet sed <span className='align-super'>3</span> aliquid hic <span className='align-sub'>4</span>voluptatum assumenda? Ad mollitia perspiciatis saepe suscipit labore harum possimus sunt libero.</p>
            </div>

            <div className='w-3/4 bg-gray-200 rounded-md py-8 px-4'>
                <p className='text-end text-amber-400 line-through decoration-red-500 capitalize'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ab perferendis vitae voluptates dolores <span className='align-text-middle'>amigos mios</span> amet sed aliquid hic voluptatum assumenda? Ad mollitia perspiciatis saepe suscipit labore harum possimus sunt libero.</p>
            </div>
            
        </section>
    
    </>
  )
}
