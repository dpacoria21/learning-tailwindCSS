import { useState } from "react"

export const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);
    
    const clickShowMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <nav className="flex items-center justify-between gap-5 font-roboto w-full bg-purple-600 py-3 px-16">
            <p className="text-slate-300 font-bold text-3xl tracking-wide cursor-pointer hover:text-slate-400 transition-all">Navbar</p>

            <button onClick={clickShowMenu} className="h-10 w-10 flex justify-center items-center">
                <div className={`absolute h-7 justify-between flex ${showMenu ? 'opacity-100' : 'opacity-0'} flex-col gap-1 transition-all`}>
                    <div className="h-[5.5px] w-8 bg-white rounded-md content"></div>
                    <div className="h-[5.5px] w-8 bg-white rounded-md content"></div>
                    <div className="h-[5.5px] w-8 bg-white rounded-md content"></div>
                </div>

                <div className={`relative ${showMenu ? 'opacity-0' : 'opacity-100'} flex justify-center items-center transition-all`}>
                    <div className="transition-all h-[5.5px] w-8 origin-center -rotate-45 bg-white rounded-md content"></div>
                    <div className="absolute origin-center rotate-45 h-[5.5px] w-8 bg-white rounded-md content"></div>
                </div>
            </button>

            <ul className="list-none hidden gap-1 sm:flex">
               <li className="px-5 py-1 bg-pink-200 rounded-sm transition-all hover:bg-pink-400 cursor-pointer">Home</li>
               <li className="px-5 py-1 bg-pink-200 rounded-sm transition-all hover:bg-pink-400 cursor-pointer">About me</li>
               <li className="px-5 py-1 bg-pink-200 rounded-sm transition-all hover:bg-pink-400 cursor-pointer">Products</li>
            </ul>


        </nav>
    )
}