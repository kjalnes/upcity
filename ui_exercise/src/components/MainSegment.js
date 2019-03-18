import React from 'react';
import ReactDOM from 'react-dom';
import SVG from 'react-inlinesvg';
import '../css/mainSegment.css';
import avatar from '../../assets/avatar.png';
import award from '../../assets/award.jpg';
import yext from '../../assets/yext.png';

const MainSegment = () => {
    return (
        <div className='main-segment'>
            <div className='column segment'>
                <div className='avatar'>
                    <img src={avatar} alt='avatar'/>
                </div>
                <div className='badges'>
                    <img src={award} alt='award badge'/>
                    <img src={yext} alt='yext certification badge'/>
                </div>
            </div>
            <div className='column segment company-card'>
                <div className='company-card-section-1'>
                    <div className='company-information'>
                        <h2>Lorem Ipsum Marketing</h2>
                        <p>123 W. CHICAGO ST, STE 500, CHICAGO, IL</p>
                        <span className='rating'>
                            <SVG className='star' src='./assets/star.svg' />
                            <SVG className='star' src='./assets/star.svg' />
                            <SVG className='star' src='./assets/star.svg' />
                            <SVG className='star' src='./assets/star.svg' />
                            <SVG className='star' src='./assets/star.svg' />
                        </span>
                        <span className='link italic'>(4.9)</span> from <span className='link italic'>15 reviews</span>
                    </div>
                    <div className='btn-container'>
                        <button className='custom-btn'>Visit Website</button>
                    </div>
                </div>
                <div>
                    Morbi a nisi ac lacus consequat laoreet. Phasellus sed ex vulputate, feugiat risus et, placerat velit. Aliquam eget velit vitae felis molestie dignissim. Praesent sit amet condimentum magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit... <span className='link italic bold'>more ></span>
                </div>
            </div>
        </div>
    );
}

export default MainSegment;


