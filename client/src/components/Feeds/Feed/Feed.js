import React from 'react';
import { Link } from 'react-router-dom';
import './Feed.css';
import map from './map.png';

export default function Feed(props) {

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
                            <p>{props.name}</p>
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
                            <img className='map' src={map} alt='thumbnail of event location' />
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