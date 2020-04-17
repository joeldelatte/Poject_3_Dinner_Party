import React, { useContext, useEffect } from 'react';
import { UserContext } from "../../utils/UserContext";
import './CreatePage.css';
import Create from '../../components/Create/Create';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';


export default function CreatePage() {

    const { globalUserName, setGlobalUserName } = useContext(UserContext);

    useEffect(()=> {
        const data = localStorage.getItem("globalUserName");
        if (data) {
            setGlobalUserName(JSON.parse(data));
        }
    }, []);

    useEffect(()=> {
        localStorage.setItem("globalUserName", JSON.stringify(globalUserName));
    });

    return (
        <div className='CreatePage'>
            <Navbar currentUser={globalUserName} />
            <Create />
            <Footer />
        </div>
    );
}