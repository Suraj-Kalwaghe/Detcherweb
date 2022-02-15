import React from 'react';

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const userDefaultTheme = localStorage.getItem('Theme');
  const [theme, setTheme] = React.useState(
    userDefaultTheme !== null ? localStorage.getItem('Theme') : 'dark'
  );

  React.useEffect(() => {
    const root = window.document.documentElement;
    localStorage.setItem('Theme', theme);
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    root.classList.add(theme === 'dark' ? 'dark' : 'light');
  }, [theme]);

  const themeToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ themeToggle: themeToggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
