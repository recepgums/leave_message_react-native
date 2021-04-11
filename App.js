/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {Dimensions} from "react-native";

import {
    RoomsScreen,
    YoutubeScreen
} from "./screens";
import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/Login";
import SideBar from "./components/SideBar";
const DrawerNavigator = createDrawerNavigator({
    RoomsScreen:{
        screen:RoomsScreen,
        navigationOptions:{
            title:'Rooms',
            // drawerIcon:({tintColor}) => <Feather name="user" size={16} color={tintColor} />
        }
    },
    HomeScreen,
    YoutubeScreen,
    Login
},{
    contentComponent:props => <SideBar {...props}/>,
    drawerWidth : Dimensions.get("window").width *0.5,
    hideStatusBar:true,
    contentOptions:{
        activeBackGroundColor:"rgba(212,118,207,0.2)",
        activeTintColor:"#531158",
        itemsContainerStyle:{
            marginTop:16,
            marginHorizontal:8,
        },
        itemStyle:{
            borderRadius:4
        }

    }
});

export default createAppContainer(DrawerNavigator);
