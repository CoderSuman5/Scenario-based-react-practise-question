import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const ThemeToggleBtn = () => {
    const {theme,toggaleTheme} = useContext(ThemeContext)

  return (
    <div>
        <button
        onClick={toggaleTheme}
        style={{
            backgroundColor: theme === 'light' ? '#4CAF50' : '#ff9800',
            color: theme === 'light' ? '#fff' : '#000',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',

        }}
        >
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
    </div>
  )
}

export default ThemeToggleBtn