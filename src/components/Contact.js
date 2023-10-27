import React from 'react';
import '../styles/contact.css'
import { FiPhoneCall } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import axios from 'axios';
import { useState, useEffect } from 'react';
const Contact = () => {
    const [data, setData] = useState({});
    useEffect(() => {
        try {
            axios.get('http://localhost:8000/api/info/get/')
                .then(response => {
                    setData(response.data[0]);
                });
        } catch (error) {
            console.error('Erreur lors de la récupération des données :', error);
        };
    }, []);
    function message() {
        var Name = document.getElementById('name');
        var email = document.getElementById('email');
        var msg = document.getElementById('msg');
        const success = document.getElementById('success');
        const danger = document.getElementById('danger');

        if (Name.value === '' || email.value === '' || msg.value === '') {
            danger.style.display = 'block';

        }
        else {
            setTimeout(() => {
                Name.value = '';
                email.value = '';
                msg.value = '';
            }, 2000);

            success.style.display = 'block';
            console.log("test");
        }


        setTimeout(() => {
            danger.style.display = 'none';
            success.style.display = 'none';
        }, 4000);

    }
    return (
        <section className="section section-contact" id='contact'>

            <div className="container bootstrap snippets bootdeys">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-title">
                            <h2>Contact US</h2>
                            <p className='text-muted'>let’s work together?</p>
                        </div>
                    </div>
                </div>

                <div className="row ">
                    <div className='col-12 col-md-6 col-lg-6'>
                        <div className="col-sm-12 ">
                            <div className="contact-detail-box d-flex align-items-center justify-content-start">
                                <div className="iconC me-4">
                                    <FiPhoneCall className="text-colored " size={22} />
                                </div>
                                <div>
                                    <h4 className='text-muted'>HAVE ANY QUESTION?</h4>
                                    <p>+216 {data.numtel}</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12">
                            <div className="contact-detail-box d-flex align-items-center justify-content-start">
                                <div className="iconC me-4">
                                    <FiMail className="text-colored " size={22} />
                                </div>
                                <div>
                                    <h4 className='text-muted'>SEND EMAIL</h4>
                                    <p>{data.email}</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12">
                            <div className="contact-detail-box d-flex align-items-center justify-content-start">
                                <div className="iconC me-4">
                                    <FiMapPin className="text-colored  " size={22} />
                                </div>
                                <div>
                                    <h4 className='text-muted'>VISIT ANYTIME</h4>
                                    <p  >{data.adresse}
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* <div className="col-sm-6">
                        <div className="contact-map">
                            <iframe src="https://www.google.com/maps/embed/v1/place?q=New+York+University&amp;key=AIzaSyBSFRN6WWGYwmFi498qXXsD2UwkbmD74v4" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width={100} height={360}></iframe>
                        </div>
                    </div> */}


                    <div className="col-12 col-md-6 col-lg-4 p-4 bg-white border rounded border-secondary shadow mx-auto" >
                        <h1 className='text-muted mb-5'>Get in touch</h1>
                        <form role="form" name="ajax-form" id="ajax-form" action="https://formsubmit.io/send/coderthemes@gmail.com" method="post" className="form-main">
                            <div className="form-floating">
                                <input type="text" className="form-control mb-3" id="name" />
                                <label htmlFor="name">Full Name</label>
                            </div>
                            <div className="form-floating">
                                <input type="email" className="form-control mb-3" id="email" />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="form-floating">
                                <textarea type="Text" className="form-control mb-3" rows="7" id="message" />
                                <label htmlFor="message">Message</label>
                            </div>
                            <div className="error" id="err-message" style={{/*display: none;*/ }}>Please enter message</div>

                        </form>
                        <div className="message">
                            <div className="success" id="success">Your Message Successfully Sent!</div>
                            <div className="danger" id="danger">Feilds Can't be Empty!</div>
                        </div>
                        <div className="d-flex align-items-center flex-column bd-highlight mb-3">
                            <button type="submit" onClick={message} className="btn btn-contact  align-items-end btn-shadow btn-rounded w-md" id="send">Send message</button>
                        </div>
                       
                    </div>
                </div>



            </div>

        </section >


    );
}

export default Contact;
