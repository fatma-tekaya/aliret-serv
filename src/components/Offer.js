import React from 'react';
import { FcAdvertising } from "react-icons/fc";
import { FcExpired } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';

const Offer = (props) => {
    const navigate = useNavigate();
    const { offer, index } = props;
    const handleClick = () => {
        const propsToPass = {
            offerId: offer._id,
            offerTitle: offer.titre
        };

        navigate('/formCondidat', { state: propsToPass });
    }
    return (

        <div key={index} className="job-box d-md-flex align-items-center justify-content-between mb-30">
            <div className="job-left my-4 d-md-flex align-items-center flex-wrap">
                <div className="d-md-flex ">
                    <div className="img-holder mr-md-4 mb-md-2 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex">
                        O
                    </div>
                    <h5 className="text-center text-md-left m-3">{offer.titre}</h5>
                </div>
                <div className="job-content">
                    <div className='row'>

                        <p className="text-center text-md-left">{offer.desc}</p>
                    </div>
                    <hr></hr>
                    <ul className="d-md-flex flex-wrap text-capitalize ff-open-sans">

                        <li className="me-md-4 d-flex ">

                            <FcAdvertising className='me-2' /><h6 className="fw-bold"><span className='text-muted me-2'> Publication date :</span>{offer.date_pub}</h6>

                        </li>
                        <li className="me-md-4 d-flex">
                            <FcExpired className='me-2' /> <h6 className="fw-bold"><span className='text-muted me-2'>Expiration date :</span>{offer.date_exp}</h6>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="job-right my-4 flex-shrink-0">
                <a onClick={handleClick} className="btn d-block w-100 d-sm-inline-block btn-light" >Apply now</a>
            </div>
        </div>

    );
}

export default Offer;
