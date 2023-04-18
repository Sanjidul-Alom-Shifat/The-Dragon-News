import React from 'react';
import qzone from '../../../assets/qZone1.png';
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'

const QZone = () => {
    return (
        <div className='bg-light text-center py-4 my-4 rounded-2'>
            <h5 className='text-right'>Q-Zone</h5>
            <div className=''>
                <img src={qzone} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
            </div>
        </div>
    );
};

export default QZone;