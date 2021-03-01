import React from 'react'
import { Text, View, Image } from 'react-native'
import ATLMAD from "../../../RawData/images/atletico_madrid.png";


const StandingRowUI = () => {
    return <View>
        <View style={{
            display: 'flex',
            flexDirection: 'row'
        }} >
            <View
            style={{
                display: 'flex',
                flexDirection: 'row'
            }}
            >
                <Text
                style={{
                }}
                >1</Text>
                <Image 
                style={{
                    width: 20,
                    height: 20,
                    resizeMode: 'center'
                }}
                source={ATLMAD} 
                />
                <Text>Atletico Madrid</Text>
            </View>
        </View>
    </View>
}

export {StandingRowUI}