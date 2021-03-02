import React from 'react'
import { View, Text, Image } from 'react-native'
import ATLMAD from "../../../RawData/images/atletico_madrid.png";


export const LeftSide = () =>
{
    return <View>
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            marginStart: 15,
            marginEnd: 15,
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
                <Text style={{ flex: 1 }}>1</Text>
                <Image
                    style={{
                        width: 20,
                        height: 20,
                        resizeMode: 'center',
                        flex: 1

                    }}
                    source={ATLMAD}
                />
                <Text style={{ flex: 8, textAlign: 'center' }} >Atletico Madrid</Text>
            </View>

        </View>
    </View>
}