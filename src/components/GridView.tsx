import React, { useState } from 'react';
import {Image, Text, StyleSheet, Dimensions, TouchableOpacity, ImageProps } from 'react-native';
type Props = {
    src: ImageProps;
    text: string;
    iconWidth: number;
    iconHeight: number;
    onPress?: ()=>void;
};

export default function GridView(props: Props){
    const {iconWidth, iconHeight, src, text, onPress} = props;
    return(
        <TouchableOpacity style={styles.gridContainer} onPress = {onPress}>
            <Image source={src} style={{width:iconWidth, height:iconHeight}} />
            <Text>{text}</Text>
        </TouchableOpacity>
    )
}
const rows = 5.5;
const cols = 3;
const marginHorizontal = 4;
const marginVertical = 4;
const width = (Dimensions.get('window').width / cols) - (marginHorizontal * (cols + 1));
const height = (Dimensions.get('window').height / rows) - (marginVertical * (rows + 1));
const styles = StyleSheet.create({
    gridContainer:{
        backgroundColor:'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: marginVertical,
        marginBottom: marginVertical+10,
        marginLeft: marginHorizontal,
        marginRight: marginHorizontal,
        width: width,
        height: height,
        borderRadius:10,
       
    },
})