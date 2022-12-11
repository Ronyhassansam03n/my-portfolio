import React from 'react';
import Pic01 from './../../../assets/pross2/SS01.jpg'
import Pic02 from './../../../assets/pross2/SS02.jpg'
import Pic03 from './../../../assets/pross2/SS03.jpg'


const Pro02 = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold '>Projects Name : ( A Creative<span className='text-4xl font-bold text-primary'> Photography )</span>  </h1>
            <h1 className='text-xl font-bold text-primary mt-2'> Photography Service Website - MERN FULL STACK WEBSITE</h1>
            <div className='divider w-96'></div>
            <h1 className='text-xl font-bold mt-5 '> Please Visit : <a className="link link-secondary" href='https://photographer-assignment-6838b.web.app/'> A Creative Photography</a></h1>

            <div className='mt-10'>
                <h1 className='mt-10 text-3xl font-semibold'> Some Features</h1>
                <div className='divider w-1/2'></div>

                <h1 className='text-2xl font-bold '> # Dynamic Routes With Unique website design & Mobile Responsive.</h1> <br />
                <h1 className='text-xl font-bold '><span className='text-2xl font-bold text-primary'># Technologies :</span> React.js, Tailwind CSS, DaisyUI, Firebase Authentication, MongoDB, Vanilla CSS & JWT.</h1>
                <h1 className='text-2xl font-bold '> # Services List, User Section, Review  Section, Personal Review  & add product etc.</h1>

                <div className='mt-10'>
                    <h1 className='mt-10 text-3xl font-semibold'> GitHub Links </h1>
                    <div className='divider w-1/2'></div>

                    <h1 className='text-xl font-bold mt-5 '> Please Visit : <a className="link link-secondary" href='https://github.com/Ronyhassansam03n/photography-clients-repo'> Client Repository </a></h1>

                    <h1 className='text-xl font-bold mt-5 '> Please Visit : <a className="link link-secondary" href='https://github.com/Ronyhassansam03n/auto-shop-server-repo'> Server Repository</a></h1>



                </div>

                <div className='mt-10'>
                    <h1 className='mt-10 text-3xl font-semibold'> Short Descriptions </h1>
                    <div className='divider w-1/2'></div>

                    <h1 className='mt-10 text-2xl'> THIS WEBSITE CONTAIN ABOUT SIX DYNAMIC ROUTES</h1>

                    <ul className='mt-5'>
                        <li><span className='text-primary'>#</span> HOME </li>
                        <li><span className='text-primary'>#</span> SERVICES </li>
                        <li><span className='text-primary'>#</span> BLOGS</li>
                        <li><span className='text-primary'>#</span> ABOUT US</li>
                        <li><span className='text-primary'>#</span> LOG IN</li>
                        <li><span className='text-primary'>#</span> SIGN UP </li>

                    </ul>

                </div>

                <h1 className='mt-10 text-3xl font-semibold'> Some Screen Shots </h1>
                <div className='divider w-1/2'></div>

                <div className='grid lg: grid-cols-3'>
                    <div className="card card-compact w-96 ">
                        <figure><img src={Pic01} alt="screenshots" /></figure>
                    </div>
                    <div className="card card-compact w-96">
                        <figure><img src={Pic02} alt="screenshots" /></figure>
                    </div>
                    <div className="card card-compact w-96 ">
                        <figure><img src={Pic03} alt="screenshots" /></figure>
                    </div>



                </div>

            </div>
        </div>
    );
};

export default Pro02;