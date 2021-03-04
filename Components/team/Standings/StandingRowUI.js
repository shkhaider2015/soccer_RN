import React, { useCallback, useRef } from 'react'
import { Text, View, Image, FlatList, TouchableWithoutFeedback } from 'react-native'
import ATLMAD from "../../../RawData/images/atletico_madrid.png";


const data = [24, 76, 6, 12, 4, 6]

const StandingRowUI = ({ data }) => {

    const refFlatList = useRef(null)


    return <View>

        

        <View style={{
            flexDirection: 'row',
            height: 50
        }} >


            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flex: 1,
                    alignContent: 'center',

                }}
            >
                <Text style={{ flex: 1, textAlign: 'center', alignSelf: 'center' }}> {data['rank']} </Text>
                <Image
                    style={{
                        height: 20,
                        width: 20,
                        flex: 1,
                        marginStart: 10,
                        alignSelf: 'center'

                    }}
                    source={{ uri: data['team']['logo'] }}
                />
                <Text style={{ flex: 8, textAlign: 'center', alignSelf: 'center' }} >{data['team']['name']}</Text>
            </View>


            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }} >

                <Text style={{ marginTop: 5, marginBottom: 5, textAlign: 'center', width: 30 }} > {data['all']['played']} </Text>
                <Text style={{ marginTop: 5, marginBottom: 5, textAlign: 'center', width: 30 }} > {data['all']['win']} </Text>
                <Text style={{ marginTop: 5, marginBottom: 5, textAlign: 'center', width: 30 }} > {data['all']['draw']} </Text>
                <Text style={{ marginTop: 5, marginBottom: 5, textAlign: 'center', width: 30 }} > {data['all']['lose']} </Text>
                <Text style={{ marginTop: 5, marginBottom: 5, textAlign: 'center', width: 30 }} > {data['goalsDiff']} </Text>
                <Text style={{ marginTop: 5, marginBottom: 5, textAlign: 'center', width: 30 }} > {data['points']} </Text>
            </View>


        </View>
   

        </View>

}

export { StandingRowUI }