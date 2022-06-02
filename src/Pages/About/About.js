import React from 'react';
import ScreenHeader from '../../Shared/ScreenHeader';
import NavBar from '../../Shared/NavBar';
import Footer from '../../Shared/Footer';
import { Link } from 'react-router-dom';
const About = () => {
    return (
        <>
        <NavBar />
            <ScreenHeader>
                <div>
                    <h1 className="font-JosefinSans font-bold text-5xl text-center">About Us</h1>
                    <Link to="/" className="text-gray-400 hover:text-primary">
                        Home
                    </Link>
                    <span className="text-gray-400 space-x-3"> {">"} </span>
                    <span>About Us</span>
                </div>
            </ScreenHeader>
            <Footer />
        </>
    )
}

export default About