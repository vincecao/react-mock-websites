import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isLightTheme: theme === 'light',
        toggleTheme: () => setTheme(theme === 'light' ? 'dark' : 'light')
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
