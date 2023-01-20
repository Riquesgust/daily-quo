import 'bulma/css/bulma.css';
import './app.css';
import { useState } from 'react';

import DailyQuote from './DailyQuote';
function getDailyQuote(){
    const quotes = [
            {
                quote: "I'm sorry, I'm afraid I can't do that.",
                author: "Jane Doe"
            }, 
            {
                quote: "I know that i know nothing.", 
                author: "Plato"
            },
            {
                quote: "The greatest glory in living lies not in never falling, but in rising every time we fall", 
                author: "Nelson Mandela"
            },
            {
                quote: "The way to get started is to quit talking and begin doing.", 
                author: "Walt Disney"
            },
            {
                quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.", 
                author: "Steve Jobs"
            },
            {
                quote: "If life were predictable it would cease to be life, and be without flavor.", 
                author: "Eleanor Roosevelt"
            },
            {
                quote: "If you look at what you have in life, youll always have more. If you look at what you don't have in life, youll never have enough.", 
                author: "Oprah Winfrey"
            },
            {
                quote: "If you set your goals ridiculously high and its a failure, you will fail above everyone elses success.", 
                author: "James Cameron"
            },
    ];

    return quotes[Math.floor(Math.random()*quotes.length)];
}

function App(){
    const [quotes, setQuotes] = useState(getDailyQuote());

    const handleClick = () => {
        setQuotes(getDailyQuote());
    }
    return (
        <div className = "app">
            <button onClick={handleClick}>Get Yours!</button>

                <div className = "quotes">
                    <DailyQuote 
                        text={quotes.quote} 
                        author={quotes.author}
                    />
                </div>

            
        </div>
    );
}

export default App;