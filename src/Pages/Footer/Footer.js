import React from 'react';
import { Link } from 'react-router-dom';
import Pic from './../../assets/Rony Hassan.png'
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-neutral text-neutral-content mt-10">
                <div>
                    <Link to='/'><img className='w-24' src={Pic} alt=''></img> </Link>
                    <p>MD RONY HASSAN<br />Web Developer.</p>
                </div>
                <div>
                    <span className="footer-title">Social</span>
                    <div className="grid grid-flow-col gap-4">
                        <a href='https://github.com/Ronyhassansam03n'> <FaGithubSquare></FaGithubSquare></a>
                        <a href='https://www.linkedin.com/in/md-rony-hassan-15bb11214/'> <FaLinkedin></FaLinkedin></a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;