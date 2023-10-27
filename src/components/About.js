import React from 'react';
import '../styles/about.css'
import img1 from '../assets/homme.jpg'
import img2 from '../assets/equipe.jpg'
import img3 from '../assets/femme.jpg'
import { FiDownload } from "react-icons/fi";

const About = () => {
    return (
        <section className='section ' id='about'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-title">
                            <h2>About Us</h2>
                            <p className='text-muted ms-5'> Our mission is to
                                make your life easier.</p>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-12 order-1 order-md-1 mb-5 mt-sm-0 opt-sm-0">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6 col-6">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 mt-4 pt-2">
                                        <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                            <img src={img3} className="img-fluid" alt="Image" />

                                        </div>
                                    </div>
                                </div>

                            </div>


                            <div className="col-lg-6 col-md-6 col-6">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                            <img src={img2} className="img-fluid" alt="Image" />

                                        </div>
                                    </div>


                                    <div className="col-lg-12 col-md-12 mt-4 pt-2">
                                        <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                            <img src={img1} className="img-fluid" alt="Image" />

                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>


                    <div className="col-lg-6 col-md-12 col-12 order-2 order-md-2">
                        <div className="section-title ml-lg-5">
                        
                            <p className="text-muted mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit quod debitis praesentium pariatur temporibus ipsa, cum quidem obcaecati sunt?</p>

                            <div className="row">
                                <div className="col-lg-6 mt-4 pt-2">
                                    <div className="media align-items-center rounded shadow p-3">
                                        <i className="fa fa-play h4 mb-0 text-custom"></i>
                                        <h6 className="ml-3 mb-0"><a href="" className="text-dark">Responsive</a></h6>
                                    </div>
                                </div>
                                <div className="col-lg-6 mt-4 pt-2">
                                    <div className="media align-items-center rounded shadow p-3">
                                        <FiDownload className=' h4 mb-0 text-custom' />
                                        <h6 className="ml-3 mb-0"><a href="" className="text-dark">Free Download</a></h6>
                                    </div>
                                </div>
                                <div className="col-lg-6 mt-4 pt-2">
                                    <div className="media align-items-center rounded shadow p-3">
                                        <i className="fa fa-user h4 mb-0 text-custom"></i>
                                        <h6 className="ml-3 mb-0"><a href="" className="text-dark">Support</a></h6>
                                    </div>
                                </div>
                                <div className="col-lg-6 mt-4 pt-2">
                                    <div className="media align-items-center rounded shadow p-3">
                                        <i className="fa fa-image h4 mb-0 text-custom"></i>
                                        <h6 className="ml-3 mb-0"><a href="" className="text-dark">Development</a></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;
