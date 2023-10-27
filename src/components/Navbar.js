import { useRef, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBars, FaTimes, FaPhone } from "react-icons/fa";
import "../styles/navbar.css";
import logo from '../assets/logo.jpeg'

function Navbar() {
    const [navbar, setnavbar] = useState(false);
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };
    const changeBackground = () => {
        if (window.scrollY >= 80)
            setnavbar(true);
        else setnavbar(false);
    };
    window.addEventListener('scroll', changeBackground)


    return (
        <header className={navbar ? 'fixed-top scrolled' : 'fixed-top'}>
            <a href="/#home"><img className='rounded-circle' src={logo} alt="logo" width={60} height={60} /></a>
            <nav ref={navRef}>
                <a href="/#home">Home</a>
                <a href="/#services">Services</a>
                <a href="/#about">About</a>
                <a href="/#contact">Contact</a>
                <a href="/offer-emploi">Offers</a>
                <a href="/cost-calculator">Calculator</a>
                {/* <div className=" ms-5 border-start d-none d-md-flex">
                    <a href="/#" className="circle-icon">
                        <FaPhone />
                    </a>
                    <div className="d-block ">
                        <h1 className=" fs-6">Call anytime</h1>
                        <h1 className="fs-6">+216  53 040 019 </h1>
                    </div>
                </div> */}
                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button
                className="nav-btn"
                onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;