import React, { Component } from 'react';

import firebase from '@react-native-firebase/app';
import iid from '@react-native-firebase/iid';


async function Auth_App() {
    const id = await iid().get();
    //console.log('Current Instance ID: ', id);
    const token = await firebase.iid().getToken();
    //console.log('Token: ', token);

    const geo_info = await Geolocation.getCurrentPosition(
        position => {
            //console.log('position.coords', position.coords);

            Auth_info(position.coords, token);
        },
        error => {
            //console.log('error', error);

            Auth_info('', token);
        },
        {enableHighAccuracy: false, timeout: 15000, maximumAge: 1000},
    );
}



export default Pushtoken;