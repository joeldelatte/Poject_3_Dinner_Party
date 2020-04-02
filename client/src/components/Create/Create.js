import React, { useState, useContext } from 'react';
import { Link  } from "react-router-dom";
import { UserContext } from "../../utils/UserContext";
import "./Create.css";
import API from "../../utils/API";

export default function Create() {
    const [eventName, setEventName] = useState("");
    const [eventDate, setEventDate] = useState("");
    const [eventSeats, setEventSeats] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [app, setApp] = useState("");
    const [appDes, setAppDes] = useState("");
    const [entree, setEntree] = useState("");
    const [entreeDes, setEntreeDes] = useState("");
    const [dessert, setDessert] = useState("");
    const [dessertDes, setDessertDes] = useState("");
    const { globalUserName, setGlobalUserName } = useContext(UserContext);

    function validateForm() {
        return eventName.length > 0
            && eventDate.length > 0
            && eventSeats.length > 0
            && street.length > 0
            && city.length > 0
            && state.length > 0
            && zip.length > 0
            && app.length > 0
            && appDes.length > 0
            && entree.length > 0
            && entreeDes.length > 0
            && dessert.length > 0
            && dessertDes.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    };

    function createEvent() {

        API.createEvent({
            event_name: eventName,
            event_date: eventDate,
            event_seats: eventSeats,
            event_address: street,
            event_city: city,
            event_state: state,
            event_zip: zip,
            app: app,
            app_description: appDes,
            entree: entree,
            entree_description: entreeDes,
            dessert: dessert,
            dessert_description: dessertDes,
            UserId: globalUserName.id
        })
            .then(res => console.log(res));
    };

    return (
        <div className="container create-container">
            <form onSubmit={handleSubmit}>
                {/* <div className='create-heading'>Create an Event</div> */}
                <div className="form-row">
                    <div className="form-group col">
                        <input type="text" className="form-control form-row input-box" placeholder="Event Name" onChange={e => setEventName(e.target.value)} />
                    </div>
                    <div className="form-group col">
                        <input type="text" className="form-control form-row input-box" placeholder="Event Date (ex: 2020-3-19)" onChange={e => setEventDate(e.target.value)} />
                    </div>
                    <div className="form-group col">
                        <input type="text" className="form-control form-row input-box" placeholder="Maximum Seats" onChange={e => setEventSeats(e.target.value)} />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col">
                        <input type="text" className="form-control form-row input-box" placeholder="Appetizer" onChange={e => setApp(e.target.value)} />
                        <textarea className="form-control form-row input-box" id="exampleFormControlTextarea1" placeholder="Appetizer Description" rows="4" onChange={e => setAppDes(e.target.value)}></textarea>
                    </div>
                    <div className="form-group col">
                        <input type="text" className="form-control form-row input-box" placeholder="Entree" onChange={e => setEntree(e.target.value)} />
                        <textarea className="form-control form-row input-box" id="exampleFormControlTextarea2" placeholder="Appetizer Description" rows="4" onChange={e => setEntreeDes(e.target.value)}></textarea>
                    </div>
                    <div className="form-group col">
                        <input type="text" className="form-control form-row input-box" placeholder="Dessert" onChange={e => setDessert(e.target.value)} />
                        <textarea className="form-control form-row input-box" id="exampleFormControlTextarea3" placeholder="Appetizer Description" rows="4" onChange={e => setDessertDes(e.target.value)}></textarea>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col">
                        <input type="text" className="form-control form-row input-box" placeholder="Street Address" onChange={e => setStreet(e.target.value)} />
                        <input type="text" className="form-control form-row input-box" placeholder="City" onChange={e => setCity(e.target.value)} />
                        <input type="text" className="form-control form-row input-box" placeholder="State" onChange={e => setState(e.target.value)} />
                        <input type="text" className="form-control form-row input-box" placeholder="Zip" onChange={e => setZip(e.target.value)} />
                    </div>
                    <div className="form-group col">

                    </div>
                    <div className="form-group col" >
                        {(validateForm() && <Link to="/dashboard" role="button" type="submit" className="btn btn-success create-button" disabled={!validateForm()} onClick={() => createEvent()} >Create Event</Link>) 
                        || <Link role="button" className="btn btn-success create-button" >Create Event</Link>}
                    </div>
                </div>

            </form>
        </div>
    )

}