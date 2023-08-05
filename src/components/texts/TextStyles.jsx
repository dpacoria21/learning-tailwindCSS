import React from 'react'

export const TextStyles = () => {
  return (
    <>
        <section className='flex flex-col items-center w-full space-y-10 bg-slate-400 py-5'>
            <div className='w-3/4 bg-gray-200 rounded-md py-8 px-4'>
                <p className='text-left  text-fuchsia-400 underline decoration-black decoration-wavy underline-offset-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ab perferendis vitae voluptates dolores amet sed aliquid hic voluptatum assumenda? Ad mollitia perspiciatis saepe suscipit labore harum possimus sunt libero.</p>
            </div>
            <div className='w-3/4 bg-gray-200 rounded-md py-8 px-4 text-slate-400 no-underline'>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ab perferendis vitae voluptates dolores amet sed aliquid hic voluptatum assumenda? Ad mollitia perspiciatis saepe suscipit labore harum possimus sunt libero.</p>
            </div>
            <div className='w-3/4 bg-gray-200 rounded-md py-8 px-4 text-transparent'>
                <p className='text-right'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ab perferendis vitae voluptates dolores amet sed aliquid hic voluptatum assumenda? Ad mollitia perspiciatis saepe suscipit labore harum possimus sunt libero.</p>
            </div>
            <div className='w-3/4 bg-gray-200 rounded-md py-8 px-4 '>
                <p className='text-justify text-teal-400 underline decoration-double decoration-2 underline-offset-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ab perferendis vitae voluptates dolores amet sed aliquid hic voluptatum assumenda? Ad mollitia perspiciatis saepe suscipit labore harum possimus sunt libero.</p>
            </div>
            <div className='w-3/4 bg-gray-200 rounded-md py-8 px-4 '>
                <p className='text-start text-blue-500 overline decoration-green-600/70 decoration-dashed decoration-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ab perferendis vitae voluptates dolores amet sed aliquid hic voluptatum assumenda? Ad mollitia perspiciatis saepe suscipit labore harum possimus sunt libero.</p>
            </div>
            <div className='w-3/4 bg-gray-200 rounded-md py-8 px-4'>
                <p className='text-end text-amber-400 line-through decoration-red-500 decoration-dotted decoration-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ab perferendis vitae voluptates dolores amet sed aliquid hic voluptatum assumenda? Ad mollitia perspiciatis saepe suscipit labore harum possimus sunt libero.</p>
            </div>
            <div className='w-3/4 bg-gray-200 rounded-md py-8 px-4 '>
                <p className='text-end text-emerald-400 hover:underline '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ab perferendis vitae voluptates dolores amet sed aliquid hic voluptatum assumenda? Ad mollitia perspiciatis saepe suscipit labore harum possimus sunt libero.</p>
            </div>
        </section>
    
    </>
  )
}
