//import a library to help create a component

import React  from 'react';
import {Text, AppRegistry } from 'react-native';
//attempt to render a component

const App =() => {
       return( <Text>Some Text</Text>)
    }
;

//render to device

AppRegistry.registerComponent('albums',()=>App);
