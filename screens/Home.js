import React from 'react'
import { View,Image,Text,FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { icons, images } from '../constants';
import { COLORS, FONTS, SIZES } from './../constants/theme';

import LinearGradient from 'react-native-linear-gradient';
const OptionItem = ({icon, bgColor, onPress, label}) =>{
    return (
      <TouchableOpacity style={{justifyContent:"center", alignItems:'center'}} onPress={onPress}>
           <View style={[styles.shadow, {width:60, height:60}]}>
               <LinearGradient style={{borderRadius:15, flex:1, justifyContent:'center', alignItems:"center"}} colors={bgColor} start={{x:0, y:0}} end={{x:1,y:1}} >
                   <Image style={{tintColor:COLORS.white, width:30, height:30}} source={icon} resizeMode="contain"/>
               </LinearGradient>
           </View>
      </TouchableOpacity>
    )
}
 
function Home({navigation}) {
    const [destinations, setDestinations] = React.useState([
        {
            id: 0,
            name: "Ski Villa",
            img: images.skiVilla,
        },
        {
            id: 1,
            name: "Climbing Hills",
            img: images.climbingHills,
        },
        {
            id: 2,
            name: "Frozen Hills",
            img: images.frozenHills,
        },
        {
            id: 3,
            name: "Beach",
            img: images.beach,
        },
    ]);

    function renderDestinations(item, index) {
        var destinationStyle = {};

        if (index == 0) {
            destinationStyle = { marginLeft: SIZES.padding, }
        }

        return (
            <TouchableOpacity
                style={{ justifyContent: 'center', marginHorizontal: SIZES.base, ...destinationStyle }}
                onPress={() => { navigation.navigate("DestinationDetail") }}
            >
                <Image
                    source={item.img}
                    resizeMode="cover"
                    style={{
                        width: SIZES.width * 0.28,
                        height: '82%',
                        borderRadius: 15
                    }}
                />

                <Text style={{ marginTop: SIZES.base / 2, ...FONTS.h4 }}>{item.name}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.container}>
           <View style={{flex:1,marginTop:SIZES.base, paddingHorizontal:SIZES.padding}}>
                <Image source={require("../assets/images/BEACHACTIVITIES.jpg")} resizeMode="contain" style={{width:'100%', height:'100%', borderRadius:15}}/>
           </View>
           <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal:SIZES.padding }}>
                <View style={{ flexDirection: 'row', marginTop: SIZES.padding, paddingHorizontal: SIZES.base,alignItems:"center", justifyContent:"space-between" }}>
                    <OptionItem
                        icon={icons.airplane}
                        bgColor={['#46aeff', '#5884ff']}
                        label="Flight"
                        onPress={() => { console.log("Flight") }}
                    />
                    <OptionItem
                        icon={icons.train}
                        bgColor={['#fddf90', '#fcda13']}
                        label="Train"
                        onPress={() => { console.log("Train") }}
                    />
                    <OptionItem
                        icon={icons.bus}
                        bgColor={['#e973ad', '#da5df2']}
                        label="Bus"
                        onPress={() => { console.log("Bus") }}
                    />
                    <OptionItem
                        icon={icons.taxi}
                        bgColor={['#fcaba8', '#fe6bba']}
                        label="Taxi"
                        onPress={() => { console.log("Taxi") }}
                    />
                </View>

                <View style={{ flexDirection: 'row', marginTop: SIZES.radius, paddingHorizontal: SIZES.base, alignItems:"center", justifyContent:"space-between" }}>
                    <OptionItem
                        icon={icons.bed}
                        bgColor={['#ffc465', '#ff9c5f']}
                        label="Hotel"
                        onPress={() => { console.log("Hotel") }}
                    />
                    <OptionItem
                        icon={icons.eat}
                        bgColor={['#7cf1fb', '#4ebefd']}
                        label="Eats"
                        onPress={() => { console.log("Eats") }}
                    />
                    <OptionItem
                        icon={icons.compass}
                        bgColor={['#7be993', '#46caaf']}
                        label="Adventure"
                        onPress={() => { console.log("Adventure") }}
                    />
                    <OptionItem
                        icon={icons.event}
                        bgColor={['#fca397', '#fc7b6c']}
                        label="Event"
                        onPress={() => { console.log("Event") }}
                    />
                </View>
            </View>
           <View style={{flex:1}}>
                <Text style={{marginTop:SIZES.base, marginHorizontal:SIZES.padding, ...FONTS.h2}}>Destination</Text>
                <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={destinations}
                renderItem={({index, item}) => renderDestinations(item, index)}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.white
    },
    shadow:{
        elevation:7
    }
})
export default Home;
