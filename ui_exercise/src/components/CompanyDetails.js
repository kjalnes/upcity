import React from 'react';
import ReactDOM from 'react-dom';
import SVG from 'react-inlinesvg';
import Rating from './Rating';
import CompanyCard from './CompanyCard';
import '../css/CompanyDetails.css';

const CompanyDetails = () => (
    <div className='company-card-container'>
        <CompanyCard />
        <div className='column segment company-card'>
            <div className='company-card-section-1'>
                <div className='company-information'>
                    <h2 className='company-header'>Lorem Ipsum Marketing</h2>
                    <p className='address'>123 W. CHICAGO ST, STE 500, CHICAGO, IL</p>
                    <Rating />
                </div>
                <div className='btn-container'>
                    <button className='custom-btn'>Visit Website</button>
                </div>
            </div>
            <p>
                Morbi a nisi ac lacus consequat laoreet. Phasellus sed ex vulputate, feugiat risus et, placerat velit. Aliquam eget velit vitae felis molestie dignissim. Praesent sit amet condimentum magna. Lorem ipsum dolor sit amet, adipiscing elit...
                <span className='link italic'>more ></span>
            </p>
        </div>
    </div>
);

export default CompanyDetails;
