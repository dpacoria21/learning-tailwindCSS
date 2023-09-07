import { useState } from "react"
import { Navbar } from "./components/project-03/Navbar"

export const App = () => {
    
    const [showMenu, setShowMenu] = useState(false);

    const clickShowMenu = () => {
        setShowMenu(!showMenu);
    }

    const clickOutside = ({target}) => {
        if(!!!target.closest('#menu')) setShowMenu(false);
    }

    return (
        <>
        
            <div className='h-screen' onClick={clickOutside}>
                <Navbar showMenu={showMenu} clickShowMenu={clickShowMenu}/> 
                <div className='h-full -z-50 bg-purple-800'></div>
            </div>
        
        </>
    )
}