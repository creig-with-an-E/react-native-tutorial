//import a library to help create a component

import React  from 'react';
import {Text, AppRegistry, View } from 'react-native';
import Header from './src/components/header'
import AlbumList from './src/components/AlbumList';


//attempt to render a component

const App =() => {
       return(
           <View>
               <Header headerText={'Albums'}/>
                <AlbumList></AlbumList>
           </View>
       )
    }
;

//render to device

AppRegistry.registerComponent('albums',()=>App);
//only the root component uses the app registry