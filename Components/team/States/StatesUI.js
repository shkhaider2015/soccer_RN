import React from 'react'
import { Image, Text, View } from 'react-native'
import PLAYER from "../../../RawData/images/47323.png";


const StatesUI = ({ data }) => {
    return <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', marginStart: 10, marginEnd: 10, borderRadius: 5, marginTop: 5}} >
        <View style={{ flex: 4, flexDirection: 'row' }} >
            <Text style={{ flex: 1, textAlign: 'center', alignSelf: 'center' }} >1</Text>
            <Image
                style={{ width: 80, height: 80, flex: 2 }}
                source={{ uri: data.player.photo}}
            />
            <View style={{ flex: 6, alignSelf: 'center' }} >
            <Text style={{ textAlign: 'center', fontSize: 14  }} > {data.player.name} </Text>
            <View style={{ flexDirection: 'row', alignSelf: 'center', opacity: 0.5 }} >
                <Image
                style={{ width: 15, height: 15, alignSelf: 'center' }}
                source={{ uri: data.statistics[0].team.logo }}
                />
                <Text style={{ textAlign: 'center', alignSelf: 'center', fontSize: 12 }} > {data.statistics[0].team.name} </Text>
            </View>

            </View>
        </View>

        <Text style={{ flex: 1, textAlign: 'center', alignSelf: 'center' }} >{data.statistics[0].goals.assists ? data.statistics[0].goals.assists : 0 }</Text>
        <Text style={{ flex: 1, textAlign: 'center', alignSelf: 'center', fontWeight: 'bold' }} >{data.statistics[0].goals.total}</Text>

    </View>
}

export { StatesUI }