import 'bulma/css/bulma.css';
import quotes from './quotes'
import './app.css';
import { useState } from 'react';

import DailyQuote from './DailyQuote';
function getDailyQuote(){
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