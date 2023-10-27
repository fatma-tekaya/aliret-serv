import React from 'react';
//import offers from '../components/offers';

import '../styles/offers.css'
import joinimg from '../assets/jf.png'
import { MdKeyboardDoubleArrowRight,MdKeyboardDoubleArrowLeft } from "react-icons/md";
import Navbar from '../components/Navbar';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Offer from '../components/Offer';
const Offers = () => {
    const [valeurFiltre, setValeurFiltre] = useState('');
    const [data, setData] = useState([]);
    useEffect(() => {
        try {
            axios.get('http://localhost:8000/api/offer/')
                .then(response => {
                    //  console.log(response.data);
                    setData(response.data);
                });
        } catch (error) {
            console.error('Erreur lors de la récupération des données :', error);
        };
    }, []); 
    //filtre
    const offres= valeurFiltre
        ? data.filter((element) => element.titre === valeurFiltre)
        : data;


    return (
        <div>

            <div className="c container-fluid">
                <Navbar />
                <div className="row" style={{ height: 70, backgroundColor: 'var(--first-color)' }}></div>
                <div className="row justify-content-center align-items-center "
                    style={{
                        //     backgroundPosition: 'center',
                        //     backgroundSize: 'cover',
                        //     width: '100%',
                        //     minHeight: '100%',
                        //     backgroundImage: `url(${joinimg})`,
                        //     backgroundSize: 'cover',
                    }}
                >
                    <div className="row m-5  ">
                        <div className="col-lg-8 mx-auto ">
                            <div className="career-search ">
                                <form action="#" className="career-form  border ">
                                    <div className="row  justify-content-center align-items-center">

                                        <div className="row ">
                                            <div className="col-12 mb-3 mt-3 text-center ">
                                                <label className="h5 form-label  " style={{ color: 'white' }}>Exist Offer</label>
                                                <select className="form-select" onChange={(e) => setValeurFiltre(e.target.value)}>
                                                    <option value="">All</option>
                                                    {data.map((item, index) => (
                                                        <option key={index} value={item.titre}>{item.titre}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        {/* <div className="col-md-6 col-lg-3  my-2">
                                            <button type="button" className="btn border rounded-pill shadow-sm  btn-block w-100 btn-light btn-block btn-custom" id="contact-submit">
                                                Search
                                            </button>
                                        </div> */}
                                    </div>
                                </form>

                                <div className="filter-result ">
                                    <p className="mb-30 ff-montserrat mt-3">Total Job Openings : {data.length}</p>
                                    {offres.length > 0 ? (
                                        offres.map((offer, index) => (
                                            <Offer key={offer._id} offer={offer} index={index} />
                                        ))
                                    ) : (
                                        <div className="job-box d-md-flex align-items-center justify-content-between mb-30">
                                            <h5 className="text-center text-md-left m-3">There are no offers at this time !</h5>
                                        </div>
                                    )}


                                </div>
                            </div>
                            {offres.length > 0 ? (

                            <nav aria-label="Page navigation">
                                <ul className="pagination pagination-reset justify-content-center">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="#/" tabIndex="-1" aria-disabled="true">
                                            <MdKeyboardDoubleArrowLeft />
                                        </a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#/">1</a></li>
                                    <li className="page-item d-none d-md-inline-block"><a className="page-link" href="#/">2</a></li>
                                    <li className="page-item d-none d-md-inline-block"><a className="page-link" href="#/">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#/">...</a></li>
                                    <li className="page-item"><a className="page-link" href="#/">8</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#/">
                                            <MdKeyboardDoubleArrowRight />
                                        </a>
                                    </li>
                                </ul>
                            </nav>):<nav></nav>}

                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
}

export default Offers;
