import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='mx-16 mt-10'>
            <h1 className='text-5xl font-semibold'> Hi,</h1>
            <h1 className='text-5xl font-semibold'> I'm Rony,</h1>
            <h1 className='text-5xl font-semibold'> Web  <span className='text-5xl font-semibold text-primary-focus'>Developer.</span></h1>

            <div className='mt-10 '>
                <Link to='/' className="btn btn-sm mx-2  btn-outline btn-primary font-bold text-md ">See Resume</Link>
                <Link to='/contact' className="btn btn-sm btn-outline btn-primary font-bold text-md">Contact Me</Link>
            </div>

        </div>


    );
};

export default Home;