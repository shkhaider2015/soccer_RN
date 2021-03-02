import React, { useState } from 'react'
import { Text, View, Image, FlatList } from 'react-native'
import ATLMAD from "../../../RawData/images/atletico_madrid.png";
import { LeftSide } from './LeftSide';
import { StandingRowUI } from './StandingRowUI';

const data = ['MP', 'W', 'D', 'L', 'Pts', 'GF', 'GA', 'GD']

const StandingTableUI = () => {

    const [scrollPosition, setScrollPosition] = useState(0)
    const jj = false
    if(jj)
    {
        return <LeftSide />
    }
    else
    {
        
    return <View
    style={{
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'gray'
        
    }}
    >
        <View style={{
            flexDirection: 'row',
            marginStart: 15,
            marginEnd: 15,
            paddingStart: 5,
            paddingEnd: 5,
            paddingTop: 5,
            paddingBottom: 5,
        }} >

            <Text style={{ flex : 1 }} >Club</Text>

            <FlatList
            style={{
                flex: 1
            }}
            data={data}
            renderItem={({item}) => <Text style={{ width : 30, textAlign: 'center' }} > {item} </Text> }
            keyExtractor={(item, index) => index.toString()}
            horizontal={true}
            onScroll={(ee) => setScrollPosition(ee.nativeEvent.contentOffset.x)}
            />

            {/* <Text style={{ flex: 1 }} >W</Text>

            <Text style={{ flex: 1 }} >D</Text>

            <Text style={{ flex: 1 }} >L</Text>

            <Text style={{ flex: 1 }} >Pts</Text>

            <Text style={{ flex: 1 }} >GF</Text>

            <Text style={{ flex: 1 }} >GA</Text>

            <Text style={{ flex: 1 }} >GD</Text> */}



           </View>
        <StandingRowUI scrollPosition={scrollPosition} />
    
    
    
    </View>

    }

}

export {StandingTableUI}