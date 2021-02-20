import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import ATLETICO_MADRID from "../../RawData/images/atletico_madrid.png";
import BARCELONA from "../../RawData/images/fc_barcelona.gif";


const FixtureUI = () =>
{
    return <View style={styles.root} >
        
        <View style={{ flex : 3 }} >
            <Image style={styles.Image} source={ATLETICO_MADRID} />
            <Text style={styles.teamName} >Ateltico Madrid</Text>
        </View>
        <View style={{ flex : 1 }} >
            <Text >Vs</Text>
        </View>
        <View style={{ flex : 3 }} >
            <Image style={styles.Image} source={BARCELONA} />
            <Text style={styles.teamName} >FC Barcelona</Text>
        </View>

    </View>
}

const styles = StyleSheet.create({
    root : {
        flex : 1,
        flexDirection : 'row'
    },
    image : {
        width : 5,
        height : 5
    },
    teamName : {
        fontSize : 10
    }
  });
  

export { FixtureUI }