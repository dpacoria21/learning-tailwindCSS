import { useState } from "react"

const html = document.querySelector('html');

export const useDarkMode = () => {

    const [isDark, setIsDark] = useState(false);

    if(isDark) {
        html.classList.remove('dark');
    }else {
        html.classList.add('dark');
    }

    const changeTheme = () => {
        setIsDark(!isDark);
    }

    return {
        changeTheme
    }
}