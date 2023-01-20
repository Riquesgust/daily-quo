import { useState } from 'react';

import './DailyQuote.css'
import authorImages from './authorImages';


function DailyQuote({text, author}){
    text = '"'+text+'"';
    const media = '@'+author.replace(/\s/g, "");
    const authorImage = authorImages[author.replace(/\s/g, "").toLowerCase()];
    const [likes, setLikes] = useState(0);
    const [shares, setShares] = useState(0);

    const handleLike = () => {
        setLikes(likes + 1);
    }
    const handleShare = ()=> {
        setShares(shares+1);
    }
    return(

    <div className="card">
        <div className="card-content">
            <blockquote>
            <p>{text}</p>
            </blockquote>
        {authorImage ? <img src={authorImage} alt={`Author ${author}`} className="card-avatar" /> : <p>Image not found.</p>}
        <p className="card-author">{author}</p>
    </div>
    <div className="card-actions">
        <button className="like-button" onClick = {handleLike}>Like <span>{likes}</span></button>
        <button className="share-button" onClick = {handleShare}>Share <span>{shares}</span></button>
    </div>
</div>

    );
}

export default DailyQuote;