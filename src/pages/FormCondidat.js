import React, { useEffect } from 'react';
import '../styles/formcond.css'
import logo from '../assets/logo.jpeg'
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
const FormCondidat = () => {
  const location = useLocation();
  const pathpPopsPassed = location.state;
  const [data, setData] = useState();
  const navigate = useNavigate();
  const { offerId, offerTitle } = pathpPopsPassed;

  //add condidat
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    cv: '',
    linkedin: '',
    offre: offerTitle,
    address: '',
    numtel: '',
    genre: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(value)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/condidat', formData);
      setFormData({
        nom: '',
        prenom: '',
        email: '',
        cv: '',
        offre: offerTitle,
        linkedin: '',
        address: '',
        numtel: '',
        genre: '',
      });
      setData((prevRows) => [
        ...prevRows,
        {
          _id: response.data._id,
          nom: formData.nom,
          prenom: formData.prenom,
          email: formData.email,
          cv: formData.cv,
          offre: offerTitle,
          linkedin: formData.linkedin,
          address: formData.address,
          numtel: formData.numtel,
          genre: formData.genre,
          /* Other properties you want to add */
        }
      ]);

      navigate('/offer-emploi')
      alert("  Your request has been sent successfully !");
    } catch (error) {
      console.error(error);
    }
  };
  return (

    <div className='container-fluid' style={{
      backgroundColor: '#FAF6F1',
      height: '100vh',
    }}>
      <div className='row justify-content-center align-items-center '>
        <div className='col-md-8 shadow mt-5 ' style={{
          backgroundColor: 'white'
        }}>
          <form className='mx-4' onSubmit={handleSubmit}>
            <div className='d-flex my-5 justify-content-between '>
              <h2 className='' style={{
                color: 'var(--first-color)',
              }} >fill in this form</h2>
              <img className='rounded-circle' src={logo} alt="logo" width={60} height={60} />
            </div>

            <div className="  d-lg-flex">
              <label htmlFor="name" className="form-label d-none d-sm-block col-2 mb-3">Full Name<span className='text-danger ms-1'>*</span></label>
              <input type="text" className="form-control me-md-2 mb-3" id="nom" placeholder='First Name' name='nom' value={formData.nom} onChange={handleChange} required />
              <input type="text" className="form-control mb-3" id="prenom" placeholder='Last Name' name='prenom' value={formData.prenom} onChange={handleChange} required />
            </div>
            <div className="mb-3 d-flex">
              <label htmlFor="email" className="form-label col-2 d-none d-sm-block">Email address<span className='text-danger ms-1'>*</span></label>
              <input type="email" className="form-control " id="email" aria-describedby="emailHelp" name='email' onChange={handleChange} value={formData.email} placeholder='Email address' required />
            </div>
            <div className="mb-3 d-flex">
              <label htmlFor="address" className="form-label  col-2 d-none d-sm-block">Adress</label>
              <input type="text" className="form-control" id="address" onChange={handleChange} name='address' value={formData.address} placeholder='Adress' />
            </div>
            <div className="mb-3 d-flex">
              <label htmlFor="numtel" className="form-label  col-2 d-none d-sm-block">Phone</label>
              <input type="text" className="form-control" id="numtel" value={formData.numtel} name='numtel' onChange={handleChange} placeholder='Phone' />
            </div>
            <div className="mb-3 d-flex ">
              <label htmlFor="genre" className="form-label col-2 d-none d-sm-block">Sexe</label>
              <div className="form-check me-3">
                <input className="form-check-input" type="radio" name="genre" value='homme' checked={formData.genre === "homme"} onChange={handleChange} id="genrehomme" />
                <label className="form-check-label" htmlFor="genrehomme">
                  Homme
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input " type="radio" name="genre" value='femme' onChange={handleChange} checked={formData.genre === "femme"} id="genrefemme" />
                <label className="form-check-label" htmlFor="genrefemme">
                  Femme
                </label>
              </div>
            </div>
            <div className="mb-3 d-flex">
              <label htmlFor="disabledTextInput" className="form-label  d-none d-sm-block col-2">Offer</label>
              <input type="text" id="disabledTextInput" className="form-control" placeholder="name of offer" value={offerTitle} disabled />
            </div>
            <div className="mb-3 d-flex">
              <label htmlFor="linkedin" className="form-label  col-2 d-none d-sm-block">LinkedIN <span classame='text-danger ms-1'>*</span></label>
              <input type="text" className="form-control" id="linkedin" name='linkedin' onChange={handleChange} value={formData.linkedin} placeholder='Linkedin' required />
            </div>
            <div className="mb-3 d-flex">
              <label htmlFor="cv" className="form-label d-none d-sm-block col-2">CV file <span className='text-danger ms-1'>*</span></label>
              <input className="form-control" type="file" id="cv" name='cv' value={formData.cv} onChange={handleChange} required />
            </div>
            <div className='row justify-content-center '>
              <div className=' col-6'>
                <button onClick={() => window.history.back()} className="btn btn-secondary border rounded-pill shadow-sm my-4 w-50   ">Return</button>

                <button type="submit" className="btn border rounded-pill shadow-sm my-4  w-50 btn-light ">Apply</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormCondidat;
