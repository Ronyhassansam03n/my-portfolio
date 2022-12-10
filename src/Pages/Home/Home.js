import React from 'react';

import Backpic from './../../assets/back3.png'

const Home = () => {
    return (
        <div className='mx-16 mt-10 flex gap-20'>

            <div>
                <h1 className='text-5xl font-semibold'> Hi,</h1>
                <h1 className='text-5xl font-semibold'> I'm Rony,</h1>
                <h1 className='text-5xl font-semibold'> Web  <span className='text-5xl font-semibold text-primary-focus'>Developer.</span></h1>

                <div className='mt-10 '>
                    <a className="btn btn-sm mx-2  btn-outline btn-primary font-bold text-md " href='https://drive.google.com/file/d/1Y5uG9CM_1dc2rsDGqoklbiimRtgjBdu-/view?usp=sharing'>See Resume</a>

                </div>

            </div>
            <div>

                <img src={Backpic} alt=''></img>
            </div>


        </div>


    );
};

export default Home;