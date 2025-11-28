import { useState, useEffect, createContext, useContext } from 'react';
import './App.css';
import Header from './components/layout/Header/Header';

// Theme Context Type
interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

// Create Theme Context
export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});

// Custom hook to use theme
export const useTheme = () => useContext(ThemeContext);

function App() {
  const [theme, setTheme] = useState<string>('light');

  // Theme toggle function
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  // Set initial theme on mount
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="app">
        <Header />
        <main>
          <section id="home">
            <div className="container">
              <h1>Harsha Portfolio</h1>
              <p>Development in progress...</p>
            </div>
          </section>
        </main>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
