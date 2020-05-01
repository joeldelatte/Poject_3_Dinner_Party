import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import './Feed.css';
// import map from './map.png';
import Map from '../Map/Map';

export default function Feed(props) {

    const geoKey = 'process.env.REACT_APP_GEOCODE_KEY';
    const geoUrl = 'https://maps.googleapis.com/maps/api/geocode/json?';

    // const [latt, setLatt] = useState("");
    // const [long, setLong] = useState("");

    // useEffect(() => {
    //     geocode();
    // }, []);

    // function geocode() {

    //     let address = props.address;
    //     let city = props.city;
    //     let state = props.eventState;
    //     // let zip = props.zip;
    //     let location = address + " " + city + " " + state;

    //     axios.get(geoUrl, {
    //         params: {
    //             address: location,
    //             key: geoKey
    //         }
    //     })
    //         .then(res => {
    //             setLatt(res.results[0].geometry.location.lat)//lat)
    //             setLong(res.results[0].geometry.location.lng)//lng)
    //             console.log(res.results[0].geometry.location.lat);
    //             console.log(res.results[0].geometry.location.lng);
    //         }).catch((err)=>{console.log(err)})
    // }

    //...........................................................................
    function handleSubmit(event) {
        event.preventDefault();
    };

    function validateForm() {
        return props.state > 0
            && props.state < 5
    }

    return (
        <div className='container feed-container'>
            <div className='row'>
                <div className='col-8'>
                    <div className='row'>
                        <div className='col bold event-title'>
                            <h2>{props.name}</h2>
                            <p>{props.date}</p>
                        </div>
                    </div>
                    <div className='row menu-row'>
                        <div className='col'>
                            <table className='menu-table'>
                                <tbody>
                                    <tr>
                                        <th className='course-header'>Course</th>
                                        <th>Description</th>
                                    </tr>
                                    <tr>
                                        <td>{props.app}</td>
                                        <td>{props.appdes}</td>
                                    </tr>
                                    <tr>
                                        <td>{props.entree}</td>
                                        <td>{props.entreedes}</td>
                                    </tr>
                                    <tr>
                                        <td>{props.dessert}</td>
                                        <td>{props.dessertdes}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='row'>
                        <div className='col'>
                            {/* <img className='map' src={map} alt='thumbnail of event location' /> */}
                            <div className='map'>
                                <Map /> 
                            </div>
                        </div>
                    </div>
                    <div className='row button-row'>
                        <div className='col'>
                            <form id='seatForm' name='seatForm' onSubmit={handleSubmit}>
                                <label htmlFor='people'>How many people?</label>
                                <input type='text'
                                    className='people'
                                    id='people'
                                    name='people'
                                    placeholder='1 - 4'
                                    required='number'
                                    size='4'
                                    onChange={e => props.parentCallback(e.target.value)}
                                />
                            </form>
                            <div>
                                {
                                    validateForm() ? <Link className='rsvp-link' to="/dashboard">
                                        <button
                                            form='seatForm'
                                            name='seatForm'
                                            className='rsvp-button btn btn-success'
                                            onClick={() => props.click()}>RSVP
                                    </button>
                                    </Link>
                                        : <button
                                            disabled={!validateForm()}
                                            form='seatForm'
                                            name='seatForm'
                                            className='rsvp-button btn btn-success'>RSVP
                                    </button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

};




