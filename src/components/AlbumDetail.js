import React from 'react';
import {View , Text } from 'react-native';

const AlbumDetail =(props) =>{
    let album = props.album;
    return (
        <Text key ={props.key}> {album.title } </Text>
    )
}

export default AlbumDetail;