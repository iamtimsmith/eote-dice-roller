import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import Counter from './components/counter';
import Diamond from './components/diamond';
import Hexagon from './components/hexagon';
import Square from './components/square';
import roll from './utils/roll';
import './assets/style.css';

const App = () => {
  const [green, setGreen] = useState<number>(0);
  const [purple, setPurple] = useState<number>(0);
  const [yellow, setYellow] = useState<number>(0);
  const [red, setRed] = useState<number>(0);
  const [blue, setBlue] = useState<number>(0);
  const [black, setBlack] = useState<number>(0);
  const [white, setWhite] = useState<number>(0);
  const [results, setResults] = useState<any>({ result: [], net: '' });
  const [theme, setTheme] = useState<boolean>('light');

  const handleClick = () => {
    setResults(roll({ green, purple, yellow, red, blue, black, white }));
  };
  const handleClear = () => {
    setGreen(0);
    setPurple(0);
    setYellow(0);
    setRed(0);
    setBlue(0);
    setBlack(0);
    setWhite(0);
    setResults({ result: [], net: '' });
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || theme;
    setTheme(storedTheme);
    if (storedTheme === 'light') {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    }
  }, [theme]);

  return (
    <>
      <div className='container'>
        <h1>Star Wars EOTE Dice Roller</h1>
        <p className='intro-text'>
          Welcome to the dice rolling tool for Star Wars Edge of the Empire!
          This simple tool allows you to set your desired dice pool and roll. It
          has a light and dark mode and works on mobile devices as well. May the
          force be with you!
        </p>
        <button className='toggle-button' onClick={toggleTheme}>
          Join the {theme === 'light' ? 'dark' : 'light'} side
        </button>
        <div className={results.net ? `results rolled` : `results`}>
          <p className='symbols'>
            {results.result.map((res, id) => (
              <span key={`${res.symbol}_${id}`}>{res.symbol}</span>
            ))}
          </p>
          <p>Result: {results.net}</p>
        </div>
        <div className='dice-container'>
          <Diamond color='green' count={green} />
          <Diamond color='purple' count={purple} />
          <Hexagon color='yellow' count={yellow} />
          <Hexagon color='red' count={red} />
          <Square color='blue' count={blue} />
          <Square color='black' count={black} />
          <Hexagon color='white' count={white} />
        </div>
        <div className='form-grid'>
          <Counter label='Green' count={green} setCount={setGreen} />
          <Counter label='Purple' count={purple} setCount={setPurple} />
          <Counter label='Yellow' count={yellow} setCount={setYellow} />
          <Counter label='Red' count={red} setCount={setRed} />
          <Counter label='Blue' count={blue} setCount={setBlue} />
          <Counter label='Black' count={black} setCount={setBlack} />
          <Counter label='White' count={white} setCount={setWhite} />
          <button className='form-grid-button' onClick={handleClick}>
            Roll
          </button>
          <button className='form-grid-clear' onClick={handleClear}>
            Clear
          </button>
        </div>
      </div>
      <footer className='footer'>
        <p>
          Made with ❤️ by{' '}
          <a href='https://www.iamtimsmith.com' target='_blank'>
            Tim Smith
          </a>
          .
        </p>
      </footer>
    </>
  );
};

const root = createRoot(document.getElementById('app'));

root.render(<App />);
