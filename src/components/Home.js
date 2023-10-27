import React from 'react';
import imghome from '../assets/homeimg.png'
import { Link } from 'react-router-dom'
import '../styles/home.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
const Home = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    try {
      axios.get('http://localhost:8000/api/info/get/')
        .then(response => {
          // console.log(response.data[0]);
          setData(response.data[0]);
        });
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    };
  }, []);

  return (
    <section className="" id="home">
      <div className='mask'>
        <img src={imghome} className='imghome' alt='home'></img>
      </div>
      <div className='content'>
        <p>{data.titre}</p>
        <h1>{data.description}</h1>
        <div>
          <Link to='#' className='btn'>get started</Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
