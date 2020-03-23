import React from 'react';
import './Feed.css';

const feed = (props) => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-9'>
                    <div className='row'>
                        <div className='col'>
                            <p>{props.name}</p>
                            {/* The wireframe has an event description but I would need to add that to the database */}
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-auto'>
                            <p>{props.app}</p>
                            <p>{props.entree}</p>
                            <p>{props.dessert}</p>
                        </div>
                        <div className='col-auto'>
                            <p>{props.appdes}</p>
                            <p>{props.entreedes}</p>
                            <p>{props.dessertdes}</p>
                        </div>
                    </div>
                </div>
                <div className='col-3'>
                    <div className='row'>
                        <div className='col'>
                            <img src=''>Geolocation image goes here</img>
                        </div>
                    </div>
                    <div className='row'>
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
                                onClick={props.click}>RSVP</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default feed;