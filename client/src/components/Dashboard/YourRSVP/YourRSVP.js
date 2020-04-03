import React from 'react';
import './style.css';

const yourrsvp = (props) => {
    return (
        <div className='container your-rsvp'>
            <div className='row bold event-title'>
                <div className='col'>
                    <p>{props.name}</p>
                </div>
            </div>
            <div className='row menu-row'>
                <div className='col'>
                    <table className='rsvp-table'>
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
    );
};

export default yourrsvp;