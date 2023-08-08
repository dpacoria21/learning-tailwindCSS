export const ZisingApp = () => {
    return(
        <>
        
            <section className="flex flex-col gap-5 p-4 w-scree h-screen bg-pink-400">
                <div className="flex flex-col gap-3 w-full">
                    <div className="w-24 bg-gray-700 h-6 rounded-lg"></div>
                    <div className="w-48 bg-gray-700 h-6 rounded-lg"></div>
                    <div className="w-72 bg-gray-700 h-6 rounded-lg"></div>
                    <div className="w-96 bg-gray-700 h-6 rounded-lg"></div>
                </div>
                <div className="flex gap-3 w-full">
                    <div className="w-1/4 bg-gray-700 h-6 rounded-lg"></div>
                    <div className="w-3/4 bg-gray-700 h-6 rounded-lg"></div>
                </div>
                <div className="flex gap-3 w-full">
                    <div className="w-2/4 bg-gray-700 h-6 rounded-lg"></div>
                    <div className="w-2/4 bg-gray-700 h-6 rounded-lg"></div>
                </div>
                <div className="flex gap-3 w-full">
                    <div className="w-full bg-gray-700 h-6 rounded-lg"></div>
                </div>
            </section>
        
        </>
    )
}