import React from 'react';
import Modal from '../../Components/Modal/Modal';
import './Home.css'

const Home = () => {
    return (
        <div className='main-home main'>
            <div className='home-cont'>
            <p>You were hired because you met expectations, you will be promoted if you can exceed them.</p>
            <img src="./dev.png"/>
            </div>
            <Modal></Modal>
        </div>
    );
};

export default Home;