import React, { useState } from 'react';
import {Image, Text, StyleSheet, Dimensions, TouchableOpacity, ImageProps } from 'react-native';
type Props = {
    src: ImageProps;
    text: string;
    width: number;
    height: number;
};

export default function GridView(props: Props){
    const {width, height} = props;
    return(
        <TouchableOpacity style={styles.gridContainer}>
            <Image source={props.src} style={{width:width, height:height}} />
            <Text>{props.text}</Text>
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