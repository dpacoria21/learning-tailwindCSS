import React from 'react'

export const TextBreaks = () => {
  return (
    <>
    
        <section className='flex flex-wrap bg-gray-700 w-full p-5 gap-4'>

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
            <div className='w-1/4 px-6 py-5 bg-slate-300 rounded-xl hyphens-auto'>
                {`Lorem ipsum, dolor sit amet consecteturasdfasdfasdfadsfasdfadsfasdfsdaffdfdadsdfsfsdfs adipisicing elit. Rerum facilis nisi aliquid qui. Enim rem consequatur commodi quo dignissimos dolor iste minus expedita harum praesentium. Dignissimos tempore soluta maiores eligendi! Lorem ipsum dolor sit, amet consecteturingateismo adipisicing elit. Explicabo repudiandae, voluptatem fugiat veniam iusto vero eveniet ducimus quas pariatur ex tempore. Aliquam quaerat repellendus, officia dignissimos nam ea obcaecati delectus.`}
            </div>
            <div className='w-1/4 px-6 py-5 bg-slate-300 rounded-xl break-words'>
                {`Lorem ipsum, dolor sit amet consecteturasdfasdfasdfadsfasdfadsfasdfsdaffdfdadsdfsfsdfs adipisicing elit. Rerum facilis nisi aliquid qui. Enim rem consequatur commodi quo dignissimos dolor iste minus expedita harum praesentium. Dignissimos tempore soluta maiores eligendi! Lorem ipsum dolor sit, amet consecteturingateismo adipisicing elit. Explicabo repudiandae, voluptatem fugiat veniam iusto vero eveniet ducimus quas pariatur ex tempore. Aliquam quaerat repellendus, officia dignissimos nam ea obcaecati delectus.`}
            </div>
            <div className='w-1/4 px-6 py-5 bg-slate-300 rounded-xl break-all'>
                {`Lorem ipsum, dolor sit amet consecteturasdfasdfasdfadsfasdfadsfasdfsdaffdfdadsdfsfsdfs adipisicing elit. Rerum facilis nisi aliquid qui. Enim rem consequatur commodi quo dignissimos dolor iste minus expedita harum praesentium. Dignissimos tempore soluta maiores eligendi! Lorem ipsum dolor sit, amet consecteturingateismo adipisicing elit. Explicabo repudiandae, voluptatem fugiat veniam iusto vero eveniet ducimus quas pariatur ex tempore. Aliquam quaerat repellendus, officia dignissimos nam ea obcaecati delectus.`}
            </div>
            <div className='w-1/4 px-6 py-5 bg-slate-300 rounded-xl break-keep'>
                {`Lorem ipsum, dolor sit amet consecteturasdfasdfasdfadsfasdfadsfasdfsdaffdfdadsdfsfsdfs adipisicing elit. Rerum facilis nisi aliquid qui. Enim rem consequatur commodi quo dignissimos dolor iste minus expedita harum praesentium. Dignissimos tempore soluta maiores eligendi! Lorem ipsum dolor sit, amet consecteturingateismo adipisicing elit. Explicabo repudiandae, voluptatem fugiat veniam iusto vero eveniet ducimus quas pariatur ex tempore. Aliquam quaerat repellendus, officia dignissimos nam ea obcaecati delectus.`}
            </div>
            <div className='w-1/4 px-6 py-5 bg-slate-300 rounded-xl hyphens-auto'>
                Lorem ipsum, dolor sit amet consecteturasdfasdfasdfadsfasdfadsfasdfsdaffdfdadsdfsfsdfs adipisicing elit. Rerum facilis nisi aliquid qui. Enim rem consequatur commodi quo dignissimos dolor iste minus expedita harum praesentium. Dignissimos <a href="#" className="text-blue-500 after:content-['_↗']">Pro Display XDR</a> tempore soluta maiores eligendi! Lorem ipsum dolor sit, amet consecteturingateismo adipisicing elit. Explicabo repudiandae, <a href="#" before="## $$ @@" className='text-red-700 before:content-[attr(before)]'>saludos mascota</a> voluptatem fugiat veniam iusto vero eveniet ducimus quas pariatur ex tempore. Aliquam quaerat repellendus, officia dignissimos nam ea obcaecati delectus.
            </div>

        </section>

    </>
  )
}
