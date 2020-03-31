import React, { useContext } from 'react';
import {UserContext} from "../../utils/UserContext";
import './CreatePage.css';
import Create from '../../components/Create/Create';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';


export default function CreatePage() {

    const {globalUserName, setGlobalUserName} = useContext(UserContext);

        return (
            <div className='CreatePage'>
                <Navbar currentUser={globalUserName} />
                <Create />
                <Footer />
            </div>
        );
}

// export default CreatePage;