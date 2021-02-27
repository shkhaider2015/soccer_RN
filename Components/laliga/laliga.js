import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { FixtureListUI } from './fixtureList'


const Laliga = () => {

    const select = useSelector(state => state)
    const [scrollIndex, setScrollIndex] = useState(0)

    useEffect(
        () => {
            if (scrollIndex === 0) {
                for (let i = 0; i < select.LeagueFixtures.items.length; i++) {
                    const element = select.LeagueFixtures.items[i];

                    if (element.fixture.status.short === "NS") {
                        console.log(i)
                        setScrollIndex(i)
                        break
                    }

                }
            }
        },
        []
    )


    return <View>
        {console.log("ScrollIndex : ", scrollIndex)}
        <View style={{ paddingBottom: 15, alignItems: 'center', backgroundColor: '#FFFFFF', paddingTop: 10 }} >
            <Text style={{ fontSize: 22, fontWeight: 'bold' }} >Laliga Fixtures</Text>
            <Text style={{ fontSize: 12 }} >Seasion 20/21</Text>
        </View>

        {
            scrollIndex === 0
                ? <Text>Loading ...</Text>
                : <FixtureListUI scrollIndex={scrollIndex} data={select.LeagueFixtures.items} />
        }


    </View>
}

export { Laliga }