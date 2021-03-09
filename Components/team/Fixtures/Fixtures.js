import React, { useContext, useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { FixtureListUI } from './fixtureList'
import { bubbleSortByTime } from "../../Utility/updateFixtureArray";
import LeagueIdContext from '../Context/mCTX';


const Fixtures = () => {

    const dispatch = useDispatch()
    const mCTX = useContext(LeagueIdContext)
    const select = useSelector(state => state)
    const [fetchedData, setFetcheddata] = useState(null)
    const [scrollIndex, setScrollIndex] = useState(0)


    useEffect(
        () => {

            async function getLeagueId() {
                // dispatch(
                //     fetchFixturesBegin()
                // )

                const response = await fetch(`https://v3.football.api-sports.io/fixtures?league=${mCTX[0]}}&season=2020`, {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "v3.football.api-sports.io",
                        "x-rapidapi-key": "bb282edd25b616a90605f35b51ceb83d"
                    }
                })

                if (!response.ok) {
                    throw Error(response.statusText);
                }
                else {
                    const data = await response.json()
                    const data2 = await bubbleSortByTime(data['response'])
                    setFetcheddata(data2)

                }
            }

            if(mCTX[0] !== null)
            {
                getLeagueId()

            }

        },
        [mCTX[0]]
    )

    useEffect(
        () => {
            console.log("UseEfeect()  2")

            if(fetchedData !== null)
            {
                if (scrollIndex === 0 && fetchedData.length !== 0) {
                    for (let i = 0; i < fetchedData.length; i++) {
                        const element = fetchedData[i];
    
                        if (element.fixture.status.short === "NS") {
                            console.log(i)
                            setScrollIndex(i)
                            break
                        }
    
                    }
                }
            }
        },
        [fetchedData]
    )


    return <View>
        {console.log("ScrollIndex : ", scrollIndex)}

        {
            scrollIndex === 0
                ? <Text>Loading ...</Text>
                : <FixtureListUI scrollIndex={scrollIndex} data={select.LeagueFixtures.items} />
        }


    </View>
}

export { Fixtures }