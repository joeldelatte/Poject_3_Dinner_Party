import React from 'react';
import './Feed.css';
import map from './map.png';

const feed = () => {
    return (
        <div className='container feed-container'>
            <div className='row'>
                <div className='col-8'>
                    <div className='row'>
                        <div className='col bold event-title'>
                            <p>Name of Event Goes Here</p>
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
                                        <td>entree name</td>
                                        <td>entree description entree description entree description entree description</td>
                                    </tr>
                                    <tr>
                                        <td>entree name</td>
                                        <td>entree description entree description entree description entree description</td>
                                    </tr>
                                    <tr>
                                        <td>entree name</td>
                                        <td>entree description entree description entree description entree description</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='row'>
                        <div className='col'>
                            <img className='map' src={map} />
                        </div>
                    </div>
                    <div className='row button-row'>
                        <div className='col'>
                            <form>
                                <label htmlFor='people'>Number of people?</label>
                                <select className='people' name='people'>
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                </select>
                            </form>
                            <button>RSVP</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

// const feed = (props) => {
//     return (
//         <div className='container'>
//             <div className='row'>
//                 <div className='col-9'>
//                     <div className='row'>
//                         <div className='col'>
//                             <p>{props.name}</p>
//                             {/* The wireframe has an event description but I would need to add that to the database */}
//                         </div>
//                     </div>
//                     <div className='row'>
//                         <div className='col-auto'>
//                             <p>{props.app}</p>
//                             <p>{props.entree}</p>
//                             <p>{props.dessert}</p>
//                         </div>
//                         <div className='col-auto'>
//                             <p>{props.appdes}</p>
//                             <p>{props.entreedes}</p>
//                             <p>{props.dessertdes}</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='col-3'>
//                     <div className='row'>
//                         <div className='col'>
//                             <img src=''>Geolocation image goes here</img>
//                         </div>
//                     </div>
//                     <div className='row'>
//                         <div className='col'>
//                             <form>
//                                 <label htmlFor='people'>How many people?</label>
//                                 <select className='people' name='people'>
//                                     <option value='1'>1</option>
//                                     <option value='2'>2</option>
//                                     <option value='3'>3</option>
//                                     <option value='4'>4</option>
//                                 </select>
//                             </form>
//                             <button
//                                 className='rsvp-button'
//                                 onClick={props.click}>RSVP</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// };

export default feed;