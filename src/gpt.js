import 'bulma/css/bulma.css';
import './app.css';
import { useState } from 'react';
import DailyQuote from './DailyQuote';
import quotes from './quotes';

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function App() {
  const [quote, setQuote] = useState(getRandomQuote());
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [fontSize, setFontSize] = useState('16px');
  const [textColor, setTextColor] = useState('black');
  const [likes, setLikes] = useState(0);
  const [shares, setShares] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleClick = () => {
    setQuote(getRandomQuote());
    setLikes(0);
    setShares(0);
  }

  const handleLike = () => {
    setLikes(likes + 1);
  }

  const handleShare = () => {
    setShares(shares + 1);
  }

  const handleShake = () => {
    setQuote(getRandomQuote());
  }

  const handleBackgroundColorChange = (color) => {
    setBackgroundColor(color);
  }

  const handleFontSizeChange = (size) => {
    setFontSize(size);
  }

  const handleTextColorChange = (color) => {
    setTextColor(color);
  }

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className="app" style={{ backgroundColor, color: textColor }}>
      <button onClick={handleClick}>Get Yours!</button>
      <button onClick={handleDarkModeToggle}>Toggle Dark mode</button>
      <div className="color-picker">
        <label>Background Color:</label>
        <input type="color" onChange={e => handleBackgroundColorChange(e.target.value)} />
      </div>
      <div className="font-size-picker">
        <label>Font Size:</label>
        <input type="range" min="12" max="24" onChange={e => handleFontSizeChange(`${e.target.value}px`)} />
      </div>
      <div className="text-color-picker">
        <label>Text Color:</label>
        <input type="color" onChange={e => handleTextColorChange(e.target.value)} />
      </div>
      <div className="quotes" style={{ fontSize }}>
        <DailyQuote
          text={quote.quote}
          author={quote.author}
          likes={likes}
          shares={shares}
          onLike={handleLike}
          onShare={handleShare}
          onShake={handleShake}
      />
  </div>
</div>
);
