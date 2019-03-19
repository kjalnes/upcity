import React from 'react';
import avatar from '../../assets/avatar.png';
import award from '../../assets/award.jpg';
import yext from '../../assets/yext.png';

const CompanyCard = () => (
    <div className='column segment'>
        <div className='avatar'>
            <img src={avatar} alt='avatar'/>
        </div>
        <div className='badges'>
            <img src={award} alt='award badge'/>
            <img src={yext} alt='yext certification badge'/>
        </div>
    </div>
);

export default CompanyCard;
