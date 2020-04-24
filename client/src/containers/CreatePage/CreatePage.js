import React, { useContext, useEffect } from 'react';
import { UserContext } from "../../utils/UserContext";
import './CreatePage.css';
import Create from '../../components/Create/Create';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

const styles = {
    sticky: {
        position: 'relative',
        left: 0,
        bottom: 0,
        width: '100%',
        marginTop: 100,
        textAlign: 'center',
        backgroundColor: 'rgb(231, 234, 240)',
        color: 'black',
        padding: 20,
        fontSize: 30
    }
}
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
            <div style={styles.sticky}>
                <p>Dinner Party</p>
            </div>              
        </div>
    );
}