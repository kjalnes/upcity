import React from 'react';
import SVG from 'react-inlinesvg';
import '../css/BottomBanner.css';

const BottomBanner = () => (
    <div className='bottom-banner-container segment'>
        <div className='bottom-banner-column-1'>
            <SVG className='partner-badge' src='./assets/partner-badges-01.svg' />
        </div>
        <div className='bottom-banner-column-2'>
            <span className='link bold'>VIEW PROFILE</span>
        </div>
    </div>
);

export default BottomBanner;
