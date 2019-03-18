import React from 'react';
import ReactDOM from 'react-dom';
import MainSegment from './MainSegment';
import '../css/index.css';

const App = () => {
    return (
        <div className='container'>
            <div className='main-content'>
                <div className='grid-rows'>
                    <MainSegment />
                    <div className='segment two'>
                    </div>
                    <div className='segment three'>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
