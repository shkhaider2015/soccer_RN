import React from 'react'
import { View, Text } from 'react-native'



export const RightSide = ({item}) =>
{
    return <View style={{ flexDirection: 'row', height: 20, marginTop: 5, marginBottom: 5 }} >

<Text style={{ flex: 1, width: 30 }} >{item[0]}</Text>

<Text style={{ flex: 1, width: 30 }} >{item[1]}</Text>

<Text style={{ flex: 1, width: 30 }} >{item[2]}</Text>

<Text style={{ flex: 1, width: 30 }} >{item[3]}</Text>

<Text style={{ flex: 1, width: 30 }} >{item[4]}</Text>

<Text style={{ flex: 1, width: 30 }} >{item[5]}</Text>

<Text style={{ flex: 1, width: 30 }} >{item[6]}</Text>

<Text style={{ flex: 1, width: 30 }} >{item[7]}</Text>
</View>

}