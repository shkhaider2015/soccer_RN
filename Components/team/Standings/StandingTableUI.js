import React from 'react'
import { Text, View, Image, FlatList } from 'react-native'
import ATLMAD from "../../../RawData/images/atletico_madrid.png";

const data = ['MP', 'W', 'D', 'L', 'Pts', 'GF', 'GA', 'GD']

const StandingTableUI = () => {
    return <View>
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            marginStart: 20,
            marginEnd: 20
        }} >

            <Text style={{  }} >Club</Text>

            <FlatList
            style={{
                
            }}
            data={data}
            renderItem={({item}) => <Text> {item} </Text> }
            keyExtractor={(item, index) => index.toString()}
            horizontal={true}
            />

            {/* <Text style={{ flex: 1 }} >W</Text>

            <Text style={{ flex: 1 }} >D</Text>

            <Text style={{ flex: 1 }} >L</Text>

            <Text style={{ flex: 1 }} >Pts</Text>

            <Text style={{ flex: 1 }} >GF</Text>

            <Text style={{ flex: 1 }} >GA</Text>

            <Text style={{ flex: 1 }} >GD</Text> */}



           </View>
    </View>
}

export {StandingTableUI}