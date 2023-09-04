import { useDarkMode } from "./useDarkMode"

export const DarkMode = () => {

    const{changeTheme} = useDarkMode();

    return (
        <section className="flex justify-center p-5">

            <button onClick={changeTheme} className="text-3xl dark:bg-indigo-950 dark:text-yellow-300 font-bold font-roboto text-slate-200 px-6 py-2 bg-indigo-500 rounded-md text-center w-fit">
                Dark Mode
            </button> 
        
        </section>
    )
}