import React from 'react';
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
const Project = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        try {
            axios.get('http://localhost:8000/api/projetSociete')
                .then(response => {
                    //  console.log(response.data);
                    setData(response.data);
                });
        } catch (error) {
            console.error('Erreur lors de la récupération des données :', error);
        };
    }, []);
    const chunkSize = 3; // Nombre de cartes par élément du carousel

    // Divisez les données en chunks de taille chunkSize
    const chunkedData = [];
    for (let i = 0; i < data.length; i += chunkSize) {
        chunkedData.push(data.slice(i, i + chunkSize));
    }
    return (
        <section className="pt-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-title">
                            <h2>Our Projects</h2>
                            <p className='text-muted ms-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">

                        <Carousel prevLabel={<BiChevronLeft size={20} color='black'/>} nextLabel={<BiChevronRight size={20} style={{ color: 'black' }} />}>
                            {chunkedData.map((data, index) => (
                                <Carousel.Item key={index}>
                                    <div className="row">
                                        {data.map((item, subIndex) => (
                                            <div key={subIndex} className="col-md-4 mb-3">
                                                <div className="card">
                                                    <img name="image"
                                                        className="img-fluid"
                                                        alt="100%x280"
                                                        src={"http://localhost:8000/"+item.image}
                                                    />
                                                   { console.log(item.image)}
                                                    <div className="card-body">
                                                        <h4 className="card-title" nam="titre ">{item.titre}</h4>
                                                        <p className="card-text" name="desc">{item.desc}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel>


                    </div>

                </div>
            </div>
        </section>
    );
}

export default Project;
