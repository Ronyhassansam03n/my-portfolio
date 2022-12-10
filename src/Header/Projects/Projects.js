import React from 'react';
import Pic1 from './../../assets/pic11.jpg'
import Pic2 from './../../assets/pic22.jpg'
import Pic3 from './../../assets/pic33.jpg'


const Projects = () => {

    return (

        <div  >
            <h1 className='text-5xl font-semibold mt-5'> All Projects</h1>

            <div className='mt-10  grid  grid-cols-1  gap-10' >

                <div className="card w-96 bg-base-100 shadow-xl image-full mx-16">

                    <figure><img src={Pic1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Auto Shop</h2>
                        <p>10 Things to Check Before Buying a Used Car !</p>
                        <div className="card-actions justify-end">
                            <a className="btn btn-sm mx-2  btn-outline btn-primary font-bold text-md " href='https://auto-shop-ea9ea.web.app/'>See Project</a>
                        </div>
                    </div>
                </div>


                <div className="card w-96 bg-base-100 shadow-xl image-full mx-16">

                    <figure><img src={Pic2} alt="web logo" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">A Creative Photography</h2>
                        <p>Affordable
                            Price for Wedding
                            Photography.
                        </p>
                        <div className="card-actions justify-end">
                            <a className="btn btn-sm mx-2  btn-outline btn-primary font-bold text-md " href='https://photographer-assignment-6838b.web.app/'>See Project</a>
                        </div>
                    </div>
                </div>



                <div className="card w-96 bg-base-100 shadow-xl image-full mx-16">

                    <figure><img src={Pic3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Blockchain Education</h2>
                        <p>Welcome To Blockchain World !</p>
                        <div className="card-actions justify-end">
                            <a className="btn btn-sm mx-2  btn-outline btn-primary font-bold text-md " href='https://blockchain-course-client.web.app/'>See Project</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;