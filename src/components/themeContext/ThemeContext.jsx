import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    let [theme, setTheme] = useState('light')


    useEffect(() => {
      const savedTheme = localStorage.getItem('light')
      if(savedTheme){
        setTheme(savedTheme)
      }
    }, [])

    const toggaleTheme = () => {
      setTheme((preTheme) => {
       const newTheme =  preTheme === 'light' ? 'dark' : 'light'
        localStorage.setItem('newTheme', theme)
        return newTheme
      })
    }

    return(
      <ThemeContext.Provider value={{theme, toggaleTheme}}>
        {children}
      </ThemeContext.Provider>
    )
}