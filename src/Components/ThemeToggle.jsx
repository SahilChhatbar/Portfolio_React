import React, { useState, useEffect } from 'react';

function ThemeToggle() {
  // Initialize theme state with local storage or default to 'dark'
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark'; // Default to 'dark' theme
  });

  useEffect(() => {
    // Apply the current theme to the document
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      title={theme === 'dark' ? 'Lumos!' : 'Nox!'}
      style={{
        backgroundColor: theme === 'light' ? 'black' : 'whitesmoke',
        color: theme === 'light' ? 'white' : 'black',
      }}
      className="fixed md:text-xl top-20 right-4 p-1.5 rounded-full"
    >
      {theme === 'light' ? '◐' : '◐'}
    </button>
  );
}

export default ThemeToggle;
