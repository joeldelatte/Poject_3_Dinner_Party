import React, { useState, useEffect } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';
import './Map.css';

export default function Map(props) {

    const mapKey = 'put your google map key here';
    const mapUrl = 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=';

    // let [map, setMap] = useState("");

    function Map() {
        return (
            <GoogleMap
                defaultZoom={10}
                defaultCenter={{ lat: props.latitude, lng: props.longitude }}
            >
                <Marker key={props.key} position={{ lat: props.latitude, lng: props.longitude }} />
            </GoogleMap>
        );
    }

    const WrappedMap = withScriptjs(withGoogleMap(Map));

    return (
        <div className='map'>
            <WrappedMap
                googleMapUrl={mapUrl + mapKey}
                loadingElement={<div style={{ height: '100%' }} />}
                containerElement={<div style={{ height: '100%' }} />}
                mapElement={<div style={{ height: '100%' }} />}
            />
        </div>
    )
};
