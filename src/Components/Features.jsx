import React from 'react';
import '../Assets/scss/Features.scss';
import feat from '../Assets/data/feature';
import Gallery from '../Components/Partials/Gallery.js';
import { Button } from '@mui/material';

const Features = () => {

    const pixel = 1;

    const bg = {
        background: 'initial'
    }

    return(
        <div className='features'>
            <div className='f-left'>
                <div className='card'>
                    <span className='feat-blog'>Featured Blogs</span>
                    <Gallery background={bg} pixel={pixel} trend={feat} />
                </div>
            </div>
        </div>
    )
}

export default Features;