import React from 'react'
import { View, Text, SafeAreaView, Image, TouchableOpacity, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { images } from '../constants';
import { COLORS, FONTS, SIZES } from './../constants/theme';

export default function Onboarding({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
           <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
                <Image source={images.onboardingImage}
                 resizeMethod="auto"
                 style={{
                     width:"100%",
                     height:"100%"
                 }}
                />
           </View>
           <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
               <View style={{marginHorizontal:SIZES.padding, alignItems:"center"}}>
                    <Text style={{fontSize:20, fontWeight:"bold",color:"black"}}>Digital Ticket</Text>
                    <Text style={{color:COLORS.gray, marginTop:SIZES.padding, textAlign:"center",...FONTS.body3}}>The Digital Ticket is a App To Buy Tickets Using Internet And Mobile For Travel.</Text>
               </View>
               <TouchableOpacity onPress={() => navigation.navigate("Home")} style={[styles.shadow,{alignItems:"center", justifyContent:"center",marginTop:SIZES.padding, width:"70%", height:50, borderRadius:20}]}>
                    <LinearGradient start={{x:0, y:0}} end={{x:1, y:1}} colors={["#46eaff", "#5884ff"]} style={{width:'100%', height:"100%", alignItems:'center', justifyContent:"center", borderRadius:20}}>
                        <Text style={{color:"white", fontWeight:"bold"}}>Start!</Text>
                    </LinearGradient>
               </TouchableOpacity>
           </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.white
    },
    shadow:{
        shadowColor:"#fff",
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.25,
        shadowRadius:3.84,
        elevation:5
    }
})
