import React, { useEffect } from 'react';
import axios from "axios"
import './Feed.css';

export default function Map() {

    const geoKey = 'AIzaSyCda_xJK2EMHj9YiBu-IA_-bWiKZUlkhKI';

    const url = 'https://maps.googleapis.com/maps/api/geocode/json?'

    useEffect(() => {
        geocode();
    }, []);

    function geocode() {

        let location = '3201 Duval Rd Austin TX';
        axios.get(url, {
            params: {
                address: location,
                key: geoKey
            }
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {

            });
    }

    return (
        <div>Working</div>
    )
}