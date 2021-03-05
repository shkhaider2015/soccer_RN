import React from 'react'
import { Image, Text, View } from 'react-native'
import PLAYER from "../../../RawData/images/47323.png";


const StatesUI = ({ data }) => {
    return <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', marginStart: 10, marginEnd: 10, borderRadius: 5, marginTop: 5}} >
        <View style={{ flex: 4, flexDirection: 'row' }} >
            <Text style={{ flex: 1, textAlign: 'center', alignSelf: 'center' }} >1</Text>
            <Image
                style={{ width: 60, height: 60, flex: 2 }}
                source={{ uri: data.player.photo}}
            />
            <Text style={{ flex: 6, textAlign: 'center', alignSelf: 'center' }} > {data.player.name} </Text>
        </View>

        <Text style={{ flex: 1, textAlign: 'center', alignSelf: 'center' }} >{data.statistics[0].goals.assists}</Text>
        <Text style={{ flex: 1, textAlign: 'center', alignSelf: 'center', fontWeight: 'bold' }} >{data.statistics[0].goals.total}</Text>

    </View>
}

export { StatesUI }