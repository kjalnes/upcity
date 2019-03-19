import React from 'react';
import '../css/testimonials.css';

const Testimonials = () => (
    <div className='testimonials-container segment'>
        <div className='testimonials-column-1'>
            What people are saying about this agency:
        </div>
        <div className='testimonials-column-2'>
            <span className='italic testimonial-text'>Morbi a nisi ac lacus consequat laoreet. Phasellus sed ex vulputate, feugiat risus et, placerat velit. Aliquam eget velit vitae felis molestie dignissim.
            </span>
            <div className='testimonial-author'>
                <span>-FirstName LastName</span>
            </div>
        </div>
    </div>
);

export default Testimonials;
