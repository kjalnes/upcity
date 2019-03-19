import React from 'react';
import ReactDOM from 'react-dom';
import CompanyDetails from './CompanyDetails';
import Testimonials from './Testimonials';
import BottomBanner from './BottomBanner';
import '../css/index.css';

const App = () => (
    <div className='container'>
        <CompanyDetails />
        <Testimonials />
        <BottomBanner />
    </div>
);

export default App;
