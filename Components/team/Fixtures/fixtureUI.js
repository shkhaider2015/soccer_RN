import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { getDateFromMillis } from '../../Utility/TimeUtils';


const FixtureUI = ({ item }) => {

    return <View style={styles.root} >

        <View 
         style={{
             alignItems : 'flex-start',
             marginStart: 50,
             marginBottom: 15
         }}
         >
        <Text style={{ opacity : 0.5 }} > {
        getDateFromMillis(item.fixture.timestamp, item.fixture.status.short) 
        } </Text>
        </View>
        <View style={styles.subRoot} >
            <View style={{ flex: 3, alignItems: 'center' }} >
                <Image style={styles.image} source={{ uri: item.teams.home.logo }} />
                <Text style={styles.teamName} >{item.teams.home.name}</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center', alignSelf: 'center' }} >

                {
                    item.fixture.status.short === "FT" ? <View style={{ display: 'flex', flexDirection: 'row' }} >
                        {item.teams.home.winner ? <Text style={{ fontSize: 20, fontWeight: 'bold' }} > {item.goals.home.toString()} </Text> : <Text style={{ fontSize: 20, fontWeight: 'normal' }} > {item.goals.home.toString()} </Text>}

                        <Text style={{ paddingStart: 10, paddingEnd: 10 }} >-</Text>
                        {item.teams.away.winner ? <Text style={{ fontSize: 20, fontWeight: 'bold' }} > {item.goals.away.toString()} </Text> : <Text style={{ fontSize: 20, fontWeight: 'normal' }} > {item.goals.away.toString()} </Text>}

                    </View> : <Text style={{ fontSize: 20, fontWeight: 'bold' }} >Vs</Text>
                }

            </View>
            <View style={{ flex: 3, alignItems: 'center' }} >
                <Image style={styles.image} source={{ uri: item.teams.away.logo }} />
                <Text style={styles.teamName} >{item.teams.away.name}</Text>
            </View>
        </View>


    </View>
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: "#FFFFFF",
        flexDirection: 'column',
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 10,
        marginStart: 10,
        marginEnd: 10,
        borderRadius: 10,
        height: 150,
    },
    subRoot: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
    },
    image: {
        width: 70,
        height: 70,
        resizeMode: 'stretch'

    },
    teamName: {
        fontSize: 12,
        marginTop: 5
    }
});

const MemodFixtureUI = React.memo(FixtureUI)

export { MemodFixtureUI }