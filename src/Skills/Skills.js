import React from 'react';
import Pic1 from './../assets/Expertise.png'
import Pic2 from './../assets/Tools.png'
import Pic3 from './../assets/Frameworks.png'
import Pic4 from './../assets/Technology.png'
import Pic5 from './../assets/Others.png'
import Pic6 from './../assets/Familiar.png'

const Skills = () => {
    return (
        <div>

            <h1 className='text-5xl font-bold'> Skills</h1>
            <div className='divider w-full'></div>


            <div className='mt-5'>
                <img className='w-24' src={Pic1} alt=''></img>
                <ul className='mt-5'>
                    <li><span className='text-primary'>#</span>React.js</li>
                    <li><span className='text-primary'>#</span> HTML & CSS</li>
                    <li><span className='text-primary'>#</span> JavaScript</li>
                    <li><span className='text-primary'>#</span> Tailwind CSS</li>
                    <li><span className='text-primary'>#</span> Bootstrap</li>
                    <li><span className='text-primary'>#</span> Firebase Authentication</li>

                </ul>
            </div>

            <div className='mt-5'>
                <img className='w-24' src={Pic2} alt=''></img>
                <ul className='mt-5'>
                    <li><span className='text-primary'>#</span> VS Code </li>
                    <li><span className='text-primary'>#</span> GitHub </li>
                    <li><span className='text-primary'>#</span> Figma</li>
                    <li><span className='text-primary'>#</span> Vercel</li>
                    <li><span className='text-primary'>#</span> Netlify</li>
                    <li><span className='text-primary'>#</span> Android Studio Firebase </li>

                </ul>
            </div>

            <div className='mt-5'>
                <img className='w-24' src={Pic3} alt=''></img>
                <ul className='mt-5'>
                    <li><span className='text-primary'>#</span> Bootstrap </li>
                    <li><span className='text-primary'>#</span> Tailwind CSS </li>
                    <li><span className='text-primary'>#</span> DaisyUI</li>
                    <li><span className='text-primary'>#</span> Flowbite</li>
                    <li><span className='text-primary'>#</span> Merterial UI</li>
                    <li><span className='text-primary'>#</span> Hot React Toast </li>

                </ul>
            </div>

            <div className='mt-5'>
                <img className='w-24' src={Pic4} alt=''></img>
                <ul className='mt-5'>
                    <li><span className='text-primary'>#</span> Node.js </li>
                    <li><span className='text-primary'>#</span> Express.js </li>
                    <li><span className='text-primary'>#</span> React Query</li>
                    <li><span className='text-primary'>#</span> Stripe</li>
                    <li><span className='text-primary'>#</span> React Hooks </li>

                </ul>
            </div>
            <div className='mt-5'>
                <img className='w-24' src={Pic5} alt=''></img>
                <ul className='mt-5'>
                    <li><span className='text-primary'>#</span> Facebook & Instragram Markting</li>
                    <li><span className='text-primary'>#</span> Youtube Marketing</li>
                    <li><span className='text-primary'>#</span> Google Marketing</li>
                </ul>
            </div>

            <div className='mt-5'>
                <img className='w-24' src={Pic6} alt=''></img>
                <ul className='mt-5'>
                    <li><span className='text-primary'>#</span> Search Engine Optimization ( SEO ) </li>
                    <li><span className='text-primary'>#</span> Andriod App Development</li>
                </ul>
            </div>

        </div>


    );
};

export default Skills;