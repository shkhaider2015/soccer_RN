import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'


const FixtureUI = ({ item }) =>
{
    return <View style={styles.root} >
        
        <View style={{ flex : 3, alignItems: 'center' }} >
            <Image style={styles.image} source={{ uri : item.teams.home.logo}} />
            <Text style={styles.teamName} >{item.teams.home.name}</Text>
        </View>
        <View style={{ flex : 1 , alignItems: 'center', alignSelf: 'center' }} >
            
            {
                item.fixture.status.short === "FT" ? <View style={{ display : 'flex', flexDirection : 'row' }} >
                    <Text > { item.goals.home.toString() } </Text> 
                    <Text style={{ paddingStart : 5, paddingEnd : 5 }} >-</Text> 
                    <Text> { item.goals.away.toString() } </Text>
                </View> : <Text style={{ fontSize: 20, fontWeight: 'bold' }} >Vs</Text>
            }
            
        </View>
        <View style={{ flex : 3, alignItems: 'center'  }} >
            <Image style={styles.image} source={{ uri : item.teams.away.logo}} />
            <Text style={styles.teamName} >{item.teams.away.name}</Text>
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