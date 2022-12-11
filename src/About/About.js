import React from 'react';

const About = () => {
    return (
        <div>
            <h1 className='text-3xl font-semibold mt-10'> Name : MD RONY HASSAN. </h1>
            <h1 className='text-2xl font-semibold mt-1'>  Full Stack Web <span className='text-2xl font-semibold text-primary'>Developer</span> </h1>
            <h1 className='text-2xl font-semibold mt-1'>  Years : <span className='text-2xl font-semibold text-primary'>26</span>  Years. </h1>
            <h1 className='text-2xl font-semibold mt-1'>  Address : Uttara, Dhaka-<span className='text-2xl font-semibold text-primary'>1230</span>, Bangladesh. </h1>
            <h1 className='text-2xl font-semibold mt-1'>  Nationality : Bangladeshi.</h1>
            <h1 className='text-4xl font-semibold mt-5'>  Some Hobbies</h1>
            <div className='divider w-96'></div>
            <ul className='mt-5'>
                <li><span className='text-primary'>#</span> PLAYING BILLIARD POOL </li>
                <li><span className='text-primary'>#</span> SWIMMING </li>
                <li><span className='text-primary'>#</span> TRAVELING</li>
                <li><span className='text-primary'>#</span> PC GAMING</li>
                <li><span className='text-primary'>#</span> CREATIVE THINKING</li>
                <li><span className='text-primary'>#</span> PLAYING FOOTBALL </li>

            </ul>


        </div>
    );
};

export default About;