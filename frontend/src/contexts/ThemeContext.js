import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const themes = {
  dark: {
    name: 'Dark',
    background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
    cardBg: 'rgba(26, 26, 26, 0.8)',
    textPrimary: '#ffffff',
    textSecondary: '#b0b0b0',
    textMuted: '#909090',
    accent: '#606060',
    border: '#404040',
    particle: 'rgba(99, 99, 99, 0.4)',
  },
  light: {
    name: 'Light',
    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
    cardBg: 'rgba(255, 255, 255, 0.9)',
    textPrimary: '#212529',
    textSecondary: '#495057',
    textMuted: '#6c757d',
    accent: '#007bff',
    border: '#dee2e6',
    particle: 'rgba(0, 123, 255, 0.3)',
  },
  purple: {
    name: 'Purple',
    background: 'linear-gradient(135deg, #1a0a2e 0%, #16213e 100%)',
    cardBg: 'rgba(26, 10, 46, 0.8)',
    textPrimary: '#ffffff',
    textSecondary: '#c8b6ff',
    textMuted: '#a78bfa',
    accent: '#8b5cf6',
    border: '#6366f1',
    particle: 'rgba(139, 92, 246, 0.4)',
  },
  ocean: {
    name: 'Ocean',
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    cardBg: 'rgba(15, 23, 42, 0.8)',
    textPrimary: '#f1f5f9',
    textSecondary: '#94a3b8',
    textMuted: '#64748b',
    accent: '#0ea5e9',
    border: '#334155',
    particle: 'rgba(14, 165, 233, 0.4)',
  }
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('portfolio-theme', currentTheme);
    
    // Apply CSS custom properties
    const theme = themes[currentTheme];
    const root = document.documentElement;
    
    Object.entries(theme).forEach(([key, value]) => {
      if (key !== 'name') {
        root.style.setProperty(`--theme-${key}`, value);
      }
    });
  }, [currentTheme]);

  const setTheme = (themeName) => {
    if (themes[themeName]) {
      setCurrentTheme(themeName);
    }
  };

  const value = {
    currentTheme,
    setTheme,
    theme: themes[currentTheme],
    themes: Object.keys(themes)
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};