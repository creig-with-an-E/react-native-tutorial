import React, {Component} from 'react';
import { View } from 'react-native';
import axios from 'axios';  //used to make the http request

import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    //when to load the component, when the component is about to render we want to get the data
    //class based component knows when its about to be rendered

    state ={ albums: [] };

    componentWillMount(){
        axios.get("https://rallycoding.herokuapp.com/api/music_albums")
           .then(response => this.setState({ albums:response.data }));
    }

    renderAlbums(){
       return this.state.albums.map((album) =>
<AlbumDetail key ={album.title} album = {album} />)
    }

    render(){
        console.log(this.state);
        return(
            <View>
                {this.renderAlbums()}
            </View>
        )
    }
}
export default AlbumList;
