import React, { useContext, useEffect, useState } from 'react'
import { Text, View, Image, FlatList, ScrollView, Dimensions, SafeAreaView } from 'react-native'

import { StandingRowUI } from './StandingRowUI';


const StandingTableUI = ({fetchedData, isGroup}) => {

        return <View style={{ backgroundColor: 'white' }} >
            <View style={{ marginBottom: isGroup ? 10 : 85, marginTop: 10 }} >
                <FlatList
                    data={fetchedData}
                    renderItem={({ item }) => <StandingRowUI data={item} />}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>



        </View>
    // }




}

export { StandingTableUI }