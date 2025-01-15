// src/themeContext.js
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState(null);
    const resetTheme = () => {
      setCurrentTheme(null);
    };
    return (
      <ThemeContext.Provider value={{ currentTheme, setCurrentTheme, resetTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };