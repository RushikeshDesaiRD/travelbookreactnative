import React from 'react'
import { View, Text, Image } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from './../screens/Home';
import { COLORS } from './../constants/theme';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { icons } from '../constants';
//FontAwesome

const Tab = createBottomTabNavigator()
const tabOptions = {
    shadowLabel:false,
    style:{
        height:50,
        padding: 10,
        shadowColor:"#000",
        shadowOffset:{
            width:0,
            height:10
        },
        shadowOpacity:0.53,
        shadowRadius:13.97,
        elevation:8
    }

}
export default Tabs = () =>(
    <Tab.Navigator tabBarOptions={tabOptions}
     screenOptions={({route}) => ({
         tabBarIcon:({focused}) => {
             const tintColor = focused ? COLORS.primary : COLORS.gray;
             switch (route.name) {
                 case "Home":
                     return (
                       <Image source={icons.home} style={{width:30, height:30, tintColor:tintColor}}/>
                        
                     )
                 case "Search":
                     return (
                        <Image source={icons.home} style={{width:30, height:30}}/>
                     )
                 case "Account":
                     return (
                        <Entypo name="home" color={tintColor} style={25} />
                     )
                 case "Bookmark":
                     return (
                         <FontAwesome name="bookmark-o" color={tintColor} style={25} />
                     )


             }
         }
     })}
    >
        <Tab.Screen options={{  tabBarLabel:'',}} name="Home"  component={Home}/>
        <Tab.Screen  options={{
            tabBarLabel:'',
            tabBarIcon:() => (
                <Image source={icons.search}  style={{width:30, height:30, }}/>
            )
        }} name="bookmark" component={Home}/>
        <Tab.Screen name="search"
        options={{
            tabBarLabel:'',
            tabBarIcon:() => (
                <Image source={icons.bookmark}  style={{width:30, height:30}}/>
            )
        }} component={Home}/>
        <Tab.Screen name="account" options={{
              tabBarLabel:'',
            tabBarIcon:() => (
                <Image source={icons.user}  style={{width:30, height:30}}/>
            )
        }} component={Home}/>
    </Tab.Navigator>
)
