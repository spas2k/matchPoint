import React from 'react'

export default function Settings({theme, setTheme}) {
const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <div>
       <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}
