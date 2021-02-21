import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import ATLETICO_MADRID from "../../RawData/images/atletico_madrid.png";
import BARCELONA from "../../RawData/images/fc_barcelona.gif";


const FixtureUI = ({ item }) =>
{
    return <View style={styles.root} >
        
        <View style={{ flex : 3, alignItems: 'center' }} >
            <Image style={styles.image} source={item.homeLogo} />
            <Text style={styles.teamName} >{item.home}</Text>
        </View>
        <View style={{ flex : 1 , alignItems: 'center', alignSelf: 'center' }} >
            <Text style={{ fontSize: 20, fontWeight: 'bold' }} >Vs</Text>
        </View>
        <View style={{ flex : 3, alignItems: 'center'  }} >
            <Image style={styles.image} source={item.awayLogo} />
            <Text style={styles.teamName} >{item.away}</Text>
        </View>

    </View>
}

const styles = StyleSheet.create({
    root : {
        backgroundColor: "#FFFFFF",
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
        marginTop : 20
    },
    image : {
        width : 70,
        height : 70,
        resizeMode : 'stretch'

    },
    teamName : {
        fontSize : 12,
        marginTop: 5
    }
  });
  

export { FixtureUI }