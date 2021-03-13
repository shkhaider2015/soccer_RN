import React from 'react'
import { Text, View } from 'react-native'


export const StandingHeader= () =>
{
    return <View style={{
        flexDirection: 'row',
        paddingTop: 5,
        paddingBottom: 5,
        borderBottomWidth: 1
    }} >

        <View style={{ marginTop: 5, marginBottom: 5, marginStart: 0, flex: 1, textAlign: 'left' }} >
            <Text style={{ marginStart: 20 }} >Club</Text>
        </View>

        <View style={{ flex: 1, flexDirection: 'row' }} >

            <Text style={{ marginTop: 5, marginBottom: 5, textAlign: 'center', width: 30 }} >MP</Text>
            <Text style={{ marginTop: 5, marginBottom: 5, textAlign: 'center', width: 30 }} >W</Text>
            <Text style={{ marginTop: 5, marginBottom: 5, textAlign: 'center', width: 30 }} >D</Text>
            <Text style={{ marginTop: 5, marginBottom: 5, textAlign: 'center', width: 30 }} >L</Text>
            <Text style={{ marginTop: 5, marginBottom: 5, textAlign: 'center', width: 30 }} >GD</Text>
            <Text style={{ marginTop: 5, marginBottom: 5, textAlign: 'center', width: 30, fontWeight: 'bold' }} >Pts</Text>
        </View>



    </View>

}