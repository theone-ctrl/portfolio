import React, { useState } from 'react';
import { Palette, Check } from 'lucide-react';
import { useTheme, themes } from '../contexts/ThemeContext';

const ThemeSwitcher = () => {
  const { currentTheme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleThemeChange = (themeName) => {
    setTheme(themeName);
    setIsOpen(false);
  };

  return (
    <div className="theme-switcher">
      <button 
        className="theme-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Switch theme"
      >
        <Palette size={20} />
      </button>
      
      {isOpen && (
        <div className="theme-dropdown">
          <div className="theme-header">
            <span>Choose Theme</span>
          </div>
          <div className="theme-options">
            {Object.entries(themes).map(([key, theme]) => (
              <button
                key={key}
                className={`theme-option ${currentTheme === key ? 'active' : ''}`}
                onClick={() => handleThemeChange(key)}
              >
                <div 
                  className="theme-preview"
                  style={{
                    background: theme.background,
                    border: `2px solid ${theme.accent}`
                  }}
                ></div>
                <span className="theme-name">{theme.name}</span>
                {currentTheme === key && <Check size={16} />}
              </button>
            ))}
          </div>
        </div>
      )}
      
      <style jsx>{`
        .theme-switcher {
          position: fixed;
          top: 2rem;
          right: 2rem;
          z-index: 1000;
        }
        
        .theme-button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background: var(--theme-cardBg);
          border: 1px solid var(--theme-border);
          border-radius: 50%;
          color: var(--theme-textSecondary);
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }
        
        .theme-button:hover {
          color: var(--theme-textPrimary);
          border-color: var(--theme-accent);
          transform: scale(1.05);
        }
        
        .theme-dropdown {
          position: absolute;
          top: 60px;
          right: 0;
          background: var(--theme-cardBg);
          border: 1px solid var(--theme-border);
          border-radius: 12px;
          padding: 1rem;
          min-width: 200px;
          backdrop-filter: blur(20px);
          animation: slideDown 0.3s ease;
        }
        
        .theme-header {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--theme-textPrimary);
          margin-bottom: 0.8rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid var(--theme-border);
        }
        
        .theme-options {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .theme-option {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0.6rem;
          background: transparent;
          border: 1px solid transparent;
          border-radius: 8px;
          color: var(--theme-textSecondary);
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
        }
        
        .theme-option:hover {
          background: rgba(var(--theme-accent), 0.1);
          border-color: var(--theme-accent);
          color: var(--theme-textPrimary);
        }
        
        .theme-option.active {
          background: rgba(var(--theme-accent), 0.2);
          border-color: var(--theme-accent);
          color: var(--theme-textPrimary);
        }
        
        .theme-preview {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        
        .theme-name {
          flex: 1;
          text-align: left;
          font-size: 0.9rem;
          font-weight: 500;
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (max-width: 768px) {
          .theme-switcher {
            top: 1rem;
            right: 1rem;
          }
          
          .theme-button {
            width: 45px;
            height: 45px;
          }
          
          .theme-dropdown {
            right: -1rem;
            min-width: 180px;
          }
        }
      `}</style>
    </div>
  );
};

export default ThemeSwitcher;