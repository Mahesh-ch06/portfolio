import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = React.memo(({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return false;
    
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    
    // Use requestAnimationFrame for smooth theme transitions
    requestAnimationFrame(() => {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      if (isDark) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    });
  }, [isDark]);

  // Memoized toggle function
  const toggleTheme = useCallback(() => {
    setIsDark(prev => !prev);
  }, []);

  // Listen for system theme changes with performance optimization
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      // Only update if no explicit theme is saved
      if (!localStorage.getItem('theme')) {
        setIsDark(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({
    isDark,
    toggleTheme,
  }), [isDark, toggleTheme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
});

ThemeProvider.displayName = 'ThemeProvider';

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};