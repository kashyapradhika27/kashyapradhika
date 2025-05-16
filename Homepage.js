import React from 'react'
import Card from "./Card.js";
import Navbar from "./Navbar.js";
import my from './assests/pexelsjessbaileydesign.jpg'
import Footer from './Footer.js'
function Homepage() {
    const mystyle = {
        backgroundImage: `url(${my})`,
        backgroundSize: "cover",
        minHeight: 'fit-content',
        backgroundRepeat: "no-repeat",
        height:'100vh'


    }
    return (

        <>
            <div style={mystyle}>
                <Navbar />
                <Card />
                <Footer />
                
            </div>
        </>
    )
}
export default Homepage