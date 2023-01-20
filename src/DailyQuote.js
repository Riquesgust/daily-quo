import { useState } from 'react';

import eleanorroosevelt from './images/eleanorroosevelt.jpg'
import jamescameron from './images/jamescameron.jpg';
import nelsonmandela from './images/nelsonmandela.jpg';
import oprahwinfrey from './images/oprahwinfrey.jpg';
import plato from './images/plato.jpg';
import stevejobs from './images/stevejobs.jpg';
import waltdisney from './images/waltdisney.jpg';
import janedoe from './images/janedoe.jpg';
import tu from './images/tu.png';
import sh from './images/sh.png';

const jpgMap ={
    eleanorroosevelt,
    jamescameron,
    nelsonmandela,
    oprahwinfrey,
    plato,
    stevejobs,
    waltdisney,
    janedoe
}

function DailyQuote({text, author}){
    const media = '@'+author.replace(/\s/g, "");
    const img = author.replace(/\s/g, "").toLowerCase();
    const [likes, setLikes] = useState(0);
    const [shares, setShares] = useState(0);

    const handleLike = () => {
        setLikes(likes + 1);
    }
    const handleShares = ()=> {
        setShares(shares+1);
    }
    return(

        <div className = "card">
            <div className = "card-content">
                <p className = "title">
                    {text}
                </p>
                <div className = "card-content">
                    <div className = 'media'>
                        <div className = "media-left">
                            <figure className = "image is-48x48">
                                <img 
                                    className = "is-rounded"
                                    src = {jpgMap[img]}
                                    alt = {author}
                                />
                            </figure>
                        </div>
                        <div className = "media-content">
                            <p className = "title is-4">
                                {author}
                            </p>
                            <p className = "subtitle is-6">
                                {media}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
                <div className = "card-footer">
                    <p className = "card-footer-item" onClick = {handleLike}>
                        <span>
                            {likes}
                        </span>
                        <span>
                            <figure className = "image is-24x24">
                                <img 
                                    className = "is-rounded"
                                    src = {tu}
                                    alt = "thumbs up"
                                />
                            </figure>    
                        </span>
                    </p>
                    <p className = "card-footer-item" onClick = {handleShares}>

                        <span>
                            {shares}
                        </span>
                        <span>
                            <figure className = "image is-24x24">
                                <img 
                                    className = "is-rounded"
                                    src = {sh}
                                    alt = "Share"
                                />
                            </figure>    
                        </span>
                    </p>
                </div>
        </div>

    );
}

export default DailyQuote;