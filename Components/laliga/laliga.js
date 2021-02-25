import React from 'react'
import { Text, View } from 'react-native'
import { FixtureListUI } from './fixtureList'


const Laliga = () => {
    return <View>

        <View style={{ paddingBottom: 15, alignItems: 'center', backgroundColor: '#FFFFFF', paddingTop: 10 }} >
            <Text style={{ fontSize: 22, fontWeight: 'bold' }} >Laliga Fixtures</Text>
            <Text style={{ fontSize: 12 }} >Seasion 20/21</Text>
        </View>

        <FixtureListUI />

    </View>
}

export { Laliga }