import React from 'react';
import '../styles/footer.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
const Footer = () => {
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
	return (
		<div>
			<section id="footer">
				<div className="container">
					<div className="row text-center text-xs-center text-sm-left text-md-left">
						<div className="col-xs-12 col-sm-4 col-md-4 mt-5">
							<h5>Quick links</h5>
							<ul className="list-unstyled quick-links">
								<li><a href="#home"><i className="fa fa-angle-double-right"></i>Get started</a></li>
								<li><a href="#services"><i className="fa fa-angle-double-right"></i>Services</a></li>
								<li><a href="#about"><i className="fa fa-angle-double-right"></i>About</a></li>
								<li><a href="#contact"><i className="fa fa-angle-double-right"></i>Contact</a></li>
							</ul>
						</div>
						<div className="col-xs-12 col-sm-4 col-md-4 mt-5">
							<h5>Company</h5>
							<ul className="list-unstyled quick-links">
								<li><a href=""><i className="fa fa-angle-double-right"></i>Terms & Conditions</a></li>
								<li><a href=""><i className="fa fa-angle-double-right"></i>Privacy Policy</a></li>
								<li><a href=""><i className="fa fa-angle-double-right"></i>Support</a></li>
								<li><a href=""><i className="fa fa-angle-double-right"></i>FAQ</a></li>
							</ul>
						</div>
						{/* <div class="col-xs-12 col-sm-4 col-md-4 mt-5" >
					<h5>Subscribe US</h5>
					<ul class="list-unstyled quick-links">
						<li>Subscribe to get latest news article and resources</li>
						
					</ul>
				</div> */}
					</div>
					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
							<ul className="list-unstyled list-inline social text-center">
								<li className="list-inline-item"><a href={data.facebook}><i className="fa fa-facebook"></i></a></li>
								<li className="list-inline-item"><a href={data.twiter}><i className="fa fa-twitter"></i></a></li>
								<li className="list-inline-item"><a href={data.linkedin} ><i className="fa fa-linkedin"></i></a></li>
							</ul>
						</div>

					</div>

					<div className="row">
						<hr />
						<div className="col-xs-12 col-sm-12 col-md-12 mb-sm-2 text-center text-white">
							<p className="h6">Aliret Ⓒ All right Reversed</p>
						</div>
						<hr />
					</div>

				</div>
			</section>
		</div>
	);
}

export default Footer;
