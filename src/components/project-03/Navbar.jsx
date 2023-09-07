export const Navbar = ({showMenu, clickShowMenu}) => {
    
    let styles = showMenu ? 'translate-y-[100%] opacity-100' : '-translate-y-[25%]';


    return (
        <nav id="menu" className="flex relative items-center justify-between gap-5 font-roboto w-full bg-purple-600 sm:px-5">
            <div className="flex justify-between w-full h-full z-50 bg-purple-600 py-3 px-10">
                <p className="text-slate-200 font-bold text-3xl tracking-wide cursor-pointer hover:text-slate-400 transition-all">Navbar</p>
                <button onClick={clickShowMenu} className="h-10 w-10 flex justify-center items-center sm:hidden">
                    <div className={`absolute h-7 justify-between flex ${!showMenu ? 'opacity-100 scale-100' : 'opacity-0 scale-0'} flex-col gap-1 transition-all`}>
                        <div className="h-[5.5px] w-8 bg-white rounded-md content"></div>
                        <div className="h-[5.5px] w-8 bg-white rounded-md content"></div>
                        <div className="h-[5.5px] w-8 bg-white rounded-md content"></div>
                    </div>

                    <div className={`relative ${!showMenu ? 'opacity-0 scale-0' : 'opacity-100 scale-100'} flex justify-center items-center transition-all`}>
                        <div className="transition-all h-[5.5px] w-8 origin-center -rotate-45 bg-white rounded-md content"></div>
                        <div className="absolute origin-center rotate-45 h-[5.5px] w-8 bg-white rounded-md content"></div>
                    </div>
                </button>
            </div>

            <ul className={`list-none -z-0 absolute w-full text-center whitespace-nowrap left-0 bottom-0 transition-transform duration-300 ${styles} gap-1 sm:flex sm:w-fit sm:translate-y-0 sm:justify-start sm:relative sm:z-50 sm:opacity-100 sm:top-0 `}>
               <li className="px-5 py-2 bg-purple-400 sm:rounded-sm transition-all hover:bg-pink-400 cursor-pointer">Home</li>
               <li className="px-5 py-2 bg-purple-400 sm:rounded-sm transition-all hover:bg-pink-400 cursor-pointer">About me</li>
               <li className="px-5 py-2 bg-purple-400 sm:rounded-sm transition-all hover:bg-pink-400 cursor-pointer">Products</li>
            </ul>

        </nav>
    )
}