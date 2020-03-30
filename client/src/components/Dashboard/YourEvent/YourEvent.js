import React from 'react';
import './style.css';

const yourevent = (props) => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col your-event'>
                    <div className='row'>

                        <div className='col bold event-title'>
                            <p>{props.name}</p>
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
                </div>
            </div>
        </div>
    );
};

export default yourevent;