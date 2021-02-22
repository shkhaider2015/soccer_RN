import React from 'react'
import { Text, View } from 'react-native'


export const StartSplashScreen = () =>
{
    return <View style={{ display : 'flex', flexDirection : 'column', alignItems : 'center' }} >
        <Text style={{ fontSize : 25, fontWeight : 'bold', marginBottom : 'auto', marginTop : 'auto' }} >Start Screen</Text>
    </View>
}