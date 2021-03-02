import React, { useCallback, useRef } from 'react'
import { Text, View, Image, FlatList } from 'react-native'
import ATLMAD from "../../../RawData/images/atletico_madrid.png";


const data = [24, 76, 6, 12, 4, 6]

const StandingRowUI = ({ data }) => {

    const refFlatList = useRef(null)


    return <View style={{
        display: 'flex',
        flexDirection: 'row',
        marginStart: 15,
        paddingStart: 5,
        paddingEnd: 5,
        paddingTop: 5,
        paddingBottom: 5,
    }} >
        <View
            style={{
                display: 'flex',
                flexDirection: 'row',
                flex: 1
            }}
        >
            <Text style={{ flex: 1 }}> {data['rank']} </Text>
            <Image
                style={{
                    width: 20,
                    height: 20,
                    resizeMode: 'center',
                    flex: 1

                }}
                source={{ uri: data['team']['logo']  }}
            />
            <Text style={{ flex: 8, textAlign: 'center' }} >{data['team']['name']}</Text>
        </View>


        <View style={{ flex: 1, flexDirection: 'row' }} >

            <Text> {data['all']['played']} </Text>
            <Text> {data['all']['win']} </Text>
            <Text> {data['all']['draw']} </Text>
            <Text> {data['all']['lose']} </Text>
            <Text> {data['goalsDiff']} </Text>
            <Text> {data['points']} </Text>
        </View>

    </View>

}

export { StandingRowUI }