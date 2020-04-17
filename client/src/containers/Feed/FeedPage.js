import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from "../../utils/UserContext";
import './FeedPage.css';
import Feeds from '../../components/Feeds/Feeds';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import API from "../../utils/API";


export default function FeedPage() {

    const [events, setEvents] = useState([])
    const { globalUserName, setGlobalUserName } = useContext(UserContext);

    useEffect(() => {
        loadEvents()
      }, [])

    function loadEvents() {
        API.getEvents()
            .then(res =>
                setEvents(res.data)
            )
            .catch(err => console.log(err));
    };

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
        <div className='FeedPage'>
            <Navbar currentUser={globalUserName} />
            <Feeds
                className='feeds'
                events={events} />
            <Footer />
        </div>
    )
}