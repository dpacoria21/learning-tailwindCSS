import { Link, Route, Routes } from "react-router-dom"
import { BorderRing, BorderDivide, BorderOutline, BorderSettings, BorderRadius } from "./"

export const BordersApp = () => {
    return (
        <>
        
            <div className="flex bg-sky-500 items-center w-full">

                <Link className="rounded-md px-5 py-3 m-1 bg-blue-300 hover:bg-blue-600" to={'/border-radius'}>Border Radius</Link>
                <Link className="rounded-md px-5 py-3 m-1 bg-blue-300 hover:bg-blue-600" to={'/border-settings'}>Border Settings</Link>
                <Link className="rounded-md px-5 py-3 m-1 bg-blue-300 hover:bg-blue-600" to={'/border-ring'}>Border Ring</Link>
                <Link className="rounded-md px-5 py-3 m-1 bg-blue-300 hover:bg-blue-600" to={'/border-outline'}>Border Outline</Link>
                <Link className="rounded-md px-5 py-3 m-1 bg-blue-300 hover:bg-blue-600" to={'/border-divide'}>Border Divide</Link>

            </div>

            <Routes>
                <Route path="/border-radius" element={<BorderRadius />} />
                <Route path="/border-settings" element={<BorderSettings />} />
                <Route path="/border-ring" element={<BorderRing />} />
                <Route path="/border-outline" element={<BorderOutline />} />
                <Route path="/border-divide" element={<BorderDivide />} />
            </Routes>

        </>
    )
}