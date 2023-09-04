import { useState } from "react"

const html = document.querySelector('html');

export const useDarkMode = () => {

    const [isDark, setIsDark] = useState(false);

    const changeTheme = () => {
        setIsDark(!isDark);
    }
    
    if(isDark) {
        html.classList.add('dark');
    }else {
        html.classList.remove('dark');
    }

    return {
        isDark,
        changeTheme
    }
}