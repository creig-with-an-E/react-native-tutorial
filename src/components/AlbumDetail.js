import React from 'react';
import { Text , View, Image} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


const AlbumDetail =(props) =>{
    const { title ,
            artist ,
            thumbnail_image ,
            image } = props.album;

    const { thumbnailStyle ,
            headerContentStyle,
            thumbnailContainer,
            headerText,
            imageStyle } = styles;
    return (
         <Card>
            <CardSection>
                <View style = {thumbnailContainer}>
                    {/*this is the image area. images do not automatically size to fit the area*/}
                    <Image style={thumbnailStyle} source={{uri:  thumbnail_image}}/>
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerText}> {title } </Text>
                    <Text > {artist } </Text>
                </View>

            </CardSection>

            <CardSection>
                <Image style={ imageStyle } source={{uri: image}}/>
            </CardSection>

            <CardSection>
                <Button/>
             </CardSection>
         </Card>

        )
};

const styles = {
    headerContentStyle :{
        flexDirection:'column',
        justifyContent:'space-around',

    },
    headerText :{
      fontSize:18,
    },
    thumbnailStyle:{
      height:50,
      width:50
    },
    thumbnailContainer :{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,
        marginRight:10,
    },
    imageStyle :{
        //sets the width of the image to fill the area
        height:300,
        flex: 1,
        width:null,
    }
};

export default AlbumDetail;