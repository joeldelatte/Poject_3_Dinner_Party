import React, { Component } from 'react';
// import React, { useState } from "react";
import './CreatePage.css';
import Create from '../../components/Create/Create';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
// import API from "../../utils/API";


class CreatePage extends Component {

    render() {
        return (
            <div className='CreatePage'>
                <Navbar />
                <Create />
                <Footer />
            </div>
        )
    }
}

export default CreatePage;