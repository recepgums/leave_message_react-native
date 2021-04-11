import React from "react";
import {View,Text,StyleSheet,ScrollView,ImageBackground,Image} from "react-native";
import {DrawerNavigatorItems} from "react-navigation-drawer"
const image = { uri: "https://media3.s-nbcnews.com/j/newscms/2019_41/3047866/191010-japan-stalker-mc-1121_06b4c20bbf96a51dc8663f334404a899.fit-760w.JPG" };
const profileImage = { uri: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Billykid.jpg" };
export default Sidebar = props =>(
    <ScrollView>
        <ImageBackground
            source={image}
            style={{width:undefined,padding:16,paddingTop:50}}
        >
            <Image source={profileImage} style={styles.profile}/>
            <Text style={styles.name}>Bill the Kid</Text>
        </ImageBackground>
        <View style={styles.container}>
            <DrawerNavigatorItems {...props}/>
        </View>
    </ScrollView>
)
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    profile:{
        width:80,
        height:80,
        borderRadius:40,
        borderWidth:3,
        borderColor:"#fff"
    },
    name:{
        color:"#fff",
        fontSize:20,
        fontWeight:"bold",
        marginVertical:8
    },
});
