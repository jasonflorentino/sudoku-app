import React, { useState } from 'react';

type Props = {
  children: React.ReactNode,
}

const ThemeControl: React.FC<Props> = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsDark(e.target.checked);
  }

  return (
    <div className={`${isDark ? 'dark' : ''} flex flex-col`}>
      <div className={"dark:bg-gray-900 text-xl flex justify-end items-center p-4"}>
        <label className="mr-1" htmlFor="themeToggle">{isDark ? "🌖" : "🌒"}</label>
        <input 
          className="m-2"
          type="checkbox" 
          id="themeToggle" 
          name="theme" 
          value="dark" 
          checked={isDark} 
          onChange={handleChange}
        />
      </div>
      {children}
    </div>
  )
}

export default ThemeControl;