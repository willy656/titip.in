import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import { profileIcon, logo, profileBG, settingIcon, likeIcon, favoriteIcon, bellIcon, shopIcon, infoIcon, peopleIcon, protectionIcon } from '../../../assets';
import { FontAwesome, Entypo } from '@expo/vector-icons';
import { withTheme } from 'react-native-elements';
import GridView from '../../components/GridView';

export default function ProfileScene (){
    return(
        <View style={styles.container}>
            <ImageBackground source={profileBG} style={styles.profileContainer} imageStyle= {{opacity:0.5}}>
                
                    <View style={styles.backContainer}>
                        <Text style={{color:'white',flex:1,}}><Entypo size={30} name="chevron-left"></Entypo></Text>
                        <Text style={{color:'white',fontSize:16,fontWeight:'bold',flex:10, textAlign:"center", paddingRight:'7%'}}>My Account</Text>
                    </View>
                    <Image source={profileIcon} style={styles.icon}></Image>
                    <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Budi</Text>
                    <Text style={{color:'white',fontSize:13,fontWeight:'bold'}}>budi@gmail.com</Text>
                
            </ImageBackground>
            <View style={styles.contentContainer}>
                
               <GridView src={peopleIcon} text="My Shop" iconWidth={30} iconHeight={33}></GridView>
               <GridView src={settingIcon} text="Setting" iconWidth={30} iconHeight={33}></GridView>
               <GridView src={infoIcon} text="FAQs" iconWidth={30} iconHeight={33}></GridView>
               <GridView src={likeIcon} text="Feedback" iconWidth={30} iconHeight={33}></GridView>
               <GridView src={protectionIcon} text="Privacy" iconWidth={30} iconHeight={33}></GridView>
               <GridView src={infoIcon} text="Help" iconWidth={30} iconHeight={33}></GridView>
               <GridView src={favoriteIcon} text="Likes" iconWidth={30} iconHeight={33}></GridView>
               <GridView src={bellIcon} text="Notification" iconWidth={30} iconHeight={33}></GridView>
               <GridView src={shopIcon} text="Orders" iconWidth={30} iconHeight={33}></GridView>

                
               
            </View>
        </View>
    )
}
const rows = 5.5;
const cols = 3;
const marginHorizontal = 4;
const marginVertical = 4;
const width = (Dimensions.get('window').width / cols) - (marginHorizontal * (cols + 1));
const height = (Dimensions.get('window').height / rows) - (marginVertical * (rows + 1));
const styles = StyleSheet.create({
    icon:{
        width:100,
        height:100,
        marginTop:'10%',
    },
    profileContainer:{
        alignItems:"center",
        flex:1,
        borderWidth:2,
        paddingBottom:'5%',
        paddingTop:'4%',
        tintColor:'#000839'
        
    },
    contentContainer:{
        
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:'10%',
        paddingBottom:'10%',
        
    },
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
    container:{
        backgroundColor:'#000839',
        flex:1,
    },
    backContainer:{
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end',
        
    },
   
   
})