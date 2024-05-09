import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setToggle(!toggle)
    //     }, 5000)

    //     return () => clearInterval(intervalId);
    // }, [])

    return (
        <ThemeContext.Provider value={{ handleToggle, toggle }}>
            {children}
        </ThemeContext.Provider>
    );
};
