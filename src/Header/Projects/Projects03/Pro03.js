import React from 'react';
import Pic01 from './../../../../src/assets/pross3/SS01.jpg'
import Pic02 from './../../../../src/assets/pross3/SS02.jpg'
import Pic03 from './../../../../src/assets/pross3/SS03.jpg'

const Pro03 = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold '>Projects Name : ( Blockchain <span className='text-4xl font-bold text-primary'> Education )</span>  </h1>
            <h1 className='text-xl font-bold text-primary mt-2'> E-Learning  Website -  FULL STACK WEBSITE</h1>
            <div className='divider w-96'></div>
            <h1 className='text-xl font-bold mt-5 '> Please Visit : <a className="link link-secondary" href='https://blockchain-course-client.web.app/'> Blockchain Education</a></h1>

            <div className='mt-10'>
                <h1 className='mt-10 text-3xl font-semibold'> Some Features</h1>
                <div className='divider w-1/2'></div>

                <h1 className='text-2xl font-bold '> # Dynamic Routes With Unique website design & Mobile Responsive.</h1> <br />
                <h1 className='text-xl font-bold '><span className='text-2xl font-bold text-primary'># Technologies :</span> React.js, Tailwind CSS, Firebase Authentication, MongoDB, Vanilla CSS.</h1>
                <h1 className='text-2xl font-bold '> # E- Learning Platform of Blockchain Development  sub-segment.</h1>

            </div>
            <div className='mt-10'>
                <h1 className='mt-10 text-3xl font-semibold'> GitHub Links </h1>
                <div className='divider w-1/2'></div>

                <h1 className='text-xl font-bold mt-5 '> Please Visit : <a className="link link-secondary" href='https://github.com/Ronyhassansam03n/blockchain-clients'> Client Repository </a></h1>

                <h1 className='text-xl font-bold mt-5 '> Please Visit : <a className="link link-secondary" href='https://github.com/Ronyhassansam03n/blockchain-server'> Server Repository</a></h1>



            </div>
            <div className='mt-10'>
                <h1 className='mt-10 text-3xl font-semibold'> Short Descriptions </h1>
                <div className='divider w-1/2'></div>

                <h1 className='mt-10 text-2xl'> THIS WEBSITE IS A EDUCATION PLATFORM THIS WEBSITE CONTAIN ABOUT SIX COURSE</h1>

                <ul className='mt-5'>
                    <li><span className='text-primary'>#</span> SOLIDITY</li>
                    <li><span className='text-primary'>#</span> RUST</li>
                    <li><span className='text-primary'>#</span> PYTHON</li>
                    <li><span className='text-primary'>#</span> ETHEREUM SMART CONTRACT</li>
                    <li><span className='text-primary'>#</span> GO LANG</li>
                    <li><span className='text-primary'>#</span> JAVA SCRIPT</li>

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
    );
};

export default Pro03;