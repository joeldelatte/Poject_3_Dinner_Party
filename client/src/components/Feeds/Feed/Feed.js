import React from 'react';
import { Link } from 'react-router-dom';
import './Feed.css';
import map from './map.png';

const feed = (props) => {
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
                            <form>
                                <label htmlFor='people'>How many people?</label>
                                <select className='people' name='people'>
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                </select>
                            </form>
                            <button
                                className='rsvp-button'
                                onClick={() => props.click()}><Link className='rsvp-link' to="/dashboard">RSVP</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default feed;