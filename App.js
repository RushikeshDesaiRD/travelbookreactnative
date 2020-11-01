
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image
} from 'react-native';

import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Onboarding, DestinationDetail} from "./screens/index"

import { COLORS, icons, SIZES } from './constants';
import Entypo from "react-native-vector-icons/Entypo"
import Tabs from './navigation/tabs';
const theme = {
   ...DefaultTheme,
   colors:{
     ...DefaultTheme.colors,
     border:"transparent"
   }
}

const stack = createStackNavigator()
const App = () =>{
  return(
    <>
     <NavigationContainer theme={theme}>
       <stack.Navigator initialRouteName="Onboarding">
         <stack.Screen name="DestinationDetail" component={DestinationDetail}
         options={{headerShown:false}}
         />
            <stack.Screen name="Onboarding" component={Onboarding}
            
            options={{
              elevation: 0,
              title:null,
             headerStyle:{
              backgroundColor:COLORS.white
             },
             
             headerLeft:null,
             headerRight:()=>(
               <TouchableOpacity style={{marginRight:SIZES.padding}} onPress={() => console.log("Menu Button Clicked...!")}>
                  <Entypo color="black" name="menu" size={25}/>
               </TouchableOpacity>
             )
            }}
            />
            <stack.Screen options={{
              title:null,
              headerStyle:{
                backgroundColor:COLORS.white
              },
              headerLeft:({onPress}) => (
                <TouchableOpacity style={{marginLeft:SIZES.padding}} onPress={onPress}>
                    <Image source={icons.back} style={{width:25, height:25}}/>
                </TouchableOpacity>
              ),
              headerRight:() => (
                <TouchableOpacity style={{marginRight:SIZES.padding}}>
                    <Image source={icons.menu} style={{width:25, height:25}}/>
                </TouchableOpacity>
              )
            }} name="Home" component={Tabs}/>
       </stack.Navigator>

     </NavigationContainer>
    </>
  )
}
export default App;
