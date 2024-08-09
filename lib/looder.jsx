import React from 'react';
import './loader.css';

const Looader = () => {
    return (
        <div className='absolute  top-40 left-[50%] flex'>
            <div class="loader"></div>
            <div class="loader"></div>
            <div class="loader"></div>
            <div class="loader"></div>
            <div class="loader"></div>
        </div>
    );
};

export default Looader;