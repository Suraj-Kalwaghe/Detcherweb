import React from 'react';

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = React.useState(localStorage.getItem('DarkMode'));
  const colorTheme = isDark ? 'light' : 'dark';

  React.useEffect(() => {
    localStorage.setItem('DarkMode', !isDark);
  }, [isDark]);

  const themeToggle = () => {
    setIsDark(!isDark);
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(isDark ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ isDark: isDark, themeToggle: themeToggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
