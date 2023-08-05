export const SpaceBetween = () => {
  return (
    <>
    
      <div className="m-10 flex space-x-3">
        <div className="px-5 py-3 bg-purple-500 rounded-md">1</div>
        <div className="px-5 py-3 bg-purple-500 rounded-md">2</div>
        <div className="px-5 py-3 bg-purple-500 rounded-md">3</div>
      </div>

      <br />

      <div className="flex flex-col space-y-4 m-10">
        <div className="px-5 py-3 bg-purple-500 rounded-md">1</div>
        <div className="px-5 py-3 bg-purple-500 rounded-md">2</div>
        <div className="px-5 py-3 bg-purple-500 rounded-md">3</div>
      </div>

      <div className="m-10 flex flex-row-reverse space-x-4 space-x-reverse">
        <div className="px-5 py-3 bg-purple-500 rounded-md">1</div>
        <div className="px-5 py-3 bg-purple-500 rounded-md">2</div>
        <div className="px-5 py-3 bg-purple-500 rounded-md">3</div>
      </div>
    
      <div className="flex flex-col m-10 space-y-[15px]">
        <div className="px-6 py-4 bg-red-500 rounded-sm">1</div>
        <div className="px-6 py-4 bg-red-500 rounded-sm">2</div>
        <div className="px-6 py-4 bg-red-500 rounded-sm">3</div>
      </div>

    </>
  )
}
