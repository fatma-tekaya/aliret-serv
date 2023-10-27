import React from 'react';
import '../styles/services.css'
import { BsAndroid2 } from "react-icons/bs";
import { BsGraphUp } from "react-icons/bs";
import { BsDisplay } from "react-icons/bs";
import { BsColumnsGap } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import { BsBoundingBoxCircles } from "react-icons/bs";

const Services = () => {
    return (
        <section className="section services-section" id="services">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-title">
                            <h2>Our Services</h2>
                            <p className='text-muted ms-5'>We provide a wide range of creative services</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-lg-4">
                        <div className="feature-box-1">
                            <div className="icon">
                                <BsDisplay />
                            </div>
                            <div className="feature-content">
                                <h5>Web development</h5>
                                <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="feature-box-1">
                            <div className="icon">
                                <BsColumnsGap />
                            </div>
                            <div className="feature-content">
                                <h5>Interface Design</h5>
                                <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="feature-box-1">
                            <div className="icon">
                                <BsGraphUp />
                            </div>
                            <div className="feature-content">
                                <h5>Business Consulting</h5>
                                <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="feature-box-1">
                            <div className="icon">
                                <BsBoundingBoxCircles />
                            </div>
                            <div className="feature-content">
                                <h5>Branding</h5>
                                <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="feature-box-1">
                            <div className="icon">
                                <BsAndroid2 />
                            </div>
                            <div className="feature-content">
                                <h5>App development</h5>
                                <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="feature-box-1">
                            <div className="icon">
                                <BsPencilSquare />
                            </div>
                            <div className="feature-content">
                                <h5>Content creation</h5>
                                <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
