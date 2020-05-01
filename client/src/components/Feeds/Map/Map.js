import React, { useState, useEffect, Component } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';
import './Map.css';

const lattitude = 30.2672;
const longitude = -97.7431;

class Map extends Component {
   render() {
   const GoogleMapExample = withScriptjs(withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 30.2672, lng: -97.7431 } }
        defaultZoom = { 11 }
      >
          <Marker position={{ lat: lattitude, lng: longitude }}/>
      </GoogleMap>
   )));
   return(
      <div>
        <GoogleMapExample
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=GOOGLE_MAP_API_KEY`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={ <div style={{ height: `200px`, width: '200px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   );
   }
};
export default Map;
