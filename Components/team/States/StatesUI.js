import React from 'react'
import { Image, Text, View } from 'react-native'
import PLAYER from "../../../RawData/images/47323.png";


const StatesUI = () => {
    return <View style={{ flexDirection: 'row' }} >
        <Text>1</Text>
        <Image 
        style={{ width: 20, height: 20 }}
        source={PLAYER}
        />

        <Text>5</Text>
        <Text>12</Text>
        
    </View>
}

export {StatesUI}