import React from 'react'

export const BorderDivide = () => {
  return (
    <>
    
        <section className="flex gap-4 flex-wrap w-full p-5 bg-gray-600">
            <div className="flex divide-x divide-red-600">
                <div className="w-16 h-16 bg-gray-400 flex items-center justify-center">01</div>
                <div className="w-16 h-16 bg-gray-400 flex items-center justify-center">02</div>
                <div className="w-16 h-16 bg-gray-400 flex items-center justify-center">03</div>
            </div>
            <div className="grid grid-cols-3 divide-x-4 divide-dotted divide-red-600">
                <div className="w-16 h-16 bg-gray-500 flex items-center justify-center">01</div>
                <div className="w-16 h-16 bg-gray-500 flex items-center justify-center">02</div>
                <div className="w-16 h-16 bg-gray-500 flex items-center justify-center">03</div>
            </div>
            <div className="grid grid-rows-3 divide-y-4 divide-double divide-red-600">
                <div className="w-16 h-16 bg-gray-500 flex items-center justify-center">01</div>
                <div className="w-16 h-16 bg-gray-500 flex items-center justify-center">02</div>
                <div className="w-16 h-16 bg-gray-500 flex items-center justify-center">03</div>
            </div>
            <div className="flex flex-col-reverse divide-y divide-y-reverse divide-dashed divide-red-600 hover:divide-red-200">
                <div className="w-16 h-16 bg-gray-400 flex items-center justify-center">01</div>
                <div className="w-16 h-16 bg-gray-400 flex items-center justify-center">02</div>
                <div className="w-16 h-16 bg-gray-400 flex items-center justify-center">03</div>
            </div>

        </section>
    
    </>
  )
}
