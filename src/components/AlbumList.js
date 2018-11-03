import React, {Component} from 'react';
import { View , Text } from 'react-native';
import axios from 'axios';  //used to make the http request

class AlbumList extends Component {
    //when to load the component, when the component is about to render we want to get the data
    //class based component knows when its about to be rendered

    state ={albums: []};
    componentWillMount(){
        axios.get("https://rallycoding.herokuapp.com/api/music_albums")
           .then(response => console.log(response));
    }

    render(){
        return(
            <View>
                <Text>AlbumList</Text>
            </View>
        )
    }
}
export default AlbumList;
