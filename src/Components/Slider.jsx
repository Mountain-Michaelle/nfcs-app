import React from 'react';
import recommended from '../Assets/data/recommended';
import '../Assets/scss/Slider.css';
import Image from 'next/image';

const Slider = () => {

    const handleTextCut = (text, limit) => {
        const word = text.split(" ")
        const truncateWords = word.slice(0, limit)
        let truncatedwords = truncateWords.join(" ")
        if (word.length > limit){
            truncatedwords += '...'
        }
        return truncatedwords;
    }

    return(
        <div className='slider'>
            {
            recommended.map((rec, index) => {
                return(
                    <div className='slider-card'>
                        <Image src={rec.img} alt="recommended posts" width="100%" />
                        <h1>{handleTextCut(rec.name, 4)}</h1>

                        <div className='cover'></div>
                    </div>
                )
            })  
        }      
        </div>
    )
}

export default Slider;