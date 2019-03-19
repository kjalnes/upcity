import React from 'react';
import SVG from 'react-inlinesvg';

const Rating = () => (
    <div className='rating-container italic'>
        <span className='rating'>
            <SVG className='star' src='./assets/star.svg' />
            <SVG className='star' src='./assets/star.svg' />
            <SVG className='star' src='./assets/star.svg' />
            <SVG className='star' src='./assets/star.svg' />
            <SVG className='star' src='./assets/star.svg' />
        </span>
        <span className='link'>(4.9)</span> from <span className='link'>15 reviews</span>
    </div>
);

export default Rating;
