import React from 'react';
import { Link } from 'react-router-dom';
import Pic from './../../assets/Rony Hassan.png'

const Navber = () => {
    return (
        <div className="navbar bg-base-100 mt-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/projects'>Projects</Link></li>
                        <li><Link to='/experience'>Experience</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                        <li><Link to='/about'>About Me</Link></li>

                    </ul>
                </div>
                <Link to='/'><img className='w-50' src={Pic} alt=''></img> </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5 font-bold text-md">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/projects'>Projects</Link></li>
                    <li><Link to='/experience'>Experience</Link></li>
                    <li><Link to='/blogs'>Blogs</Link></li>
                    <li><Link to='/about'>About Me</Link></li>

                </ul>
            </div>
            <div className="navbar-end">
                <label htmlFor="my-modal" className="btn btn-outline btn-primary font-bold text-md">Contact Me</label>
                {/* The button to open modal */}


                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box grid">
                        <label className='mb-3'>Email</label>
                        <input type="text" placeholder="Enter Your Email" className="input input-bordered w-full max-w-xs mb-5" />
                        <label className='mb-3'>Message</label>
                        <textarea className="textarea textarea-bordered" placeholder="Type Here"></textarea>


                        <div className="modal-action">
                            <label htmlFor="my-modal" className="btn">Send Email</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navber;